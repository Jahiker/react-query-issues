import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
