import { Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function FontCards(props) {
    const PXfromReducer = useSelector((state) => state.FontSizeSlice.fontSize);

    return (
        <Paper
            elevation={6}
            className="bg-slate-300 dark:bg-slate-500 w-full py-2 px-4 "
            children={
                <>
                    <div className="flex justify-between  items-center ">
                        <h1 className='text-slate-900 dark:text-slate-50 text-lg 2xl:text-4xl'>{props.fontname}</h1>
                        <p className=' text-slate-900 dark:text-slate-50 text-xs opacity-60 xl:text-md 2xl:text-2xl '>{props.stylecount}</p>
                    </div>
                    <h1 style={{ fontSize: PXfromReducer }} className='text-center pt-5 break-words  ' >{props.text}</h1>
                </>
            }
            {...props}
        />
    )
}


export default FontCards