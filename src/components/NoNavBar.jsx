import React from 'react'
import { Outlet } from 'react-router-dom'

export const NoNavBar = () => {
  return (
    <Outlet/>
  )
}

// export default () => <Outlet/>