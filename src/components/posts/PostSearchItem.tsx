/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Form } from "react-bootstrap";
import React from "react";

type PostSearchItemProps = {
  title: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function PostSearchItem({
  title,
  search,
  setSearch,
}: PostSearchItemProps) {
  return (
    <Row className="justify-content-start g-2 pt-3">
      <Col>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
          data-bs-theme="dark"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label hidden>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder={title}
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
