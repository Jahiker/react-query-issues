import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../issues/interfaces";
import { sleep } from "../helpers/sleep";

const getIssues = async (): Promise<Issue[]> => {
  await sleep(2)

  const { data } = await githubApi.get<Issue[]>("/issues");

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
