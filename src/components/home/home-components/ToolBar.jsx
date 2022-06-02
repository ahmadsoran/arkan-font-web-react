import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, InputAdornment, Slider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';
function ToolBar() {
    const [value, setValue] = React.useState('Controlled');
    const [PX, setPX] = React.useState(30);

    const handleChangePx = (event) => {
        setPX(event.target.value);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(value)
    return (

        <div className="flex justify-center  items-center pt-10">
            <div className="sm:flex  block sm:border-2 sm:border-slate-700 sm:border-opacity-40 sm:rounded-full sm:overflow-hidden">

                <div className="flex relative m-2 sm:m-0">
                    <span className="inline-flex  items-center px-3 border-t bg-inherit border-l border-b  border-gray-700 text-gray-500 shadow-sm text-sm">
                        <SearchIcon className="text-gray-400" />
                    </span>
                    <input type="search" id="email-with-icon" className="   flex-1 appearance-none border border-gray-700 w-full py-2 px-4 bg-inherit text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent" name="fontName" placeholder="ناوی فۆنت" />
                </div>

                <div className="flex relative m-2 sm:m-0">
                    <span className="inline-flex  items-center px-3 border-t bg-inherit border-l border-b  border-gray-700 text-gray-500 shadow-sm text-sm">
                        <KeyboardAltTwoToneIcon className="text-gray-400" />

                    </span>
                    <input type="text" id="email-with-icon" className=" flex-1 appearance-none border border-gray-700 w-full py-2 px-4 bg-inherit text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent" name="testFont" placeholder="شتێک بنوسە" />
                </div>


                <div className="flex items-center">

                    <p className='m-2 p-2 dark:text-slate-50 text-slate-900'>
                        {PX} قەبارە
                    </p>


                    <div className="w-32 ">

                        <Slider
                            size="small"
                            defaultValue={30}

                            aria-label="Small"
                            onChange={handleChangePx}
                            min={10}
                            max={350}
                            onChangeCommitted={() => console.log(PX)}
                            color='success'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolBar