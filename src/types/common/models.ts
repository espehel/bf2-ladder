export interface SimpleDocument {
  _id: string;
}

export interface Team extends SimpleDocument {
  name: string;
}

export interface Score {
  team: Team;
  points: number;
}

export interface Result extends SimpleDocument {
  team_a: Score;
  team_b: Score;
}
