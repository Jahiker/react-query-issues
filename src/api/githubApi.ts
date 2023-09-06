import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
