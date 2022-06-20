import React from 'react'
function NavMobileCollapse(props) {
    return (
        <div className={`w-full flex flex-col sm:hidden transition-all duration-1000 justify-evenly items-center bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm h-screen top-0 left-0 z-50 bg-slate-100 dark:bg-slate-900 fixed ${props.class}`}>
            {props.children}
        </div>
    )
}

export default NavMobileCollapse