import React from 'react';
import Styles from '../../styles/footer.module.scss';


const Footer = () => {
    return (
        <div className={Styles.Footer}>
            <img src="/assets/img/Logo.png" className={Styles.FooterLogo} alt="Logo" />
            <p className={Styles.FooterLove}>Made whit love by Pablo Cabrera</p>
        </div>
    )
}

export default Footer
