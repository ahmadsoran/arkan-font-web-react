import React from 'react'
import { motion } from 'framer-motion'
import ToolBar from './home-components/ToolBar'
import Main from './home-components/Main'
function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-slate-50 dark:bg-slate-800 min-h-screen" >
                <ToolBar />
                <Main />
            </div>

        </motion.div>

    )
}

export default Home