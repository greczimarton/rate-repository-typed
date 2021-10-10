import React from "react";
import AuthStorage from "../utils/authStorage";

const AuthStorageContext = React.createContext(new AuthStorage());

export default AuthStorageContext;
