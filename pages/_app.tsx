import '../styles/globals.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

// import SEO from '../next-seo.config'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <DefaultSeo {...SEO} /> */}
      <Component {...pageProps}></Component>
    </>
  )
}
