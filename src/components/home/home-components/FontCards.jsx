import { Paper } from '@mui/material'
import React from 'react'

function FontCards(props) {

    return (
        <Paper
            elevation={6}
            className="bg-slate-300 dark:bg-slate-500 w-full py-2 px-4"
            sx={{
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'opacity .3s ease-in-out',
                ":hover": {
                    opacity: .7,
                }
            }}
            onClick={props.onClick}
            children={
                <>
                    <div className="flex justify-between  items-center ">
                        <h1 className='text-slate-900 dark:text-slate-50 text-lg opacity-60 2xl:text-4xl' style={props.fontnamestyle}>{props.fontname}</h1>
                        <p className=' text-slate-900 dark:text-slate-50 text-xs opacity-60 xl:text-md 2xl:text-2xl '>شێواز {props.stylecount}</p>
                    </div>
                    <h1 className='text-center pt-5 break-words text-slate-900 dark:text-slate-50' style={props.textstyles} >{props.text}</h1>
                </>
            }
            {...props}
        />
    )
}


export default FontCards