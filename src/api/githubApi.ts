import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
