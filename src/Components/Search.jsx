import React, { useRef } from 'react'
import '../App.css'
export default function Search(props) {
    const searchInput = useRef();
    return (
        <>
        <div className='position'>Weather Searching App</div>
        <div className='flex shadow-xl'>
            <input type="search" value={props.searchData} className='border border-black w-5/6 p-3 text-2xl' onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
            <button onClick={props.searchWeather} className='p-3 bg-slate-600 w-1/6 text-white'>Search</button>
        </div>
        </>
    )
}
