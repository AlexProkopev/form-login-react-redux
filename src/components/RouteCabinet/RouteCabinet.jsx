import CabinetUser from 'components/pages/CabinetUser'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import css from "./RouteCabinet.module.css"

const RouteCabinet = () => {
  return (
    <div>
    <Link to="cabinet" className={css.logOut}>
      Go to Cabinet
    </Link>
    <Routes>
      <Route path="cabinet" element={<CabinetUser />} />
    </Routes>
  </div>
  )
}

export default RouteCabinet