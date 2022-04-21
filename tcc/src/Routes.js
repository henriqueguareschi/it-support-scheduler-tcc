import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Pages/Home"
import Register from "./Components/Register"
import Dashboard from "./Admin/Dashboard/"
import ProtectedRoute from "./ProtectedRoute"
import Layout from './Components/Layout'
import Calls from './Admin/Calls'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute><Layout><Register /></Layout></ProtectedRoute>} />
            <Route path="/calls" element={<ProtectedRoute><Layout><Calls /></Layout></ProtectedRoute>} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Rotas;