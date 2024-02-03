import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

/**
 * Validar si el usario esta auth para poder mostrar la ruta
 */


export default function ProtectedRoutes(){
    const auth = useAuth();
    //validaciíon. Si esta auth pasa a la ruta con "<Outlet />" en caso contrario va a la ruta por defecto
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/"/> 
}

// estado global