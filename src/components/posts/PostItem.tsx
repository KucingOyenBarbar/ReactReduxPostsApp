import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import PostItemBody from "./PostItemBody";

type PostItemProps = {
  title: string;
  content: string;
  date: string;
  userId: number;
};

export default function PostItem({
  title,
  content,
  date,
  userId,
}: PostItemProps) {
  const timestamp = new Date(date).toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
  });

  return (
    <Stack gap={2}>
      <Card body className="rounded mb-3">
        <PostItemBody
          title={title}
          content={content}
          timestamp={timestamp}
          userId={userId}
        />
      </Card>
    </Stack>
  );
}
