import React, {useEffect, useState} from 'react';
import phoneImg from '../images/phone2.png';
import mailImg from '../images/mail.png';
import addressImg from '../images/address.png';

export default function Contact() {
    const [contactData, setContactData] = useState({})

    const callContactPage = async () => {
        try {
            const res = await fetch('/getData', {           //this res is backend response , not from call back function
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setContactData(data)
            console.log("contact page data", data)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
                console.log("contact page error from FE", error)
            }
        }
        catch (err) {
            console.log("error from fe:", err)
        }
    };

    useEffect(() => {
        callContactPage()
    }, [])
    return (
        <div>
            <div className="container mt-5 ">
                <div className="row d-flex justify-content-around">
                    <div className="col col-lg-3 col-12 py-2 sm-cont">
                        <div className="row d-flex align-items-center">
                            <div className="col-3 d-flex justify-content-center">
                                <img className="sm-img-icon" src={phoneImg} alt="phone-img" />
                            </div>
                            <div className="col-9 sm-col">
                                <span className="h7 d-block">Phone</span>
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
                                <span className="h7 d-block">Mail</span>
                                <label style={{ color: 'blue' }}>mernAuth@gmail.com</label>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-12 py-2 sm-cont">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-2 col-3 d-flex justify-content-center">
                                <img className="sm-img-icon" src={addressImg} alt="address-img" />
                            </div>
                            <div className="col-xl-10 col-9 sm-col">
                                <h6 className="h7 d-block">Address</h6>
                                <label style={{ color: 'blue' }}>Hudda City Center, Gurugram</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container cont pb-4" style={{ maxWidth: '700px', marginTop: '100px', marginBottom: '100px' }}>
                <div className="row px-5 pt-5  pb-3">
                    <div className="col">
                        <h2 className="h2 d-flex justify-content-center justify-content-md-start">Ask your Quarry</h2>
                    </div>
                </div>
                <div className="row px-5 pb-4">
                    <div className="col col-md-4 col-12">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col col-md-4 col-12">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col col-md-4 col-12">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact Number" />
                        </div>
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col">
                        <textarea class="form-control " rows="4" aria-label="With textarea" />
                    </div>
                </div>
                <div className="row px-5 mt-3">
                    <div className="col">
                        <div className="input-group">
                            <button type="submit" class="btn btn-primary">Send Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
