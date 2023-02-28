import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import Layout from "../components/layout/Layout";
import { AppDataContextProvider } from "../context/app-data";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";


config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <AppDataContextProvider>
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
      </AppDataContextProvider>
      
  );
}

export default appWithTranslation(MyApp)
