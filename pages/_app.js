import '@styles/globals.css'
import Layout from "@components/Layout/Layout";
import Script from "next/script";

function Application({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default Application
