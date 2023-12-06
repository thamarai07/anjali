import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Catamaran } from  "@next/font/google"

const catamoran = Catamaran({
  subsets : ['tamil'],
  weight : ["100","200","300","400","500","600","700","800","900"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <main className={catamoran.className}>
    <Component {...pageProps} />
    </main>
    </>
    )
}
