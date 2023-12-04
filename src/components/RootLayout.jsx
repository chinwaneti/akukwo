import React from 'react'
// import Home from './Home'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/Store'
// import Header from './Header'

export default function RootLayout() {
  return (
    <>
    <Provider store={store}>
          {/* <Header />  */}
        <main>
            <Outlet />
        </main>
        </Provider>
    </>
  )
}
