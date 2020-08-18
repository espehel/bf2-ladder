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
  points: number;
}

export interface Result extends DocumentSimple {
  team_a: Score;
  team_b: Score;
}

export interface ResultBasic {
  team_a: ScoreBasic;
  team_b: ScoreBasic;
}

export interface TeamWithResults extends Team {
  results: ResultBasic[];
}
