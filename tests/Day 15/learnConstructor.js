var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printDetails = function (name, id) {
        this.empName = name;
        this.empId = id;
        console.log("Employee Details are ".concat(this.empName, " : ").concat(this.empId));
    };
    return Employee;
}());
var emp = new Employee();
emp.printDetails("Kavya", "830766");
emp.printDetails("Ajay", "232855");
