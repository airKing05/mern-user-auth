import React from 'react';
import notFoundImg from '../images/notfound.png';

export default function NotFound() {
    return (
        <div className="container-fluid">
           <div className='row'>
               <div className="col">
                   {/* <div className="notfound" style={{backgroundImage:'ur()'}}></div> */}
                    <img src={notFoundImg} className="img-fluid" alt="not-found-img" style={{width: '100% !important', backgroundSize: '100% 100%'}}/>
               </div>
           </div>
        </div>
    )
}
