import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/about/About'
import Home from '../components/home/Home'
import { AnimatePresence } from "framer-motion"

function Router() {
    const locations = useLocation()
    return (
        <AnimatePresence exitBeforeEnter >
            <Routes location={locations} key={locations.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Router