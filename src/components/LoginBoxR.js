import React from 'react'
import './css/LoginBoxR.css'


function LoginBoxR() {
  return (
    <div className='LoginBoxR'>
        <div >
        <img
            src="https://s2.gifyu.com/images/Online-forum.gif"
            alt="logo"
            className='logo'
          />
        </div>
        <div className='welcome'>
            <h3>Hello LNMIITians!</h3>
            <h2>Enter your personal details and start journey with us</h2>
        </div>
        <div className='modal_buttons'>
        <button className='add'>
                SIGN UP as LNMIITian
              </button>
        <button className='add'>
                SIGN UP as Guest
              </button>
        </div>
      
    </div>
  )
}

export default LoginBoxR
