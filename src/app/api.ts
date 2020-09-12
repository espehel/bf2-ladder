import { SanityDocument } from '@sanity/client';

import { Match, Team, TeamWithMatches } from '../types/common/models';

export const getTeams = async (): Promise<Team[]> => {
  const response = await fetch('/api/sanity/teams');
  return response.json();
};

export const getMatches = async (): Promise<SanityDocument<Match>[]> => {
  const response = await fetch('/api/sanity/matches');
  return response.json();
};

export const getMatchesByTeams = async (): Promise<TeamWithMatches[]> => {
  const response = await fetch('/api/sanity/matchesByTeams');
  return response.json();
};
