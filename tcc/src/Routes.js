import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Pages/Home"
import Register from "./Components/Register"
import Dashboard from "./Admin/Dashboard"
import ProtectedRoute from "./ProtectedRoute"

const Rotas = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Rotas;