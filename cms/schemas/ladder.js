export default {
  title: 'Ladder',
  name: 'ladder',
  type: 'document',
  fields: [
    { title: 'Name', name: 'name', type: 'string' },
    {
      title: 'Teams',
      name: 'teams',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'team' }],
        },
      ],
    },
    {
      title: 'Scoreboard',
      name: 'scoreboard',
      type: 'scoreboard',
    },
  ],
};
