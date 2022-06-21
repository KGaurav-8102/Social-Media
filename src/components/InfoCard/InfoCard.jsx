import React, { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';

import './InfoCard.css';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
    const [modelOpened, setModelOpened] = useState(false);
    return (
       <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                 <UilPen width='2rem' height='1.2rem' onClick={() => setModelOpened(true)}/>
                 <ProfileModal modelOpened={modelOpened} setModelOpened={setModelOpened} />
                </div>  
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>
                    in Relationship
                </span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>
                    Patna, India
                </span>
            </div>
            <div className="info">
                <span>
                    <b>Works At </b>
                </span>
                <span>
                    KgSoftech.pvt.ltd
                </span>
            </div>
            <button className='button logout-btn'>Logout</button>
       </div>
    );
}

export default InfoCard;
