import React, { useContext , useEffect } from 'react';
import { AuthContext } from '../context/auth'
import { navigate } from 'gatsby'

type Prop = {

	children:JSX.Element
}

export default function PrivateRoute ({children} : Prop){

	const { isAuth,setIsAuth }= useContext(AuthContext)
	console.log(isAuth)
	if(isAuth == "AUTHORISED")
		return (<>{children}</>)
	else
		navigate('/login')

}