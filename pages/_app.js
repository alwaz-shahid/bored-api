import "../styles/globals.css";
import "../styles/effects.css";
import "../styles/main.css";
function MyApp({ Component, pageProps }) {
  return (
    <section className="container">
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
