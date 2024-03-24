'use client'

import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/navbar'
import { SessionProvider } from 'next-auth/react'
import Provider from '@/components/provider'
import { useState, useReducer, useEffect, createContext } from 'react'
import Alerts from '@/components/alerts/alerts'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { Providers } from './providers'


const Layout = ({children}) => {


  return (
    <html lang='en'>
        <body>
          <ReduxProvider store={store}>
            <Providers>
              <Provider>
                  <Navbar />
                    {children}
                  <Footer />
              </Provider>
            </Providers>
          </ReduxProvider>
        </body>
    </html>
  )
}

export default Layout