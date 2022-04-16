import React from 'react';
import StylesNav from '../../styles/nav.module.scss';

const Nav = ({Mquery}) => {
    return (
        <div className={Mquery === 'D' ? StylesNav.Nav : Mquery === 'T' ? StylesNav.NavT: Mquery === 'M'? StylesNav.NavM: null}>
            <img src='/assets/img/Logo.png' alt="company logo" className={StylesNav.NavImg} width='210' height='90'/>
        </div>
    )
}

export default Nav;