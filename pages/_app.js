import "../styles/globals.css";
import "../styles/effects.css";
import "../styles/main.css";
import Main from "../components/Main";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />;
    </Main>
  );
}

export default MyApp;
