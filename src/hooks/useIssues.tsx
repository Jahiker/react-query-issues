import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue, State } from "../issues/interfaces";
import { sleep } from "../helpers/sleep";
import { Label } from "../issues/interfaces/label";

interface Props {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  console.log({ labels, state });

  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  const { data } = await githubApi.get<Issue[]>("/issues", { params });

  return data;
};

export const useIssues = ({ state, labels }: Props) => {
  const issuesQuery = useQuery(
    ["issues", { state, labels }],
    () => getIssues(labels, state),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    }
  );

  return {
    issuesQuery,
  };
};
