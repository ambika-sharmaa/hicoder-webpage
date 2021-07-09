import React from 'react';
import './ThirdSec.css';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {MdPeopleOutline} from 'react-icons/md';
import {GiAchievement} from 'react-icons/gi';
import {BiHappyAlt} from 'react-icons/bi';

function ThirdSec({
    Line1,
    Line2,
    Line3,
    Line4
}) {
    return (
        <>
            <div className='r3 row'>
            <div className='c3 col-lg-3 col-xs-12'>
                <h3><FaChalkboardTeacher/>{Line1}</h3>
            </div>
            <div className='c3 col-lg-3 col-xs-12'>
                <h3><MdPeopleOutline/>{Line2}</h3>
            </div>
            <div className='c3 col-lg-3 col-xs-12'>
                <h3><GiAchievement/>{Line3}</h3>
            </div>
            <div className='c3 col-lg-3 col-xs-12'>
                <h3><BiHappyAlt/>{Line4}</h3>
            </div>
            </div>
        </>
    )
}

export default ThirdSec
