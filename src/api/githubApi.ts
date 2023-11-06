import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
