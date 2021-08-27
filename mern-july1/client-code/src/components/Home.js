import React from 'react'

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6" style={{background: 'gray', height: '100vh'}}></div>
                <div className="col-6" style={{background: 'darkgray'}}></div>
                <div className="middle" style={{position:'absolute', top:'45%', margin: '10px auto'}}>
                <h4 className="middle" >Welcome visitors</h4>
                <h3 className="middle">this is website is for user authentication</h3>
                </div>
            </div>
        </div>
    )
}
