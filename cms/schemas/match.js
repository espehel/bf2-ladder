export default {
  title: 'Match',
  name: 'match',
  type: 'document',
  fields: [
    {
      title: 'Team A',
      name: 'team_a',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      title: 'Team B',
      name: 'team_b',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      title: 'Match time',
      name: 'match_time',
      type: 'datetime',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Open', value: 'open' },
          { title: 'Complete', value: 'complete' },
        ],
      },
    },
    {
      title: 'Maps',
      name: 'maps',
      type: 'array',
      of: [{ type: 'match_map' }],
    },
  ],
  preview: {
    select: {
      teamA: 'team_a.name',
      teamB: 'team_b.name',
    },
    prepare(selection) {
      const { teamA, teamB } = selection;
      return {
        title: `${teamA} - ${teamB}`,
      };
    },
  },
};
