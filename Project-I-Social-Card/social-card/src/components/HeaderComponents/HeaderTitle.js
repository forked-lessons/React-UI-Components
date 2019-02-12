import React from 'react';
import './Header.css';
import moment from 'moment';


function HeaderTitle() {
    return (
        <div className='title'>
            <h1>Lambda School!</h1>
            <h3>@LambdaSchool </h3>
            <h3>{moment().format("MMM DD")}</h3>
        </div>
    );
};

export default HeaderTitle;
