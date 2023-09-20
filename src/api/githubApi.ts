import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
