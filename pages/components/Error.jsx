
import React from 'react';

const HandleError = (props) => {
    return (
        <React.Fragment>
            <center>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/network-technology-12/32/network_global_fail_error_connection_internet_www-512.png" alt="error img" />
                   <h2>Ups! error: {props.error}</h2>
                </div>
            </center>
        </React.Fragment>
    );
}

export default HandleError;