import {token} from "../Pages/Send.jsx";

const jwt=require("jsonwebtoken");
export function Decode(from){
    const t=jwt.decode(token);
    return from=token.email;
}
