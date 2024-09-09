import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DashboardPage, LoginPage, UserPage } from '../Pages'
import App from '../App'

export function RoutesApp() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage></LoginPage>}></Route>
            <Route path="/app" element={<App></App>}></Route>
            <Route path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
            <Route path="/user" element={<UserPage></UserPage>}></Route>
        </Routes>
    </Router>
  )
}
