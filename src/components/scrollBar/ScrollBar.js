import React from 'react'
import './scrollBar.css'
import upArrow from '../../images/up.png'
import downArrow from '../../images/down.png'

export const ScrollBar = () => {
    return (
        <div className='scrollMenu'>
            <div className='scrollContainer'>
                <img src={upArrow} alt='previous'/>
                <div className='scrollBarContainer'>
                    <div className='barContainer'>
                        <div id='topBar' className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                </div>
                <img src={downArrow} alt='next'/>
            </div>
        </div>
    )
}