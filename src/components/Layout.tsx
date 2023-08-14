import { Container } from "react-bootstrap";
import HeaderNav from "./HeaderNav";

type LayoutTypeProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutTypeProps) {
  return (
    <>
      <HeaderNav />
      <main className="position-relative px-0 mx-0">
        {/* Rendered Component */}
        <Container>{children}</Container>
      </main>
    </>
  );
}
