import React, {useState} from 'react';
import signInImg from '../images/signin1.png';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginUser = async (e) => {
          e.preventDefault();
          const res = await fetch('/signin', {
               method: "POST",
               headers: {
                   "content-type": "application/json"
               },
               body: JSON.stringify({
                    email: email,
                    password: password
               })
          });
          const data = await res.json();
          if(res.status === 400 || !data){
              window.alert("invalid login")
              console.log("invalid login")
          }
          else{
              window.alert("login successfully")
              console.log("login successfully")
              history.push('/')
          }
    }
   
    return (
        <div className="container cont" style={{ maxWidth: '700px', marginTop: '100px', marginBottom: '100px' }}>
            <div className="row px-5 pt-5  pb-3">
                <div className="col">
                    <h2 className="h2 d-flex justify-content-center justify-content-md-start">Sign In</h2>
                </div>
            </div>
            <div className="row px-5 pb-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={signInImg} className="d-flex align-item-center  mt-4  mt-md-2 mb-2 mb-md-4" style={{ maxWidth: '230px', height: '200px' }} alt="signInImg" />
                </div>
                <div className="col-md-6">
                    <form method="POST">
                        <div className="mb-3">
                            <input type="email" className="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="email" placeholder="Enter Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control border-top-0 border-left-0 border-right-0 rounded-0  border-dark" id="password" placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary d-grid gap-2 col-12"
                        onClick={loginUser}>Sign In</button>
                    </form>
                    <div className="row mt-4">
                        <div className="col">
                            <span className='d-flex justify-content-center mb-2'>Sign-in with other </span>
                            <div className='d-flex justify-content-around mb-2'>
                                <a style={{background: '#cc3a2e', color: '#fff', textDecoration: 'none', borderRadius: '5px', padding:'px 7px'}} href="#google">Google</a>
                                <a style={{background: '#149ff9', color: '#fff', textDecoration: 'none', borderRadius: '5px', padding:'px 7px'}} href="#facebook">Facebook</a>
                                <a style={{background: '#1D9BF0', color: '#fff', textDecoration: 'none', borderRadius: '5px', padding:'px 7px'}} href="#twitter">Twitter</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
