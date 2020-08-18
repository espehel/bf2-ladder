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
  '/results',
  catchAsyncErrors(async (req, res) => {
    const query = '*[_type == "result"]';

    const results = await client.fetch(query);

    res.send(results);
  })
);

export default router;
