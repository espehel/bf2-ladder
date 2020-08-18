import { ResultBasic, TeamWithResults } from '../../types/common/models';

export const getWins = (team: TeamWithResults): number =>
  team.results
    .map(getDifference(team._id))
    .map((diff) => (diff > 0 ? 1 : 0))
    .reduce(add, 0);

export const getLosses = (team: TeamWithResults): number =>
  team.results
    .map(getDifference(team._id))
    .map((diff) => (diff < 0 ? 1 : 0))
    .reduce(add, 0);

export const getDraws = (team: TeamWithResults): number =>
  team.results
    .map(getDifference(team._id))
    .map((diff) => (diff === 0 ? 1 : 0))
    .reduce(add, 0);

export const getPoints = (team: TeamWithResults): number =>
  team.results.map(getPointsFromResult(team._id)).reduce(add, 0);

export const compareTeams = (teamA: TeamWithResults, teamB: TeamWithResults) =>
  getPoints(teamB) - getPoints(teamA);

export const add = (a: number, b: number): number => a + b;

const getDifference = (team: string) => (result: ResultBasic): number => {
  const opponent =
    result.team_a.team === team ? result.team_b.team : result.team_a.team;
  return (
    getPointsFromResult(team)(result) - getPointsFromResult(opponent)(result)
  );
};

const getPointsFromResult = (team: string) => (result: ResultBasic): number =>
  result.team_a.team === team ? result.team_a.points : result.team_b.points;
