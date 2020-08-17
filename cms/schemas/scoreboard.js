export default {
  title: 'Scoreboard',
  name: 'scoreboard',
  type: 'object',
  fields: [
    {
      title: 'Results',
      name: 'results',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'result' } }],
    },
  ],
};
