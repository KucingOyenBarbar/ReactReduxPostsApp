import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import Card from "react-bootstrap/Card";

type PostItemBodyProps = {
  title: string;
  content: string;
  timestamp: string;
  userId: number;
};

export default function PostItemBody({
  title,
  content,
  timestamp,
  userId,
}: PostItemBodyProps) {
  const users = useSelector((state: AppState) => state.users);
  const postUser = users.find((user) => user.id == userId);

  const PostItemBodyTitle = () => (
    <div className="position-relative px-0 mx-0">
      <a
        href="/"
        aria-label="Baca Selengkapnya"
        className="link-offset-2 link-underline link-underline-opacity-0 text-start text-white text-capitalize fst-normal fs-4 lh-1 "
      >
        {title.length > 40 ? `${title.substring(0, 40)}...` : title}
      </a>
      <Card.Subtitle className="pt-2">
        <span className="text-start text-white-50 fst-normal fs-6 me-2">
          {" "}
          {timestamp}
        </span>
        <span className="text-start text-white-50 fst-italic fs-6">
          Di posting oleh {postUser?.name}
        </span>
      </Card.Subtitle>
    </div>
  );

  const PostItemBodyContent = () => (
    <div className="position-relative px-0 mx-0 py-3">
      <Card.Text className="text-start fst-normal fs-6 text-white-50">
        {content.length > 150 ? `${content.substring(0, 150)}...` : content}
      </Card.Text>
    </div>
  );

  const PostMoreDetails = () => (
    <div className="position-relative px-0 mx-0 ">
      <a
        href="/"
        aria-label="Baca Selengkapnya"
        className="link-secondary link-offset-2 link-underline link-underline-opacity-0 fs-6 icon-link icon-link-hover stretched-link"
      >
        Baca Selengkapnya{" "}
        <FontAwesomeIcon className="align-middles" icon={faArrowRight} />
      </a>
    </div>
  );

  return (
    <>
      <PostItemBodyTitle />
      <PostItemBodyContent />
      <PostMoreDetails />
    </>
  );
}
