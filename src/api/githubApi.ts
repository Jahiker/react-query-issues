import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
