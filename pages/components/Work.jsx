import React,{useEffect, useState} from 'react';
import StylesD from '../../styles/desktop.module.scss';
import StylesT from '../../styles/tablet.module.scss';
import StylesM from '../../styles/mobile.module.scss';
import Loading from './Loading';
import Errors from './Error.jsx';


const Work = ({Mquery}) => {
    const [State, setState] = useState({
        loading: false,
        error: null,
        data: [{
            id_Work: 1,
            link: 'https://github.com/Mrroboto9819/portfolio-web-app',
            image: '/assets/img/banner2.jpg',
            titles: 'This portfolio'
        },
        {
            id_Work: 2,
            link: 'https://github.com/Mrroboto9819/CinemaUVM',
            image: '/assets/img/cineuvm.png',
            titles: 'Cinema UVM'
        },
        {
            id_Work: 3,
            link: 'https://github.com/Mrroboto9819/Crypto-Cat',
            image: '/assets/img/CryptoCat.png',
            titles: 'CryptoCat'
        },
        {
            id_Work: 4,
            link: 'https://github.com/Mrroboto9819/CinemaUVM',
            image: '/assets/img/cineuvm.png',
            titles: 'Cinema UVM'
        },
        {
            id_Work: 5,
            link: 'https://github.com/Mrroboto9819/Rick-and-morty-api-react',
            image: '/assets/img/ram.jpg',
            titles: 'Rick and Morty api call'
        },
    ],
      });

    if(State.loading === true){
        return(
        <React.Fragment>
            <Loading />
        </React.Fragment>
        );
    }
    if(State.error || State.data === 'undefined'){
        return(
        <React.Fragment>
            <Errors error={Work.error} />
        </React.Fragment>
        );
    }

    return (
        <div className={Mquery === 'D' ? StylesD.InfoCont : Mquery === 'T' ? StylesT.InfoCont: Mquery === 'M'? StylesM.InfoCont: null} >
            <div className={Mquery === 'D' ? StylesD.InfoContWorks : Mquery === 'T' ? StylesT.InfoContWorks: Mquery === 'M'? StylesM.InfoContWorks: null}>
            {State.data.map(Item => (
                    <div key={Item.id_Work} className={StylesD.InfoContWorksCard}>
                            <a href={Item.link} target='_blank'>
                                <img className="card__img" src={Item.image} className={Mquery === 'D' ? StylesD.InfoContWorksCardImg : Mquery === 'T' ? StylesT.InfoContWorksCardImg: Mquery === 'M'? StylesM.InfoContWorksCardImg: null} alt={`image ${Item.titles}`} />
                                <p className={StylesD.InfoContWorksCardTitle} >
                                {Item.titles}
                                </p>
                            </a>
                    </div>

            ))}
            </div>
        </div>
    )
}

export default Work;
