import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Label } from "../issues/interfaces/label";
import { sleep } from "../helpers/sleep";

export const useLabels = () => {
  const getLabels = async (): Promise<Label[]> => {
    // await sleep(2);

    const { data } = await githubApi.get<Label[]>("/labels?per_page=100");

    return data;
  };

   /**
    * initialData => sustituye a la data del fetching mientras se cumple el staleTime 
    * placeholderData => solo se muentra mientras se realiza el fetching
    */
  const labelsQuery = useQuery(["labels"], getLabels, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    // initialData: [
    //   {
    //     id: 725156255,
    //     node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
    //     name: "good first issue (taken)",
    //     color: "b60205",
    //     default: false,
    //     description: "",
    //   },
    //   {
    //     id: 717031390,
    //     node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
    //     url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
    //     name: "good first issue",
    //     color: "6ce26a",
    //     default: true,
    //     description: "",
    //   },
    // ],
    placeholderData: [
      {
        id: 725156255,
        node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
        name: "good first issue (taken)",
        color: "b60205",
        default: false,
        description: "",
      },
      {
        id: 717031390,
        node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
        name: "good first issue",
        color: "6ce26a",
        default: true,
        description: "",
      },
    ],
  });

  return { labelsQuery };
};
