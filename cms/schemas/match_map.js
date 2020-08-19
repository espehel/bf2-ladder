export default {
  title: 'Match map',
  name: 'match_map',
  type: 'object',
  fields: [
    {
      title: 'Map',
      name: 'map',
      type: 'reference',
      to: [{ type: 'map' }],
    },
    {
      title: 'Score A',
      name: 'score_a',
      type: 'score',
    },
    {
      title: 'Score B',
      name: 'score_b',
      type: 'score',
    },
  ],
  preview: {
    select: {
      title: 'map.name',
    },
  },
};
