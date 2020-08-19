export interface DocumentSimple {
  _id: string;
}

export interface Team extends DocumentSimple {
  name: string;
}

export interface Score {
  team: Team;
  points: number;
}

export interface ScoreBasic {
  team: string;
  tickets: number;
}

export interface MatchMap {
  name: string;
  score_a: ScoreBasic;
  score_b: ScoreBasic;
}

export interface MatchBasic {
  maps: MatchMap[];
}

export interface TeamWithMatches extends Team {
  matches: MatchBasic[];
}
