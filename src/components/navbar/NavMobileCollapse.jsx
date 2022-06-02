import React from 'react'
import { MyLinks } from '../util/MyLinks'
function NavMobileCollapse(props) {
    return (
        <div className={`w-full flex flex-col sm:hidden transition-all duration-1000 justify-evenly items-center bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm h-screen top-0 left-0 z-50 bg-slate-100 dark:bg-slate-900 fixed ${props.class}`}>

            <MyLinks to={'/'} children={'سەرەکی'} className='text-slate-900 mx-2 dark:text-slate-50' />
            <MyLinks to={'/about'} children={'دەربارە'} className='text-slate-900 mx-2 dark:text-slate-50' />
            <MyLinks to={'/social'} children={'سۆشیاڵ'} className='text-slate-900 mx-2 dark:text-slate-50' />
        </div>
    )
}

export default NavMobileCollapse