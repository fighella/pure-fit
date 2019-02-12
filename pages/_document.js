import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
<script dangerouslySetInnerHTML={{
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJWD2S');`}}></script>
          <meta content="Pure Yoga Ottawa" name="author" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta property="og:site_name" content="Pure Yoga Ottawa" />
          <meta property="fb:admins" content="873990164" />
          <meta property="fb:app_id" content="312000085528745" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"></link>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" href="static/apple-touch-icon.png" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
          <link rel="stylesheet" href="https://use.typekit.net/wto6kkb.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
          </script>
          
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

        </Head>
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJWD2S"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}