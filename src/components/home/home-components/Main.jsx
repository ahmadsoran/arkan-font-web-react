import React, { Suspense, useEffect, useState } from 'react'
import FontCards from './FontCards'
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Skeleton } from '@mui/material';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDownloadFontMutation, useGetFontsDataQuery } from '../../../app/appApi';
import { useSearchParams } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MyModal from '../../util/Modal';
import { SetOpenFontModal } from '../../../features/OpenFontModalSlice';
async function loadFonts(fontname, fontUrl) {
    const font = new FontFace(fontname, `url(${fontUrl})`);
    // wait for font to be loaded
    await font.load();
    // add font to document
    document.fonts.add(font);
    // add weght to font

}
const catagory = [
    'فۆنتی کەناڵ و کۆمپانیاکان',
    'فۆنتی منداڵانە',
    'فۆنتی سادە',
    'فۆنتی دەستنووس',
    'فۆنتی ڕوقعە',
    'فۆنتی ثولث',
    'فۆنتی دیوانی',
    'فۆنتی نەسخ',
    'فۆنتی کوفی',
    'فۆنتی ئازاد',
    'فۆنتی نەستەعلیق',
    'فۆنتی ناونیشان',
    'فۆنتی زەخرەفە و ڕازاوە',
    'فۆنتەکانی حەسەن',
    'فۆنتەکانی GE',
    'فۆنتەکانی دیما',
]
function Main() {
    const TextTestFromReducer = useSelector((state) => state.TextTestSlice.text);
    const PXfromReducer = useSelector((state) => state.FontSizeSlice.fontSize);
    const SearchByName = useSelector((state) => state.SearchByNameSlice.name);
    const dispatch = useDispatch();
    const [Load, setLoad] = useState(25)
    const [searchParams, setSearchParams] = useSearchParams({
        sort: '',
        catagory: '',
    });
    const sort = searchParams.get("sort");
    const category = searchParams.get("category");
    const { data: Data, isFetching: FontFetch } = useGetFontsDataQuery({

        sort: sort,
        category: category,


    });
    const OpenModal = useSelector((state) => state.OpenFontsModal.isOpen)
    const [SetFontsData, setSetFontsData] = useState()
    const [sendFontId, { data, isLoading }] = useDownloadFontMutation();
    const sortByHandler = (e) => {
        /// set sort by
        setSearchParams({
            sort: e.target.value,
            category: category
        })
    }
    const catagoryHandler = (e) => {
        setSearchParams({
            sort: sort,
            category: e.target.value
        })
    }

    useEffect(() => {
        if (Data) {
            Data.forEach(item => {
                loadFonts(item?.name.english, item?.regular)

            });
        }
    }, [Data])
    const downloadFromUrlHandler = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = link.setAttribute('download', 'font.ttf' || 'font.woff' || 'font.woff2' || 'font.eot' || 'font.svg' || 'font.otf');
        link.click();
    }
    const setFontDataHandler = (data) => {
        setSetFontsData(data)
        sendFontId({ fontId: data._id })
    }

    return (
        <main className='min-h-screen'>
            <div className="flex justify-center items-center py-2 px-4">
                <FormControl color='success' focused={true} sx={{ m: 1, minWidth: 120 }} size="small" >
                    <InputLabel id="demo-select-small">رێکخستن</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={sort || ''}
                        label="Sort"
                        onChange={sortByHandler}
                        sx={{ color: 'green' }}


                    >

                        <MenuItem value='old'>كۆن</MenuItem>
                        <MenuItem value='new'>نوێ</MenuItem>
                        <MenuItem value='popular'>بەناوبانگ</MenuItem>
                        <MenuItem value='A_Z'>A - Z</MenuItem>
                        <MenuItem value='Z_A'>Z - A</MenuItem>
                    </Select>
                </FormControl>
                <FormControl color='success' focused={true} sx={{ m: 1, minWidth: 120 }} size="small" >
                    <InputLabel id="demo-select-large">پۆلێنەکان</InputLabel>
                    <Select
                        labelId="demo-select-large"
                        id="demo-select-large"
                        value={category || ''}
                        label="category"
                        onChange={catagoryHandler}
                        sx={{ color: 'green' }}


                    >
                        <MenuItem value='all' >All</MenuItem>
                        {catagory?.map((item, index) => {
                            return <MenuItem value={item} style={{ fontFamily: 'NRT-Reg' }} key={index}>{item}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="grid place-items-center  items-stretch py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
                {FontFetch && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return <Skeleton key={item} variant="rectangular" width={310} height={158} />
                })}
                <Suspense fallback={<Skeleton variant="rectangular" width={310} height={158} />} >
                    {
                        SearchByName
                            ?
                            Data?.filter(item => item?.name?.kurdish.includes(SearchByName) || item?.name?.english.toLowerCase().includes(SearchByName.toLowerCase())).slice(0, 50).map((item, index) => {
                                return <FontCards
                                    key={index}
                                    fontname={item?.name?.english}
                                    stylecount={item?.styles.length + 1}
                                    text={TextTestFromReducer ? TextTestFromReducer : item.testText}
                                    textstyles={{
                                        fontFamily: item?.name?.english,
                                        fontSize: PXfromReducer
                                    }}
                                    fontnamestyle={{
                                        fontFamily: item?.name?.english,
                                    }}
                                    onClick={() => {
                                        dispatch(SetOpenFontModal(!OpenModal))
                                        setFontDataHandler(item)

                                    }}

                                />
                            })
                            :
                            Data && Data?.slice(-Load + 1)?.map((item, index) => {
                                return (
                                    <FontCards
                                        key={index}
                                        fontname={item?.name?.english}
                                        stylecount={item?.styles.length + 1}
                                        text={TextTestFromReducer ? TextTestFromReducer : item.testText}
                                        textstyles={{
                                            fontFamily: item?.name?.english,
                                            fontSize: PXfromReducer
                                        }}
                                        fontnamestyle={{
                                            fontFamily: item?.name?.english,
                                        }}
                                        onClick={() => {
                                            dispatch(SetOpenFontModal(!OpenModal))
                                            setFontDataHandler(item)

                                        }}

                                    />
                                )
                            })



                    }

                </Suspense>
            </div>
            {
                !SearchByName && Load < Data?.length &&
                <div className="flex justify-center items-center">
                    <IconButton onClick={() => setLoad(Load + 15)} aria-label="more" size="large" color='success'>
                        <ExpandCircleDownTwoToneIcon />
                    </IconButton>
                </div>
            }

            <MyModal
                className=" bg-slate-200 dark:bg-slate-700 dark:bg-opacity-90 bg-opacity-70  backdrop-blur-sm rounded-md shadow-md"
                children={
                    <>
                        <Box className='flex justify-between items-center flex-wrap '>
                            <h1 className='text-slate-900 text-opacity-75 dark:text-gray-400 text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl' >
                                {SetFontsData?.name?.english}
                            </h1>


                            <h1 className='text-slate-900 text-opacity-75 dark:text-gray-400 text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl'  >
                                کێش
                                &nbsp;
                                {SetFontsData?.styles?.length + 1}
                            </h1>
                        </Box>
                        <hr />
                        <h1 className='text-slate-900 dark:text-slate-50 p-2 text-center text-xl lg:text-2xl xl:text-3xl' >
                            شێوازەکان
                        </h1>
                        <Box sx={{
                            maxHeight: '80vh',
                            overflowY: 'auto',

                        }}>

                            <Box sx={{
                                direction: 'ltr',
                            }} className='flex justify-between items-center'>
                                <h1 className='text-slate-900 dark:text-slate-50 sm:text-sm md:text-lg lg:text-xl xl:text-2xl'  >
                                    {SetFontsData?.name?.english}  Regular
                                </h1>
                                <IconButton
                                    disabled={isLoading}
                                    onClick={() => data && downloadFromUrlHandler(data?.regular)}
                                    color="primary">
                                    <FileDownloadOutlinedIcon />
                                </IconButton>
                            </Box>
                            <hr />


                            {
                                data?.styles?.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <Box
                                                sx={{
                                                    direction: 'ltr',
                                                }} className='flex justify-between items-center'>

                                                <h1 className='text-slate-900 dark:text-slate-50 sm:text-sm md:text-lg lg:text-xl xl:text-2xl break-words break-all'  >
                                                    {item.name}
                                                </h1>
                                                <IconButton
                                                    disabled={isLoading}
                                                    onClick={() => data && downloadFromUrlHandler(item?.url)}
                                                    color="primary">
                                                    <FileDownloadOutlinedIcon />
                                                </IconButton>
                                            </Box>
                                            <hr />
                                        </div>
                                    )
                                })
                            }

                        </Box>

                        <Box sx={{
                            direction: 'ltr',
                        }} className='flex justify-between items-center'>
                            <h1 className='text-slate-900 dark:text-slate-50 sm:text-sm md:text-lg lg:text-xl xl:text-2xl'  >
                                {SetFontsData?.name?.english} Zip
                            </h1>
                            <IconButton
                                disabled={isLoading}
                                onClick={() => data && downloadFromUrlHandler(data?.zipUrl)}
                                color="primary">
                                <FileDownloadOutlinedIcon />
                            </IconButton>
                        </Box>
                        <hr />

                    </>
                } />
        </main >
    )
}

export default Main