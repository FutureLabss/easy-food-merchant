import '@/styles/globals.css'
import {Component } from 'react'
import type { AppProps } from 'next/app'
import Context from './api/context/auth'
import '../pages/api/services/config'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Context>
    <Component {...pageProps} />
  </Context>
  )
}
