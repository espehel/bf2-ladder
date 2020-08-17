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
      title: 'Points',
      name: 'points',
      type: 'number',
    },
  ],
};
