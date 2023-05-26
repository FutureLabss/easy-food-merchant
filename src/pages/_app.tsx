import '@/styles/globals.css'
import {Component } from 'react'
import type { AppProps } from 'next/app'
import Context from '../context/auth'
import '../pages/api/services/config'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import MerchantContext from '@/context/merchant'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Context>
    <QueryClientProvider client={queryClient}>
      <MerchantContext>
    <Component {...pageProps} />
    </MerchantContext>
    </QueryClientProvider>
  </Context>
  )
}
