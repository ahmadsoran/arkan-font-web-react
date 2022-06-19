import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ToolBar from './home-components/ToolBar'
import Main from './home-components/Main'
import { useSendVisitsQuery } from '../../app/appApi'
import CopyRight from '../CopyRight'
function Home() {
    const contry = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { data } = useSendVisitsQuery(contry)


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-slate-50 dark:bg-slate-800" >
                <ToolBar />
                <Main />
                <CopyRight />
            </div>

        </motion.div>

    )
}

export default Home