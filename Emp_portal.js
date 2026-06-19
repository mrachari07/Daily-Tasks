//Employee Object
let employee = {
    name: "Mohan Krishna",
    id: "EMP103",
    department: "Development",
    experience: "Fresher",
    salary: 50000,
    attendance: 92
};

//Skills
let skills = ["Java", "HTML", "CSS", "JavaScript", "React", "Git"];

//Bonus Calculation
let bonus = 5000;
let finalSalary = employee.salary + bonus;

//Attendance Check
let examStatus = employee.attendance >= 75 ? "Eligible" : "Not Eligible";

//Login Verification
let username = "admin";
let password = "12345";

let loginStatus =
    username === "admin" && password === "12345"
        ? "Success"
        : "Failed";

//Company
let company = {
    companyName: "Stackly IT",
    location: "Hyderabad"
};

console.log("==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================\n");

console.log("Employee Name : " + employee.name + "\n");
console.log("Employee ID   : " + employee.id + "\n");
console.log("Department    : " + employee.department + "\n");
console.log("Experience    : " + employee.experience + "\n");
console.log("Salary        : ₹" + employee.salary + "\n");
console.log("Bonus         : ₹" + bonus + "\n");
console.log("Final Salary  : ₹" + finalSalary + "\n");
console.log("Skills        : " + skills.join(", ") + "\n");
console.log("Attendance    : " + employee.attendance + "%\n");
console.log("Exam Status   : " + examStatus + "\n");
console.log("Login Status  : " + loginStatus + "\n");
console.log("Company       : " + company.companyName + "\n");
console.log("Location      : " + company.location + "\n");

console.log("==============================");