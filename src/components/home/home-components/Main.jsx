import React, { useEffect, useState } from 'react'
import FontCards from './FontCards'
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Main() {
    const TextTestFromReducer = useSelector((state) => state.TextTestSlice.text);
    const SearchByName = useSelector((state) => state.SearchByNameSlice.name);
    const [Load, setLoad] = useState(25)
    const [SortBy, setSortBy] = useState('newest')
    let Data = []
    for (let i = 0; i <= 100; i++) {
        Data.push({
            fontname: `ئەمە فۆنتی ${i}`,
            stylecount: i,
            text: `ئەمە  شێوازی فۆنتی وەرگیراوە لە سێرڤەر  ${i}`
        })
    }
    const sortByHandler = (e) => {
        setSortBy(e.target.value)
    }


    return (
        <main>
            <div className="flex justify-center items-center py-2 px-4">
                <FormControl color='success' focused={true} sx={{ m: 1, minWidth: 120 }} size="small" >
                    <InputLabel id="demo-select-small">رێکخستن</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={SortBy}
                        label="Sort"
                        onChange={sortByHandler}

                    >

                        <MenuItem value='newest'>ىوێ</MenuItem>
                        <MenuItem value='oldest'>كۆن</MenuItem>
                        <MenuItem value='popular'>بەناوبانگ</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="grid place-items-center items-stretch py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
                {
                    SearchByName
                        ?
                        Data.filter(item => item.fontname.includes(SearchByName)).slice(0, 50).map((item, index) => {
                            return <FontCards key={index} fontname={item.fontname} stylecount={item.stylecount} text={item.text} />
                        })
                        :
                        Data && SortBy === 'newest' ? Data?.slice(-Load + 1)?.map((item, index) => {
                            return (
                                <FontCards
                                    key={index}
                                    fontname={item.fontname}
                                    stylecount={item.stylecount}
                                    text={TextTestFromReducer ? TextTestFromReducer : item.text}
                                />
                            )
                        }).reverse()
                            : Data?.slice(0, Load + 1)?.map((item, index) => {
                                return (
                                    <FontCards
                                        key={index}
                                        fontname={item.fontname}
                                        stylecount={item.stylecount}
                                        text={TextTestFromReducer ? TextTestFromReducer : item.text}
                                    />
                                )
                            })

                }
            </div>
            {
                !SearchByName && Load < Data.length &&
                <div className="flex justify-center items-center">
                    <IconButton onClick={() => setLoad(Load + 15)} aria-label="more" size="large" color='success'>
                        <ExpandCircleDownTwoToneIcon />
                    </IconButton>
                </div>
            }
        </main >
    )
}

export default Main