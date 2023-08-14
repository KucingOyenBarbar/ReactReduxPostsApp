import ThemeProvider from "react-bootstrap/ThemeProvider";
import Posts from "./features/posts/Posts";
import Layout from "./components/Layout";
import SayHello from "./components/SayHello";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        <SayHello message="Halo, Selamat Datang Di Aplikasi Posts" />
        <Posts />
      </Layout>
    </ThemeProvider>
  );
}
