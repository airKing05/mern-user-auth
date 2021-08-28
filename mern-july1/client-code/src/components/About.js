import React from 'react';
import userImage from '../images/userImage.png'

export default function About() {
    return (
        <div className="container cont" style={{ maxWidth: '700px', marginTop: '100px', marginBottom: '100px' }}>
            <div className="row py-3">
                <div className=" col-md-4">
                    <img src={userImage} className="img-fluid img-thumbnail" alt="user-image" style={{ maxWidth: '200px', height: 'auto' }} />
                </div>
                <div className=" col-md-6">
                    <form>
                    <h4>Anilraj</h4>
                    <h5 style={{ color: 'blue', }}>Web developer</h5>
                    <h6 className="my-4">Rating : <span style={{ fontSize: '11px', fontWeight: 500 }}>4/5</span></h6>
                    <nav class="nav mt-5">
                        <a class="nav-link active" id="nav_about" data-toggle="tab" style={{padding: '10px 0px'}} aria-current="page" href="#nav_about">About</a>
                        <a class="nav-link" id="nav_timeline" data-toggle="tab"  style={{padding: '10px 10px'}} href="#nav_timeline">TimeLine</a>
                    </nav>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-2">
                         <form className="align-self-end ">
                             <input type="submit" className=" px-3" value="Edit"/>
                         </form>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-4">
                        <h5 style={{borderBottom: '2px solid black'}}>Work</h5>
                        <a href="https://www.youtube.com/">Youtube</a> <br/><br/>
                        <a href="https://www.facebook.com/anilrajmeena.meena/">Facebook</a> <br/><br/>
                        <a href="https://www.linkedin.com/in/anilraj-meena/">LinkedIn</a> <br/><br/>
                        <a href="https://twitter.com/ANILRAJMEENA2">Twitter</a> <br/><br/>
                        <a href="https://www.instagram.com/anilraj_bundi/">Instagram</a> <br/><br/>
                    </div>
                    <div className="col-md-8">
                        <div className="row ">
                            <div className="col-md-6">
                                <h6>ID</h6>
                            </div>
                            <div className="col-md-6">
                                <h6>_1315432154313514651854</h6>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Name</h6>
                            </div>
                            <div className="col-md-6">
                                <h6>ANIL RAJ </h6>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Surname</h6>
                            </div>
                            <div className="col-md-6">
                                <h6>MEENA</h6>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Work</h6>
                            </div>
                            <div className="col-md-6">
                                <h6>WEB DEVELOPER</h6>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Technology</h6>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML, CSS, JS, REACT.JS</h6>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}
