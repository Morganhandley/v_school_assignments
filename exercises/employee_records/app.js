var employees = [];

function Employee(name, title, salary, status) {
    this.name   = name;
    this.title  = title;
    this.salary = salary;
    this.status = "Full-time";
    function printEmployeeForm(){
        console.log(this.name + this.title + this.salary + this.status); 
    }
}
var employee1 = new Employee("Bob", "teacher", "100K", "full-time");

var employee2 = new Employee("Eric", "teacher", "200K", "full-time");

var employee3 = new Employee("Mo", "CMO", "300K", "full-time");

console.log(employee1, employee2, employee3);













//function Car (year, make, model) {  
//    // use the "this" keyword to reference each object 
//    // that is created from this constructor
//    this.year = year;
//    this.make = make;
//    this.model = model;
//}
//
//// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:
//
//var myTacoma = new Car(2015, "Toyota", "Tacoma");