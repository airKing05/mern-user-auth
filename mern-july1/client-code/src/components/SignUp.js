import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import signUpImg from '../images/signup.jpg';

export default function SignUp() {
    const history = useHistory();
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
        //  console.log(e)
          name = e.target.name;
          value = e.target.value;

          setUser({ ...user , [name]: value})
    };

    const sendInputData = async (e) => {
        e.preventDefault();

        const {name, email, phone, work, password, cpassword} = user;

        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword       //name(property of db): name(field data value)
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("invalid registration")
            console.log("invalid registration")
        }
        else{
            window.alert("registration successful")
            console.log("registration successful")

            history.push("/sign-in")
        }
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
                    <form method = "POST">
                        <div className="mb-3 form-group">
                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="name"
                            name="name"
                            value={user.name}
                            onChange={handelInput} placeholder="Enter Name" />
                        </div>
                        <div className="mb-3 form-group">
                            <input type="email" className="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="email"
                            name="email"
                            value={user.email}
                            onChange={handelInput}  placeholder="Enter Email"/>
                        </div>
                        <div className="mb-3 form-group">
                            <input type="number" className="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handelInput} placeholder="Enter Contact Number"/>
                        </div>
                        <div className="mb-3 form-group">
                            <input type="text" className="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="work"
                            name="work"
                            value={user.work}
                            onChange={handelInput} placeholder="Your Profession"/>
                        </div>
                        <div className="mb-3 form-group">
                            <input type="password" className="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="password"
                            name="password"
                            value={user.password}
                            onChange={handelInput} placeholder="Password" />
                        </div>
                        <div className="mb-3 form-group">
                            <input type="password" className="form-control  border-top-0 border-left-0 border-right-0 rounded-0  border-dark" autoComplete="off" id="cpassword"
                            name="cpassword"
                            value={user.cpassword}
                            onChange={handelInput} placeholder="Confirm Password" />
                        </div>

                        <button type="submit" className="btn btn-primary d-grid gap-2 col-12"
                        onClick={sendInputData}>Submit</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="d-flex align-item-center  mt-4  mt-md-4 mb-5 mb-md-0" style={{maxWidth: '230px', height:'200px'}} src={signUpImg} alt="signUpImg"/>
                </div>
            </div>
        </div>
    )
}
