export default {
  name: 'score',
  type: 'object',
  fields: [
    {
      title: 'Team',
      name: 'team',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      title: 'Round 1',
      name: 'round_1',
      type: 'number',
    },
    {
      title: 'Round 2',
      name: 'round_2',
      type: 'number',
    },
  ],
};
