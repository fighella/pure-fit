import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/custom.scss';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Head>
        <title>{pageProps ? pageProps.title : 'Pure Fit Ottawa - Centretown'}</title>
      </Head>
      <Component {...pageProps} />
    </Container>
  }
}