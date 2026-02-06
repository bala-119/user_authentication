import { admission } from "./admission.js";
var obj = { name: "bala", age: 21, sex: "male", mark: "98", state: "TN", phone: 9878549625, address: "balatrichy", group: "Bio-Maths", gmail: "bala@gmail.com", medium: "English", religion: "hindu", nationality: "ind" };

//admission(obj)

function register() {
    
    return admission(obj) ;
}

register();
