/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row, Col, Card, Form, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "../../utils/alertMessage";
import { AppState } from "../../types";

type Args = { title: string; content: string; userId: number | string };

type PostInputFormProps = {
  AddPosts: ({ title, content, userId }: Args) => void;
  setShowInputForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PostInputForm({
  AddPosts,
  setShowInputForm,
}: PostInputFormProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string | number>("");
  const [limitKarakter, setLimiterKarakter] = useState<number>(100);

  const users = useSelector((state: AppState) => state.users);

  const onTitleChangeEventHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChangeEventHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onPostUserChangeEventHandler: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  const disabledButton: boolean =
    Boolean(title.length) && Boolean(userId) && Boolean(content.length);

  const onResetAllValues = () => {
    setTitle("");
    setContent("");
    setUserId("");
  };

  const onSubmitValuesHandler: (e: React.FormEvent<HTMLFormElement>) => void = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    AddPosts({ title, content, userId });
    // Clear fields form
    setTitle("");
    setContent("");

    Toast.fire({
      icon: "success",
      title: "Berhasil Menambahkan Postingan Baru",
    });
  };

  return (
    <Row className="justify-content-center align-content-center py-5">
      <Col lg={7} md={10}>
        <Card body className="rounded mb-3">
          <Card.Title className="text-start text-capitalize fst-normal fs-4">
            Tambah Postingan Baru
          </Card.Title>
          <hr className="text-secondary"></hr>
          <Form onSubmit={onSubmitValuesHandler} onReset={onResetAllValues}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Judul Postingan{" "}
                <span className="text-danger">
                  ( Sisa Karakter {limitKarakter - title.length} )
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Tuliskan judul postingan"
                value={title}
                onChange={onTitleChangeEventHandler}
                maxLength={title.length <= limitKarakter ? limitKarakter : 0}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Penulis </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={onPostUserChangeEventHandler}
              >
                <option value="" hidden>
                  Pilih Penulis
                </option>
                {users?.map((user, index) => (
                  <option key={index} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Tuliskan isi postingan..."
                value={content}
                onChange={onContentChangeEventHandler}
              />
            </Form.Group>

            <Stack gap={3} direction="vertical" className="mb-3">
              <Button
                disabled={!disabledButton}
                variant="primary"
                type="submit"
                className="d-block w-100 text-center fst-normal fs-6"
              >
                Posting
              </Button>
              <Button
                onClick={() =>
                  setTimeout(() => {
                    setShowInputForm(false);
                  }, 300)
                }
                variant="danger"
                type="button"
                className="d-block w-100 text-center fst-normal fs-6"
              >
                Batalkan
              </Button>
            </Stack>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
