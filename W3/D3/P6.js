//Nested Objects
const student = {
    firstName: "Deepak",
    lastName: "MB",
    score:{
        math: 85,
        science: 90,
        literature: 78
    },
    habbies: ["Reading", "Singing", "Gaming"],
    fullname: function(){
        return this.firstName + " " + this.lastName;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
console.log(student.score.math);
student.greet();