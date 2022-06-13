import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import IconButton from '@mui/material/IconButton';
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { MyLinks } from '../util/MyLinks';
import NavMobileCollapse from './NavMobileCollapse';

export default function ButtonAppBar() {
    const [Darkmode, setDarkmode] = React.useState(false)
    const [OpenNavMenu, setOpenNavMenu] = React.useState(false)
    const toggleDarkmode = () => {
        localStorage.setItem('Darkmode', !Darkmode)
        setDarkmode(!Darkmode)
    }
    React.useEffect(() => {
        if (localStorage.getItem('Darkmode') === 'true') {
            setDarkmode(true)
            document.body.classList.add('dark')
            document.body.classList.add('dark:bg-slate-800')
        } else {
            setDarkmode(false)
            document.body.classList.remove('dark')
        }


    }, [Darkmode])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavMobileCollapse class={`${OpenNavMenu ? 'translate-y-0 ' : '-translate-y-full'}`} />




            <AppBar position="static">
                <Toolbar className='bg-slate-100 dark:bg-slate-900 justify-between flex '>
                    <div className="flex  items-center">
                        <div className="sm:hidden">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="darkmode"
                                className={`bg-slate-100 dark:bg-slate-900   ${OpenNavMenu ? 'fixed z-50' : ''} `}
                                sx={{ mr: 2 }}
                                onClick={() => setOpenNavMenu(!OpenNavMenu)}

                            >
                                {
                                    OpenNavMenu ?
                                        <MenuOpenIcon className='dark:text-slate-50' />
                                        :
                                        <MenuIcon className='dark:text-slate-50' />
                                }
                            </IconButton>
                        </div>
                        <img className='w-10 h-10 rounded-full mx-4 2xl:w-14 2xl:h-14' src={require("../../assets/img/arkanLogo.jpg")} alt="arkan fonts" />
                    </div>
                    <div className=' sm:flex hidden'>
                        <MyLinks to={'/'} children={'سەرەکی'} className='text-slate-900 mx-2 dark:text-slate-50 text-lg 2xl:text-4xl' />
                        <MyLinks to={'/about'} children={'دەربارە'} className='text-slate-900 mx-2 dark:text-slate-50 text-lg 2xl:text-4xl' />
                        <MyLinks to={'/social'} children={'سۆشیاڵ'} className='text-slate-900 mx-2 dark:text-slate-50 text-lg 2xl:text-4xl' />
                    </div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="darkmode"
                        className='bg-slate-100 dark:bg-slate-900  2xl:scale-150'
                        sx={{ mr: 2 }}
                        onClick={toggleDarkmode}
                    >
                        {
                            Darkmode ?

                                <WbSunnyTwoToneIcon className='text-slate-50' />
                                :
                                <Brightness4TwoToneIcon />
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
