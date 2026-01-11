'use client'

import { persistor, store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/es/integration/react'
import Loading from './Loading'
import { PersistGate } from 'redux-persist/integration/react'
// import { PersistGate } from 'redux-persist/es/integration/react'

const GlobalProvider = ({children}) => {
  return (
   <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading/>}>
    {children}
    </PersistGate>
   </Provider>
  )
}

export default GlobalProvider
