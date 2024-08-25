import React from 'react'
import { NO_INDEX_PAGE } from '../../constants/seo.constants'
import { Metadata } from 'next'
import Auth from '@/components/screens/auth/Auth'

export const metadata: Metadata = {
    title: 'Register',
    ...NO_INDEX_PAGE
}

const RegisterPage = () => {
  return <Auth type='register' />
}

export default RegisterPage