import React, {useState} from 'react';
import signUpImg from '../images/signup.jpg';

export default function SignUp() {
    const [user, setUser] = useState({
        name : "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""

    })

    let name, value;
    const handelInput = (e) => {
         console.log(e)
          name = e.target.name; 
          value = e.target.value;

          setUser({ ... user , [name]: value})
    }
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
                        <div class="mb-3 form-group"> 
                            <input type="text" class="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="name" 
                            name="name"
                            value={user.name}
                            onChange={handelInput} placeholder="Enter Name" />
                        </div>
                        <div class="mb-3 form-group"> 
                            <input type="email" class="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="email"
                            name="email" 
                            value={user.email}
                            onChange={handelInput}  placeholder="Enter Email"/>
                        </div>
                        <div class="mb-3 form-group"> 
                            <input type="number" class="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="phone"
                            name="phone" 
                            value={user.phone}
                            onChange={handelInput} placeholder="Enter Contact Number"/>
                        </div>
                        <div class="mb-3 form-group"> 
                            <input type="text" class="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="work" 
                            name="work"
                            value={user.work}
                            onChange={handelInput} placeholder="Your Profession"/>
                        </div>
                        <div class="mb-3 form-group">
                            <input type="password" class="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="password"
                            name="password"
                            value={user.password}
                            onChange={handelInput} placeholder="Password" />
                        </div>
                        <div class="mb-3 form-group">
                            <input type="password" class="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="cpassword"
                            name="cpassword" 
                            value={user.cpassword}
                            onChange={handelInput} placeholder="Confirm Password" />
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
