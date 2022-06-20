import { Box } from '@mui/material'
import img from '../../assets/img/arkanLogo.jpg'
import { motion } from 'framer-motion'
function About() {
    return (
        <motion.div

            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='bg-slate-50 dark:bg-slate-800 min-h-screen grid grid-cols-1 sm:grid-cols-2 place-items-center p-10'>
            <div className="p-4">
                <img
                    alt="arkan font | ئەرکان فۆنت"
                    src={img}
                    className='w-full shadow-lg shadow-slate-900 rounded-md'
                />
            </div>
            <Box display='flex' justifyContent='flex-start' flexDirection='column'>
                <h1 className='text-slate-900 dark:text-gray-100 text-md sm:text-lg md:text-1xl lg:text-2xl xl:text:3xl'>
                    فۆنتەکانی ئەرکان
                </h1>
                <p className='text-slate-900 dark:text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text:xl'>
                    من ناوم (ئەرکان موحەممەد عەزیز) ـە، لەدایکبووی ١٩٩٤ م، دانیشتووی قەزای (کفری)م، دەرچووی بەشی ماتماتیکم لە زانکۆی گەرمیان، لە ئێستادا پیشەی مامۆستایی دەکەم بەشێوەی وانەبێژی. لە پاڵ ئەوەشدا حەز و خولیایەکی زۆرم هەیە بۆ تەکنەلۆژیا، بەتایبەت کاری دروستکردنی فۆنت. بۆ یەکەمجار لە بەرواری ١٦/٩/٢٠٢١ دەستم کرد بە بڵاوکردنەوەی کارەکانم و لەو کاتەوە تا ئێستا لەم کارە خۆبەخشییەم بەردەوامبوومە و لە ئێستادا ژمارەی فۆنتە بەکوردیکراوەکانم دەگاتە سەرووی 800 فۆنت و بەخۆشحاڵییەوە پێشوازیی باشیان لێ کراوە.

                    من لەو فۆنتانەدا تەنها پیتە کوردییەکانم زیادنـەکردووە، بەڵکو گرنگیی زۆرم بە کێرنینگ و لیگەیچە و جوانکاری و حاڵەتە تایبەتییەکانی جێگۆڕکێ داوە، بێگومان ئەو کارانەیش کات و لێزانینی زۆریان ویستووە و بە ئاسانی نەکراون.
                </p>

            </Box>

        </motion.div>
    )
}

export default About