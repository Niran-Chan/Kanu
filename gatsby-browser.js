import './src/styles/global.css'
import React from 'react'
import { AuthProvider } from './src/context/auth'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)