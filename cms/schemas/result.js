export default {
  title: 'Result',
  name: 'result',
  type: 'document',
  fields: [
    {
      title: 'Team A',
      name: 'team_a',
      type: 'score',
    },
    {
      title: 'Team B',
      name: 'team_b',
      type: 'score',
    },
  ],
  preview: {
    select: {
      teamA: 'team_a',
      teamB: 'team_b',
    },
    prepare(selection) {
      const { teamA, teamB } = selection;
      return {
        title: `${teamA.points} - ${teamB.points}`,
      };
    },
  },
};
