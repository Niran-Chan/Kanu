import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type AuthContextProps = {
  isAuth: string;
  setIsAuth: Dispatch<SetStateAction<string>>;
  authUsername: string;
  setAuthUsername: Dispatch<SetStateAction<string>>;
};

const createAuthContext = () => {
  const AuthContext = createContext<AuthContextProps>({
    isAuth: "",
    setIsAuth: () => "",
    authUsername: "",
    setAuthUsername: () => "",
  });

  const AuthProvider = (props: React.PropsWithChildren<{}>) => {
    const [isAuth, setIsAuth] = useState("");
    const [authUsername, setAuthUsername] = useState("");

    return (
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, authUsername, setAuthUsername }}
        {...props}
      />
    );
  };

  return [AuthContext, AuthProvider] as const;
};

const [AuthContext, AuthProvider] = createAuthContext();
export { AuthContext, AuthProvider };
