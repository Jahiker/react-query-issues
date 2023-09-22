import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
