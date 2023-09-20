import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
