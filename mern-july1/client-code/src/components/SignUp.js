import React from 'react';
import signUpImg from '../images/signup.jpg';

export default function SignUp() {
    return (
        <div className="container cont" style={{ maxWidth: '700px', marginTop: '100px', marginBottom: '100px' }}>
            <div className="row px-5 pt-5  pb-3">
                <div className="col">
                    <h2 className="h2">SignUp</h2>
                </div>
            </div>
            <div className="row px-5 pb-4">
                <div className="col-md-6">
                    <form>
                        <div class="mb-3 "> 
                            <input type="text" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div class="mb-3"> 
                            <input type="email" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Email"/>
                        </div>
                        <div class="mb-3"> 
                            <input type="text" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact Number"/>
                        </div>
                        <div class="mb-3"> 
                            <input type="text" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Profession"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control border border-4 border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="exampleInputPassword1" placeholder="Confirm Password" />
                        </div>
                        
                        <button type="submit" class="btn btn-primary d-grid gap-2 col-12">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="d-flex align-item-center  mt-4  mt-md-4 mb-5 mb-md-0" style={{maxWidth: '230px', height:'200px'}} src={signUpImg} alt="signUpImg"/>
                </div>
            </div>
        </div>
    )
}
