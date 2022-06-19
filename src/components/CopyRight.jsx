import React from 'react'

function CopyRight() {
    return (
        <>
            <div className='p-2 dark:bg-slate-900 bg-slate-100' style={{ direction: 'ltr' }}>
                <p className='text-center text-slate-900 dark:text-gray-500 text-xs sm:text-sm md:text-md text-opacity-70 lg:text-lg xl:text-xl 2xl:text-2xl'>
                    &copy; {new Date(Date.now()).getFullYear()} Arkan Fonts - All rights reserved.
                </p>
            </div>
            <div className='p-1 dark:bg-slate-900 bg-slate-100 w-full flex justify-center items-center' style={{ direction: 'ltr' }}>
                <p className='text-center  text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl  font-extrabold text-gardient'>
                    Powerd By <a href='https://ahmadsoran.com' target='_blank' rel='noopener noreferrer'>Ahmed Soran</a>
                </p>            </div>
        </>
    )
}

export default CopyRight