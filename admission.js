import fs from 'fs'
// //name,age,sex,mark,gmail,state,group,medium,religion,nationality,address,phone

 //var obj = { name: "bala", age: 21, sex: "male", mark: "98", state: "TN", phone: 9878549625, address: "balatrichy", group: "Bio-Maths", gmail: "bala@gmail.com", medium: "English", religion: "hindu", nationality: "ind" };



export function admission(obj) {


    let student = {
        std_name: setName(),
        std_phone: setPhone(),

        std_age: setAge(),
        std_sex: setSex(),
        std_mark: setMark(),
        std_gmail: setGmail(),
        std_group: obj.group == null ? null : obj.group,
        std_medium: setMedium(),
        std_religion: obj.religion == null ? null : obj.religion,
        std_nationality: setNationality(),
        std_address: obj.address,
        std_state: obj.state,
        std_password: encodePassword()

    }


    function setName() {
        if (obj.name == null) {
            console.log("Name is null")
            return null;
        }

        if (/^[A-Za-z]+$/.test(obj.name) === true) {
            return obj.name;

        }
        else {
            console.log("Please Enter valid name");
            return null;
        }
    }

    function setNumber() {
        if (/^\d{10}$/.test(obj.number)) {
            return obj.number;
        }
        else {
            console.log("Please enter the valid number");
        }
    }
    function setPhone() {
        if (/^\d{10}$/.test(obj.phone)) {
            return obj.phone;
        }
        else {
            console.log("Please enter the valid phone number");
        }
    }
    function setAddress() {
        if (/^[A-Za-zd]$/.test(obj.address)) {
            return obj.address;
        }
        else {
            console.log("Please enter the address without special symbols");
            return null;
        }
    }
    function setAge() {
        if (obj.age == null) {
            console.log("Age field is null");
            return null;
        }
        if (! /^\d+$/.test(obj.age)) {
            console.log("You re not entered a number as age");
            return null;

        }
        else if (obj.age >= 18 && obj.age <= 21) {

            return Number(obj.age);
        }
        else {
            console.log("Your age is out of the limit");
            return null;

        }

    }

    function setSex() {
        if (obj.sex === "male" || obj.sex === "female") {
            return obj.sex;
        }
        else if (obj.sex == null) {
            console.log("please fill the sex field");
            return null;
        }
        else {
            console.log("Please enter your sex correctly");
            return null;
        }
    }

    function setMark() {
        if (obj.mark == null) {
            console.log("Please fill the mark field");
            return null;
        }

        if (0 < obj.mark && obj.mark <= 100) {
            return Number(obj.mark);
        }
        else if (/^\d+$/.test(obj.mark)) {
            console.log("Please enter the mark within 0 to 100");
            return null;
        }
        else {
            console.log("please enter the mark as number");
            return null;
        }
    }

    function setGmail() {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.gmail)) {
            return obj.gmail;
        }
        else {
            console.log("Please enter the valid gmail ");
            return null;
        }
    }
    function setMedium() {
        if (obj.medium == null) {
            console.log("Please enter the medium");
            return null;
        }
        if (obj.medium.toLowerCase().trim() === "tamil" || obj.medium.toLowerCase().trim() === "hindi" || obj.medium.toLowerCase().trim() === "english") {
            return obj.medium;

        }
        else {
            console.log("Please enter the corrct medium");
            return null;
        }
    }
    function setNationality() {
        if (obj.nationality == null) {
            console.log("Please enter the nationality");
            return null;
        }
        else {
            return obj.nationality;
        }
    }

    function encodePassword() {
        let charset = "@abcdefghi@jklBCDEFGHIJ@Kmnopqrstuvwxyz@ALMNOPQRSTUVWX@YZ0123456789@";

        let p = "";
        for (let i = 10; i < charset.length; i++) {
            let index = Math.floor(Math.random() * i);
            p += charset[index];

        }
        let password = p.slice(1, 5)
        const encoder = new TextEncoder();
        return encoder.encode(password);


    }
    function decryptPassword(encodedvalue) {
        const decoder = new TextDecoder();
        const op = decoder.decode(encodedvalue)
        //console.log(op);
        return op;
    }
    function writeJSON() {

        if (student.std_name == null ||
            student.std_phone == null ||
            student.std_address == null ||
            student.std_age == null ||
            student.std_sex == null ||
            student.std_mark == null ||
            student.std_gmail == null ||
            //std_group : obj.group ==null?null:obj.group,
            student.std_medium == null ||
            //  std_religion==null ||
            student.std_nationality == null ||
            student.std_phone == null) {
            console.log("The required fields is not assigned properly")
        }
        else {

            fs.writeFile("./data.json", JSON.stringify(student), () => { });
            console.log(student);
            console.log("Registration sucessfull");
            const  password  = student.std_password;
            console.log(decryptPassword(password));

        }

    }
    writeJSON();


}


//admission(obj)
