import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { Issue, State } from "../interfaces";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  issue: Issue;
}

export const IssueItem: FC<Props> = ({ issue }) => {
  const navigate = useNavigate();

  if (!issue) return null;

  return (
    <div className="card mb-2 issue" onClick={() => navigate(`/issues/issue/${issue.number}`)}>
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={25} style={{ minWidth: "25px" }} color="red" />
        ) : (
          <FiCheckCircle size={25} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>Suggestion: {issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by{" "}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt={issue.user.login}
            className="avatar"
          />
          <span className="px-2">2</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
