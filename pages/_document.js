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
        <meta content="Pure Yoga Ottawa" name="author" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    
   
		<link rel="shortcut icon" href="images/favicon.ico" />
		<link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="images/apple-touch-icon-144x144.png" />

	<script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/877987985/?random=1549744178340&amp;cv=9&amp;fst=1549744178340&amp;num=1&amp;label=T8OiCLGMwGgQkZHUogM&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1050&amp;u_w=1680&amp;u_ah=1027&amp;u_aw=1680&amp;u_cd=24&amp;u_his=3&amp;u_tz=-300&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2wg1r0&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.pureyogaottawa.com%2F&amp;ref=https%3A%2F%2Fwww.google.com%2F&amp;tiba=Pure%20Yoga%20Ottawa%20-%20Westboro%2C%20Downtown%20and%20Centretown%20%7C%20Pure%20Yoga%20Ottawa&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://use.typekit.net/wto6kkb.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}