import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../issues/interfaces";

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>("/issues");

  console.log("getIssues", data);

  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};
