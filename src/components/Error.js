import React from 'react'
import { Link } from 'react-router-dom'
import imgg from '../assets/error.gif'

const Error = () => {
    return(
            <div style={{marginRight: "calc(-100vw / 2 + 500px / 2)",position:"relative"}}>
                <img style={{height:"600px",width:"1300px"}} src={imgg} alt="error"/>
                <Link style={{position: "absolute",top: "70%",left: "36%",textDecoration:"none"}} to="/">Click Here To Go Back</Link>
            </div>

    )
}
export default Error;