import { Result, Team, TeamWithResults } from '../types/common/models';

export const getTeams = async (): Promise<Team[]> => {
  const response = await fetch('/api/sanity/teams');
  return response.json();
};
export const getResults = async (): Promise<Result[]> => {
  const response = await fetch('/api/sanity/results');
  return response.json();
};
export const getResultsByTeams = async (): Promise<TeamWithResults[]> => {
  const response = await fetch('/api/sanity/resultsByTeams');
  return response.json();
};
