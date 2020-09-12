import { MatchMap, Team } from '../../types/common/models';

export const getTotalTickets = (team: 'a' | 'b', maps: MatchMap[]) =>
  maps.reduce(
    (acc, map) =>
      acc + (team === 'a' ? getTeamMapTicketsA(map) : getTeamMapTicketsB(map)),
    0
  );

const getTeamMapTicketsA = (map: MatchMap) =>
  map.score_a.round_1 + map.score_a.round_2;
const getTeamMapTicketsB = (map: MatchMap) =>
  map.score_b.round_1 + map.score_b.round_2;

const padZero = (val: number): string => (val > 9 ? val.toString() : `0${val}`);

export const getStartTime = (utcString: string) => {
  const date = new Date(utcString);
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
};
