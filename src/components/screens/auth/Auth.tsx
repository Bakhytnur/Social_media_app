'use client'

import React from 'react'

interface IAuth {
    type?: 'login' | 'register' 
}

const Auth = ({type}: IAuth) => {
  return (
    <div>Auth</div>
  )
}

export default Auth