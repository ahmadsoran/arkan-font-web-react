import { motion } from 'framer-motion'
import SocialCards from './SocialCards'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import LinkedIn from '@mui/icons-material/LinkedIn';
import arkanLogo from '../../assets/img/arkanLogo.jpg'
import GroupIcon from '@mui/icons-material/Group';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
function Social() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            dir="ltr"
            className="min-h-screen pt-10  grid place-items-center grid-cols-1 md:grid-cols-2 items-stretch ">
            <SocialCards
                name="Arkan Muhammed"
                job="Arkan Font Owner"
                desc="I started publishing my work on 16/9/2021 and since then I have continued this volunteer work. Currently, the number of Kurdish fonts reaches over 800 fonts "
                img={arkanLogo}
                social={
                    <>
                        <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">

                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://www.facebook.com/groups/281050853876283/?ref=share_gro" target={'_blank'} referrerPolicy='no-referrer'>
                                <FacebookOutlinedIcon fontSize='large' />
                            </a><a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://t.me/joinchat/xTBmTNV5yt4yYTky" target={'_blank'} referrerPolicy='no-referrer'>
                                <GroupIcon fontSize='large' />
                            </a>
                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://instagram.com/arkan_fonts" target={'_blank'} referrerPolicy='no-referrer'>
                                <InstagramIcon fontSize='large' />
                            </a>
                        </div>
                        <div className=" flex  w-40 mx-auto text-gray-500 items-center justify-evenly">

                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://t.me/Arkan_fonts" target={'_blank'} referrerPolicy='no-referrer'>
                                <TelegramIcon fontSize='large' />
                            </a>

                        </div>
                    </>
                }
            />
            <SocialCards
                name="Ahmad Soran"
                job="Full Stack Developer"
                desc=" I have a passion for building beautiful and functional websites, learning new technologies, and constantly learning new things. I am a self-taught developer and I am always looking to learn new things."
                img="https://res.cloudinary.com/ahmacloud/image/upload/v1649966976/ytdl-profile-image/ahmadsorann.jpg"
                social={
                    <>
                        <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">

                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://www.facebook.com/ahmadSoranNn" target={'_blank'} referrerPolicy='no-referrer'>
                                <FacebookOutlinedIcon fontSize='large' />
                            </a><a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://twitter.com/ahmadsorannn" target={'_blank'} referrerPolicy='no-referrer'>
                                <TwitterIcon fontSize='large' />
                            </a>
                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://github.com/ahmadsoran" target={'_blank'} referrerPolicy='no-referrer'>
                                <GitHubIcon fontSize='large' />
                            </a>
                        </div>
                        <div className=" flex  w-40 mx-auto text-gray-500 items-center justify-evenly">

                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://ahmadsoran.com" target={'_blank'} referrerPolicy='no-referrer'>
                                <WebIcon fontSize='large' />
                            </a>
                            <a rel='noreferrer' className='hover:text-indigo-400 p-2 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 duration-300' href="https://iq.linkedin.com/in/ahmad-soran-233935231" target={'_blank'} referrerPolicy='no-referrer'>
                                <LinkedIn fontSize='large' />
                            </a>
                        </div>
                    </>
                }
            />
        </motion.div>
    )
}

export default Social