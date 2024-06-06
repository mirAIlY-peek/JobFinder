import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../../assets/wrappers/HoWeWork';

const HowWeWork = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Wrapper show={show}>
            <h1>How We Work</h1>
            <p>Discover what makes life at Meta so unique. Our internal groups help people find and build community, and our benefits help them care for themselves and their families. Browse these categories to learn more about people who work at Meta and the resources available to them.</p>
            <div className='categories'>
                <span>Culture</span>
                <span>Diversity</span>
                <span>Veterans</span>
                <span>Leadership</span>
                <span>Innovation</span>
                <span>Benefits</span>
            </div>
        </Wrapper>
    );
};

export default HowWeWork;
