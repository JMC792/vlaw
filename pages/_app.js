import '@styles/globals.css'
import Layout from "@components/Layout/Layout";
import Script from "next/script";

function Application({ Component, pageProps }) {
  return(
      <Layout>
          <Script src="https://kit.fontawesome.com/445848c381.js" crossOrigin="anonymous"/>
        <Component {...pageProps} />
      </Layout>
  )
}

export default Application
