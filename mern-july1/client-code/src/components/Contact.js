import React from 'react';
import phoneImg from '../images/phone2.png';
import mailImg from '../images/mail.png';
import addressImg from '../images/address.png';

export default function Contact() {
    return (
        <div className="container mt-5 ">
            <div className="row d-flex justify-content-around">
                <div className="col col-lg-3 col-12 py-2 sm-cont">
                    <div className="row d-flex align-items-center">
                        <div className="col-3 d-flex justify-content-center">
                            <img className="sm-img-icon" src={phoneImg} alt="phone-img" />
                        </div>
                        <div className="col-9 sm-col">
                            <span  className="h7 d-block">Phone</span>
                            <label style={{ color: 'blue' }}>+91 9632587410</label>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-12 py-2 sm-cont">
                    <div className="row d-flex align-items-center">
                        <div className="col-3 d-flex justify-content-center">
                            <img className="sm-img-icon" src={mailImg} alt="mail-img" />
                        </div>
                        <div className="col-9 sm-col">
                            <span  className="h7 d-block">Mail</span>
                            <label style={{ color: 'blue' }}>vision@gmail.com</label>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-12 py-2 sm-cont">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-2 col-3 d-flex justify-content-center">
                            <img className="sm-img-icon" src={addressImg} alt="address-img" />
                        </div>
                        <div className="col-xl-10 col-9 sm-col">
                            <h6  className="h7 d-block">Address</h6>
                            <label style={{ color: 'blue' }}>Hudda City Center, Gurugram</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
