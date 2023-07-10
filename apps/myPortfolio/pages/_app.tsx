import CookieLayout from '@/Components/Layouts/CookieLayout'
import MainLayout from '@/Components/Layouts/MainLayout'

import '@/styles/globals.scss'

import type { AppProps } from 'next/app'

import { AlertProvider } from '@/Components/Layouts/context/AlertContext';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AlertProvider>
      <MainLayout>
        <CookieLayout>
          
          <Component {...pageProps} />
        </CookieLayout>
      </MainLayout>
    </AlertProvider>
  )
}
