import { roles, User } from "./interfaces/userInterface.js";

const newUser : User = {
    id : 1,
    name : "Bachir Diaw",
    email : "bachir.diaw@example.com",
    role : roles.admin
}

console.log("--- NEW USER ---");
console.log(newUser);