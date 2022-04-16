import React, { useState } from 'react';

import Nav from '../Nav';
import Footer from '../Footer';
import Work from '../Work';
import Tech from '../Tech';
import Contact from '../Contact';

import StylesD from '../../../styles/desktop.module.scss';
import StylesT from '../../../styles/tablet.module.scss';
import StylesM from '../../../styles/mobile.module.scss';

const index = ({ Mquery }) => {

  const [tabs, settabs] = useState('Work');

  const active = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '1rem',
    borderradius: '0.5rem',
    cursor: 'pointer',
    trantition: '1s',
  };


  const SetTab = e => {
    let target = e.target.id
    settabs(target);
    let node = document.getElementById(target);
    node.style.cssText = 'background-color: #000;color: #fff;padding: 1rem;border-radius: 1rem;transition: 0.5s; cursor: pointer;margin-left: 3rem;';



    if (target === 'Tetch') {
      let node1 = document.getElementById('Work');
      let node2 = document.getElementById('Contact');
      node1.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer;margin-left: 3rem;';
      node2.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer;margin-left: 3rem;';
      node.style.cssText = 'background-color: #000;color: #fff;padding: 1rem;border-radius: 0.5rem;transition: 0.5s; cursor: pointer;margin-left: 3rem;';
    }
    if (target === 'Work') {
      let node1 = document.getElementById('Tetch');
      let node2 = document.getElementById('Contact');
      node1.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer;margin-left: 3rem;';
      node2.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer;margin-left: 3rem;';
      node.style.cssText = 'background-color: #000;color: #fff;padding: 1rem;border-radius: 0.5rem;transition: 0.5s; cursor: pointer;margin-left: 3rem;';
    }
    if (target === 'Contact') {
      let node1 = document.getElementById('Tetch');
      let node2 = document.getElementById('Work');
      node1.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer; margin-left: 3rem;';
      node2.style.cssText = 'background-color: rgb(199, 199, 199);color: #000;padding: 0rem;border-radius: 0rem;transition: 0s;cursor: pointer; margin-left: 3rem;';
      node.style.cssText = 'background-color: #000;color: #fff;padding: 1rem;border-radius: 0.5rem;transition: 0.5s; cursor: pointer; margin-left: 3rem;';
    }

  }

  return (
    <>
      <Nav Mquery={Mquery} />
      <section className={StylesD.Banner}>
        <p className={Mquery === 'D' ? StylesD.BannerText : Mquery === 'T' ? StylesT.BannerText : Mquery === 'M' ? StylesM.BannerText : null}>WELCOME TO MY PORTFOLIO</p>
        <p className={Mquery === 'D' ? StylesD.BannerTextDown : Mquery === 'T' ? StylesT.BannerTextDown : Mquery === 'M' ? StylesM.BannerTextDown : null}>Scroll Down</p>
        <img className={Mquery === 'D' ? StylesD.BannerDownArrow : Mquery === 'T' ? StylesT.BannerDownArrow : Mquery === 'M' ? StylesM.BannerDownArrow : null} src="/assets/img/arroww.png" alt="down_arrow" />
      </section>
      <section className={StylesD.Section1}>
        <div className={StylesD.Profile}>
          <img src="/assets/img/me.jpg" alt="Pablo Cabrera Photo" className={Mquery === 'D' ? StylesD.ProfileMe : Mquery === 'T' ? StylesT.ProfileMe : Mquery === 'M' ? StylesM.ProfileMe : null} />
          <p className={StylesD.ProfileName}>Pablo <br />Cabrera Castrejon</p>
          <p className={StylesD.ProfileSubtitle}>Compute System Engineering</p>

          <div className={StylesD.ProfileMenu}>
            <p className={StylesD.ProfileMenuTitle}>Social Networks:</p>

            <div className={StylesD.ProfileMenuSocial}>
              <a href="https://github.com/mrroboto9819" target="_blank">
                <img src="/assets/img/github.png" alt="github logo" />
              </a>
              <a href="https://www.instagram.com/pablo_cabrera09/" target="_blank">
                <img src="/assets/img/instagram.png" alt="instagram logo" />
              </a>
              <a href="https://twitter.com/dipa711" target="_blank">
                <img src="/assets/img/twitter.png" alt="twiter logo" />
              </a>
              <a href="https://www.linkedin.com/in/pablo-cabrera-7102a5200/" target="_blank">
                <img src="/assets/img/linked.png" alt="linkedin logo" />
              </a>
            </div>

            <p className={StylesD.ProfileMenuTitle}>About Me:</p>
            <p className={StylesD.ProfileMenuText}>Hello, my name is Pablo and I have been dedicating this pandemic time to seek my vocation, I love developing in both back-end and front-end witch my favorite is front-end, I know some frameworks like Reactjs, Expressjs, NextJS and also I know Vanila Javascript, basic PHP, HTML and CSS if you are interested you can visited my Github porfile where I upload all my proyects</p>

          </div>
        </div>

        <div className={Mquery === 'D' ? StylesD.Info : Mquery === 'T' ? StylesT.Info : Mquery === 'M' ? StylesM.Info : null}>
          <div className={Mquery === 'D' ? StylesD.InfoNav : Mquery === 'T' ? StylesT.InfoNav : Mquery === 'M' ? StylesM.InfoNav : null}>
            <p className={Mquery === 'D' ? StylesD.InfoNavItem : Mquery === 'T' ? StylesT.InfoNavItem : Mquery === 'M' ? StylesM.InfoNavItem : null} onClick={(e) => SetTab(e)} id='Work' style={active}> Works </p>
            <p className={Mquery === 'D' ? StylesD.InfoNavItem : Mquery === 'T' ? StylesT.InfoNavItem : Mquery === 'M' ? StylesM.InfoNavItem : null} onClick={(e) => SetTab(e)} id='Tetch' > Technology </p>
            <p className={Mquery === 'D' ? StylesD.InfoNavItem : Mquery === 'T' ? StylesT.InfoNavItem : Mquery === 'M' ? StylesM.InfoNavItem : null} onClick={(e) => SetTab(e)} id='Contact'> Contact </p>
          </div>

          {tabs === 'Work' ? <Work Mquery={Mquery} /> : tabs === 'Tetch' ? <Tech Mquery={Mquery} /> : <Contact Mquery={Mquery} />}


        </div>
      </section>

      <Footer />
    </>
  )
}

export default index;
