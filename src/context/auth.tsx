import React,{createContext, Dispatch, SetStateAction, useState} from 'react';


type AuthContextProps = {
  isAuth: string
  setIsAuth: Dispatch<SetStateAction<string>>
}

const createAuthContext = () => 
{
		
	const AuthContext = createContext<AuthContextProps>({
		isAuth: '',
		setIsAuth: () => '',
	}); 

	const AuthProvider = (props: React.PropsWithChildren<{}>) => 
	{
		const [isAuth,setIsAuth] = useState('')
		return (<AuthContext.Provider value={{isAuth,setIsAuth}} {...props} />)

	
	}
		return [AuthContext,AuthProvider] as const
}

const [AuthContext, AuthProvider] = createAuthContext()
export { AuthContext, AuthProvider }