import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../issues/interfaces";
import { sleep } from "../helpers/sleep";

const getIssue = async (issueNumber: number): Promise<Issue> => {
  await sleep(2)

  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);

  // console.log("🚀 ~ file: useIssue.tsx:8 ~ getIssue ~ data:", data);

  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ["issue", issueNumber],
    () => getIssue(issueNumber),
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    issueQuery,
  };
};
