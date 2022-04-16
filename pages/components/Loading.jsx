import React from 'react';
import Nav from './Nav';
import Styles from '../../styles/desktop.module.scss';

const loading = () => {
    return (
        <React.Fragment>
            <center>
                <div className={Styles.ldsEllipsis}>
                    <div></div><div></div><div></div><div></div>
                </div>
            </center>
        </React.Fragment>
    );
}

export default loading;