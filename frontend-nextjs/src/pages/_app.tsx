import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Quicksand } from 'next/font/google'

const queryClient = new QueryClient()

const quicksand = Quicksand({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>
        {`
          :root {
            --quicksand-font: ${quicksand.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
