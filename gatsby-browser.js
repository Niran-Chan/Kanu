import './src/styles/global.css'
import React from 'react'
import { AuthProvider } from './src/context/authcontext'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)