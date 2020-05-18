import React from 'react';
import styled from '@emotion/styled';
import Location from './location';
import Icon from './Icon';
import Condition from './condition';


const Miltoncard = ({ temp, condition, ciudad, pais }) => {
    let highcolor = 0;
    let lowcolor = 0;
    let bg = null;
    // This is for hot weather
    if (temp > 12) {
        highcolor = (1 - (temp - 12) / 28) * 255;
        lowcolor = highcolor - 150;
        bg = `linear-gradient(to top,rgb(255,${highcolor},0),rgb(255,${lowcolor},0))`;
    }
    else if (temp <= 12) { // This is for cold weather
        highcolor = (1 - (+temp + 20) / 32) * 255;
        lowcolor = highcolor - 150;
        bg = `linear-gradient(to top,rgb(0,${highcolor},255),rgb(0,${lowcolor},255))`;
    }

    const Card = styled.div`
        
        margin: 0 auto;
        background: ${bg};
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;  
    `;
    return (
        <Card>
            <Location ciudad={ciudad} pais={pais} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
};
export default Miltoncard;
