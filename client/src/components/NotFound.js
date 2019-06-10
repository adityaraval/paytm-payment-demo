import React, { Fragment } from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="col-12 login">
                    <h1 className="col-12 title">OOPS...</h1>
                    <p>404 - Page not found</p>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound
