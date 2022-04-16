import React,{useEffect, useState} from 'react';
import StylesD from '../../styles/desktop.module.scss';
import StylesT from '../../styles/tablet.module.scss';
import StylesM from '../../styles/mobile.module.scss';
import Loading from './Loading';
import Errors from './Error.jsx';

const Tech = ({Mquery}) => {

    const [State, setState] = useState({
        loading: false,
        error: null,
        data: [{
            id_Work: 1,
            Img: '/assets/img/html.png',
            Title: 'HTML',
            Description: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web',
        },
        {
            id_Work: 2,
            Img: '/assets/img/css.png',
            Title: 'CSS',
            Description: 'CSS, es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado',
        },
        {
            id_Work: 3,
            Img: '/assets/img/js.png',
            Title: 'JavaScript',
            Description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
        },
        {
            id_Work: 4,
            Img: '/assets/img/node.png',
            Title: 'NodeJS',
            Description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        },
        {
            id_Work: 5,
            Img: '/assets/img/mysql.png',
            Title: 'Mysql',
            Description: 'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos.',
        },
        {
            id_Work: 6,
            Img: '/assets/img/php.png',
            Title: 'PHP',
            Description: 'PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.',
        },
        {
            id_Work: 7,
            Img: '/assets/img/nginx.png',
            Title: 'Nginx',
            Description: 'Nginx ​ es un servidor web/proxy inverso ligero de alto rendimiento y un proxy para protocolos de correo electrónico.​​ Es software libre y de código abierto, licenciado bajo la Licencia BSD simplificada; también existe una versión comercial distribuida bajo el nombre de Nginx Plus.​ ',
        },
        {
            id_Work: 8,
            Img: 'https://vectorified.com/images/mongodb-icon-9.png',
            Title: 'MongoDB',
            Description: 'MongoDB es una base de datos de documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.',
        },
        {
            id_Work: 9,
            Img: '/assets/img/react.png',
            Title: 'ReactJS',
            Description: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',
        },
        {
            id_Work: 10,
            Img: '/assets/img/express.png',
            Title: 'Express',
            Description: 'Express, es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar de facto para Node.js.',
        },
        {
            id_Work: 11,
            Img: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png',
            Title: 'Nextjs',
            Description: 'Traducción del inglés-Next.js es un marco de desarrollo de código abierto construido sobre Node.js que permite funcionalidades de aplicaciones web basadas en React, como la representación del lado del servidor y la generación de sitios web estáticos.',
        }],
      });

    const [info, setInfo] = useState('Technology Info');

    const [desciption, setDesciption] = useState('Here you will see a summary of the information of the technology you selected.'); 

    if(State.loading === true){
        return(
        <React.Fragment>
            <Loading />
        </React.Fragment>
        );
    }
    if(State.error){
        return(
        <React.Fragment>
            <Errors error={Work.error} />
        </React.Fragment>
        );
    }

    return (
        <>
            <div className={Mquery === 'D' ? StylesD.TetchCont : Mquery === 'T' ? StylesT.TetchCont: Mquery === 'M'? StylesM.TetchCont: null}>
                <div className={Mquery === 'D' ? StylesD.TetchContWorks : Mquery === 'T' ? StylesT.TetchContWorks: Mquery === 'M'? StylesM.TetchContWorks: null}>
                {State.data.map(Item => (
                    <div key={Item.id_Work} onClick={() => {
                        setInfo(Item.Title);
                        setDesciption(Item.Description);
                    }} className={Mquery === 'D' ? StylesD.TetchContWorksCard : Mquery === 'T' ? StylesT.TetchContWorksCard: Mquery === 'M'? StylesM.TetchContWorksCard: null}>
                        <diV>
                            <img  src={Item.Img} className={Mquery === 'D' ? StylesD.TetchContWorksCardImg : Mquery === 'T' ? StylesT.TetchContWorksCardImg: Mquery === 'M'? StylesM.TetchContWorksCardImg: null} alt={`image ${Item.id_Work}`} />
                        </diV>
                    </div>
                ))}
                </div>
            </div>
            <div className={Mquery === 'D' ? StylesD.InfoTetchCont : Mquery === 'T' ? StylesT.InfoTetchCont: Mquery === 'M'? StylesM.InfoTetchCont: null} >
                <div className={Mquery === 'D' ? StylesD.InfoTetchContHeader : Mquery === 'T' ? StylesT.InfoTetchContHeader: Mquery === 'M'? StylesM.InfoTetchContHeader: null} >
                    <img className={Mquery === 'D' ? StylesD.InfoTetchImg : Mquery === 'T' ? StylesT.InfoTetchImg: Mquery === 'M'? StylesM.InfoTetchImg: null}  src='/assets/img/info.svg' alt="information icon" />
                    <p className={Mquery === 'D' ? StylesD.InfoTetchTitle : Mquery === 'T' ? StylesT.InfoTetchTitle: Mquery === 'M'? StylesM.InfoTetchTitle: null}  >{info}</p>
                </div>
                <p className={Mquery === 'D' ? StylesD.InfoTetchDesc : Mquery === 'T' ? StylesT.InfoTetchDesc: Mquery === 'M'? StylesM.InfoTetchDesc: null} >{desciption}</p>
                
            </div>
        </>
    )
}

export default Tech;
