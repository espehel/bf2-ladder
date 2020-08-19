import {
  MatchBasic,
  MatchMap,
  TeamWithMatches,
} from '../../types/common/models';

export const getWins = (team: TeamWithMatches): number =>
  team.matches
    .map(getDifferenceFromMatch(team._id))
    .map((diff) => (diff > 0 ? 1 : 0))
    .reduce(add, 0);

export const getLosses = (team: TeamWithMatches): number =>
  team.matches
    .map(getDifferenceFromMatch(team._id))
    .map((diff) => (diff < 0 ? 1 : 0))
    .reduce(add, 0);

export const getDraws = (team: TeamWithMatches): number =>
  team.matches
    .map(getDifferenceFromMatch(team._id))
    .map((diff) => (diff === 0 ? 1 : 0))
    .reduce(add, 0);

export const getTickets = (team: TeamWithMatches): number =>
  team.matches
    .flatMap(extractMaps)
    .map(getTicketsFromMap(team._id))
    .reduce(add, 0);

export const getPoints = (team: TeamWithMatches): number =>
  team.matches.map(getPointsFromMatch(team._id)).reduce(add, 0);

export const compareTeams = (teamA: TeamWithMatches, teamB: TeamWithMatches) =>
  getTickets(teamB) - getTickets(teamA);

const getDifferenceFromMatch = (team: string) => (match: MatchBasic): number =>
  match.maps.map(getDifferenceFromMap(team)).reduce(add, 0);

const getDifferenceFromMap = (team: string) => (map: MatchMap): number => {
  const opponent =
    map.score_a.team === team ? map.score_b.team : map.score_a.team;
  return getTicketsFromMap(team)(map) - getTicketsFromMap(opponent)(map);
};

const getTicketsFromMap = (team: string) => (map: MatchMap): number =>
  map.score_a.team === team ? map.score_a.tickets : map.score_b.tickets;

const getPointsFromMatch = (team: string) => (match: MatchBasic): number => {
  const mapsWon = match.maps
    .map(getDifferenceFromMap(team))
    .map((diff) => (diff > 0 ? 1 : 0))
    .reduce(add, 0);

  return mapsWon + (getDifferenceFromMatch(team)(match) > 0 ? 1 : 0);
};

export const add = (a: number, b: number): number => a + b;
export const extractMaps = (match: MatchBasic): MatchMap[] => match.maps;
