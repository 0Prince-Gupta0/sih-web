import React from 'react'
import MainHeader from '../Components/MainHeader'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
    <MainHeader />
    <main>
        <Outlet></Outlet>
    </main>
    </>
  )
}

export default Root