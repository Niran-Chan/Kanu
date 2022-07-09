import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from '../context/auth'
import { navigate } from 'gatsby'

type Prop = {

	children:JSX.Element
}

export default function PrivateRoute ({children} : Prop){

const { isAuth,setIsAuth }= useContext(AuthContext)

if(isAuth)
	return 
	({children})
	else
		navigate ('/login')
}