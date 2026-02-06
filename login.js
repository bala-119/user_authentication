import { admission } from "./admission.js";
import * as fs from "fs";
function login(phone,password)
{
    fs.readFile("./data.json",(err,data)=>
    {
        if(err)
        {
            console.log("error");
            return;
        }
        const student = JSON.parse(data);

        if(student.std_phone != phone )
        {
            console.log("invaid phone");
            return;
        }
        const encpaassword =  decryptPassword(student.std_password);

        if(encpaassword == password)
        {
            console.log("Login sucessfull");
             console.log(encpaassword);
            console.log(password)
        }
        else{
            console.log("login failed");
            console.log(encpaassword);
            console.log(password)
        }
    })
    
}
 



 function decryptPassword(encodedobj)
    {   const byteArray = new Uint8Array(Object.values(encodedobj));
        const decoder = new TextDecoder();
        return decoder.decode(byteArray);   
    }

    login(9878549625,"gfcd")
