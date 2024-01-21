'use client'

import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/navbar'
import { SessionProvider } from 'next-auth/react'
import Provider from '@/components/provider'
import { useState, useReducer, useEffect, createContext } from 'react'
import Alerts from '@/components/alerts/alerts'


const DisplatchContext = createContext()

const Layout = ({children}) => {
  const alertInit = []
  const alertReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, {
          message: action.message,
          description: action.description,
          type: action.typeof
        }]
      case 'REMOVE':
        console.log(state)
        if (state?.length == 0 || state == undefined)  return [];
        return state.slice(0, -1)
      case 'CLEAR_ALL':
        return alertInit
      default:
        break;
    }
  }
  const [alerts, dispatchAlerts] = useReducer(alertReducer, alertInit)
  

  useEffect(() => {
    const timer = setInterval(() => {
      dispatchAlerts({type: 'REMOVE'})
      console.log('removing')
    }, 5000);
    return () => clearInterval(timer)
  }, [alerts])
  return (
    <html lang='en'>
        <body>
          <Provider>
            <DisplatchContext.Provider value={[alerts, dispatchAlerts]}>
              <Alerts displayAlerts={alerts}/>
              <Navbar />
                {children}
              <Footer />
            </DisplatchContext.Provider>
          </Provider>
        </body>
    </html>
  )
}

export { DisplatchContext }
export default Layout