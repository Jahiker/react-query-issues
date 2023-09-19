import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
