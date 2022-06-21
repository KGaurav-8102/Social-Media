import React, {useState} from 'react';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';
import ShareModel from '../ShareModel/ShareModel';
import './RightSide.css';

const RightSide = () => {
    const [modelOpened, setModelOpened] = useState(false);
    return (
       <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className='button r-button' onClick={() => setModelOpened(true)}>
                    Share
            </button>
            <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
       </div>
    );
}

export default RightSide;
