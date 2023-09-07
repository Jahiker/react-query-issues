import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
