import React from 'react';
import StylesD from '../../styles/desktop.module.scss';
import StylesT from '../../styles/tablet.module.scss';
import StylesM from '../../styles/mobile.module.scss';

const Contact = ({ Mquery }) => {
  return (
    <div className={Mquery === 'D' ? StylesD.ContactCont : Mquery === 'T' ? StylesT.ContactCont : Mquery === 'M' ? StylesM.ContactCont : null} >
      <a href="mailto:pablo.cabrera.castrejon@gmail.com" target='_blank'>
        <div className={Mquery === 'D' ? StylesD.ContactCard : Mquery === 'T' ? StylesT.ContactCard : Mquery === 'M' ? StylesM.ContactCard : null}>
          <img src="/assets/img/emaill.svg" alt="Email icon" />
          <div>
            <p>pablo.cabrera.castrejon@gmail.com</p>
            <br />
            <p>pablo@avocadosnetwork.com</p>
          </div>
        </div>
      </a>
      <a href="https://wa.link/pxode9" target='_blank'>
        <div className={Mquery === 'D' ? StylesD.ContactCard : Mquery === 'T' ? StylesT.ContactCard : Mquery === 'M' ? StylesM.ContactCard : null}>
          <img src="/assets/img/wp.svg" alt="Whatsapp icon" />
          <div>
            <p>+52 5512776369</p>
          </div>
        </div>
      </a>
      <a href="https://github.com/mrroboto9819" target='_blank'>
        <div className={Mquery === 'D' ? StylesD.ContactCard : Mquery === 'T' ? StylesT.ContactCard : Mquery === 'M' ? StylesM.ContactCard : null}>
          <img src="/assets/img/github.png" alt="Github icon" />
          <div>
            <p>Mrroboto9819</p>
          </div>
        </div>
      </a>
      <a href="https://www.instagram.com/pablo_cabrera09/" target='_blank'>
        <div className={Mquery === 'D' ? StylesD.ContactCard : Mquery === 'T' ? StylesT.ContactCard : Mquery === 'M' ? StylesM.ContactCard : null}>
          <img src="/assets/img/insta.svg" alt="" />
          <div>
            <p>@pablo_cabrera09</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Contact
