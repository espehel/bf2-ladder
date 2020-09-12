import express from 'express';
import sanityClient from '@sanity/client';

import { catchAsyncErrors } from '../utils';

const router = express.Router();

const SANITY_SECRET = process.env.SANITY_SECRET;

if (!SANITY_SECRET) {
  console.error('Required environment varaibles are not set', {
    SANITY_SECRET,
  });
  process.exit(1);
}

const client = sanityClient({
  projectId: '3kxov1pq',
  dataset: 'production',
  token: SANITY_SECRET,
});

router.get(
  '/teams',
  catchAsyncErrors(async (req, res) => {
    const query = '*[_type == "team"]';

    const teams = await client.fetch(query);

    res.send(teams);
  })
);

router.get(
  '/matches',
  catchAsyncErrors(async (req, res) => {
    const query = `
      *[_type == "match"]
      {...,
       team_a->{name},
      team_b->{name},
      maps[]{..., map->{name, "image": map_image.asset->url}}
    }`;

    const matches = await client.fetch(query);

    res.send(matches);
  })
);

router.get(
  '/matchesByTeams',
  catchAsyncErrors(async (req, res) => {
    const query = `
    *[ _type == "team" ]{
      ...,
      "matches": *[ _type == "match" && references(^._id) && status == "complete"] 
      {
        maps [] {
          "name": map->name,
          score_a{"team": team._ref, "tickets": round_1+round_2},
          score_b{"team": team._ref, "tickets": round_1+round_2}, 
        },
      },
    }`;

    const results = await client.fetch(query);

    res.send(results);
  })
);

export default router;
