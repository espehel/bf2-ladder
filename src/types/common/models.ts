import { SanityDocument } from '@sanity/client';

export interface Team {
  name: string;
}

export enum MatchStatus {
  Open = 'open',
  Complete = 'complete',
}

export interface Match {
  team_a: Team;
  team_b: Team;
  match_time: string;
  status: MatchStatus;
  maps: MatchMap[];
}

export interface Score {
  team: Team;
  round_1: number;
  round_2: number;
}

export interface ScoreBasic {
  team: string;
  tickets: number;
}

export interface Map {
  image: string;
  name: string;
}

export interface MatchMap {
  score_a: Score;
  score_b: Score;
  map: Map;
}

export interface MapBasic {}

export interface MatchMapBasic {
  name: string;
  score_a: ScoreBasic;
  score_b: ScoreBasic;
}

export interface MatchBasic {
  maps: MatchMapBasic[];
}

export interface TeamWithMatches extends SanityDocument<Team> {
  matches: MatchBasic[];
}
