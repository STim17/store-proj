import React from 'react';
import './menu-item.scss';

const MenuItem = ({ byTitle, byImg, bySize }) => (
    <div className={`${bySize} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${byImg})`
        }} />
        <div className="content">
            <h1 className='title'>{byTitle}</h1>
            <span className='title'>SHOP NOW</span>
        </div>
    </div>

)
        
    


export default MenuItem;