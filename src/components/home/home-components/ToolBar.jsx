import React from 'react'
import { Slider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../../../features/FontSizeSlice';
import { SetTextTest } from '../../../features/TextTestSlice';
import { setNameFontToSearch } from '../../../features/SearchByNameSlice';
function ToolBar() {
    const dispatch = useDispatch();
    const PXfromReducer = useSelector((state) => state.FontSizeSlice.fontSize);
    const handleChangePx = (event) => {
        dispatch(setFontSize(event.target.value));
    };
    const handleChangeText = async (event) => {
        dispatch(SetTextTest(event.target.value));
    };
    const handleNameSearch = (event) => {
        dispatch(setNameFontToSearch(event.target.value));
    };




    return (

        <div className="flex justify-center  items-center pt-10">
            <div className="sm:flex justify-center items-center pl-3 block sm:border-2 sm:border-slate-700 sm:border-opacity-40 sm:rounded-full sm:overflow-hidden">

                <div className="flex relative m-2 sm:m-0">
                    <span className="inline-flex  items-center px-3 border-t bg-inherit border-l border-b  border-gray-700 text-gray-500 shadow-sm text-sm">
                        <SearchIcon className="text-gray-400 2xl:scale-150" />
                    </span>
                    <input type="text" onChange={handleNameSearch} className="  placeholder:2xl:text-3xl flex-1 appearance-none border border-gray-700 w-full py-2 px-4 bg-inherit text-gray-700 dark:text-slate-50 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent" name="fontName" placeholder="ناوی فۆنت" />
                </div>

                <div className="flex relative m-2 sm:m-0">
                    <span className="inline-flex  items-center px-3 border-t bg-inherit border-l border-b  border-gray-700 text-gray-500 shadow-sm text-sm">
                        <KeyboardAltTwoToneIcon className="text-gray-400 2xl:scale-150" />

                    </span>
                    <input onChange={handleChangeText} type="text" className=" placeholder:2xl:text-3xl flex-1 appearance-none border border-gray-700 w-full py-2 px-4 bg-inherit text-gray-700 dark:text-slate-50 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent" name="testFont" placeholder="شتێک بنوسە" />
                </div>


                <div className="flex items-center">

                    <p className='m-2 mr-5 p-2 dark:text-slate-50 text-slate-900 2xl:text-3xl'>
                        {PXfromReducer} قەبارە
                    </p>


                    <div className="w-32 ">

                        <Slider
                            size="medium"
                            defaultValue={30}

                            aria-label="Small"
                            onChange={handleChangePx}
                            min={10}
                            max={150}
                            color='success'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolBar