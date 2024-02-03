export interface AuthResponse {
    body: {
      user: User;
      accessToken: string;
     // refreshToken: string;
    };
  }
  export interface AuthResponseError {
    body: {
      error: string;
    };
  }
  
  // datos requeridos para iniciar sesión (no se guarda la password)
  export interface User {
    _id: string;
    mail: string;
  }
  
  export interface AccessTokenResponse {
    statusCode: number;
    body: {
      accessToken: string;
    };
    error?: string;
  }