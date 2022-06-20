import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/about/About'
import Home from '../components/home/Home'
import { AnimatePresence } from "framer-motion"
import NOTFOUND404 from '../components/NOTFOUND404'
import Social from '../components/social/Social'

function Router() {
    const locations = useLocation()
    return (
        <AnimatePresence exitBeforeEnter >
            <Routes location={locations} key={locations.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/social" element={<Social />} />
                <Route path="*" element={<NOTFOUND404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Router