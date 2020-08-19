import { Team, TeamWithMatches } from '../types/common/models';

export const getTeams = async (): Promise<Team[]> => {
  const response = await fetch('/api/sanity/teams');
  return response.json();
};

export const getResultsByTeams = async (): Promise<TeamWithMatches[]> => {
  const response = await fetch('/api/sanity/matchesByTeams');
  return response.json();
};
