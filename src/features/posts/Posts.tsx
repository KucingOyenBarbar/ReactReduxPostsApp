/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Row, Col } from "react-bootstrap";
import { AppState } from "../../types";
import { postAdd } from "./postSlice";
import PostItemList from "../../components/posts/PostItemList";
import PostInputForm from "../../components/posts/PostInputForm";
import PostButton from "../../components/posts/PostButton";

type Args = { title: string; content: string; userId: number | string };

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: AppState) => state.posts);
  const [showInputForm, setShowInputForm] = React.useState<boolean>(false);

  const onAddPostsHandler: ({ title, content, userId }: Args) => void = ({
    title,
    content,
    userId,
  }: Args) => {
    dispatch(
      postAdd({
        id: nanoid(),
        userId,
        title,
        content,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
        date: new Date().toISOString(),
      })
    );
  };

  return (
    <>
      <Row className="justify-content-start align-content-start py-5">
        <Col>
          {showInputForm ? (
            <PostInputForm
              AddPosts={onAddPostsHandler}
              setShowInputForm={setShowInputForm}
            />
          ) : (
            <PostButton
              showInputForm={showInputForm}
              setShowInputForm={setShowInputForm}
            />
          )}

          <PostItemList posts={posts} />
        </Col>
      </Row>
    </>
  );
};

export default Posts;
