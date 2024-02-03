/**
 * componente para guardar el estado y las funciones
 */

import { createContext, useContext, useState } from "react";
import type { AuthResponse, User } from "../types/types";
//import requestNewAccessToken from "./requestNewAccessToken";
import { API_URL } from "../auth/authConstants"; 

interface AuthProviderProps {
    children: React.ReactNode;
}

// Creación del contexto
const AuthContex = createContext({
    isAuthenticated: false,
    getAccessToken: () => {},
    setAccessTokenAndRefreshToken: (
//     _accessToken: string,

    ) => {},
    getRefreshToken: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    saveUser: (_userData: AuthResponse) => {},
    getUser: () => ({} as User | undefined),
    signout: () => {},
});

// validar si existe o no la auth para dejar pasar a la ruta protegida
export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated] = useState(false);
    return <AuthContex.Provider value={{ isAuthenticated }}>{children}</AuthContex.Provider>
}

// tenner acceso en cualquier componente que desea utilizar las propiedades y funciones
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContex);