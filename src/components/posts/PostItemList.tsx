import { Posts } from "../../types";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import PostItem from "./PostItem";
import PostHeadingTitle from "./PostHeadingTitle";
import PostSearchItem from "./PostSearchItem";

type PostItemListProps = { posts: Posts[] };

export default function PostItemList({ posts }: PostItemListProps) {
  const [searchValues, setSearchValues] = useState<string>("");

  const renderedPost: JSX.Element | JSX.Element[] = posts?.length ? (
    !searchValues.length ? (
      posts.map((post, index) => <PostItem key={index} {...post} />)
    ) : (
      posts
        .filter((filteredItem) =>
          filteredItem.title.toLowerCase().includes(searchValues.toLowerCase())
        )
        .map((post, index) => <PostItem key={index} {...post} />)
    )
  ) : (
    <div className="d-flex justify-content-center g-2">
      <p className="text-white-50 fst-normal">Belum Ada Postingan.</p>
    </div>
  );

  return (
    <Row className="justify-content-center align-content-center py-5">
      <Col lg={7} md={10}>
        <PostHeadingTitle title={`${posts.length} postingan`} />
        <PostSearchItem
          title="Cari Postingan..."
          search={searchValues}
          setSearch={setSearchValues}
        />
        {renderedPost}
      </Col>
    </Row>
  );
}
