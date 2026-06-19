let employeeName = prompt("Enter Employee Name:");
let employeeAge = prompt("Enter Employee Age:");

let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
    alert(`Welcome ${employeeName}`);
} else {
    alert("Thank You");
}