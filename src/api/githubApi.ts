import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
