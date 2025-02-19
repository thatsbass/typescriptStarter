import { user } from "../types/userType.js";
export enum roles{
    admin = "ADMIN", 
    superAdmin = "SUPERADMIN"
}

export interface User extends user {
    role : roles;
}