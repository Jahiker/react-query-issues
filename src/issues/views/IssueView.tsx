import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../../hooks";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id = "0" } = params;

  const { issueQuery, commentsQuery } = useIssue(+id);

  useEffect(() => {
    if (issueQuery.isFetched && !issueQuery.data) navigate("./issues/list");
  }, [issueQuery]);

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {issueQuery.isLoading && <LoadingIcon />}
      {issueQuery.data && <IssueComment issue={issueQuery.data} />}

      {/* Comentario de otros */}
      {commentsQuery.isLoading && <LoadingIcon />}
      {commentsQuery.data?.map((issue) => (
        <IssueComment key={issue.id} issue={issue} />
      ))}
    </div>
  );
};
