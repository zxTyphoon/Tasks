namespace task.employee.management;

entity Employees {
  key ID            : UUID;
  firstName         : String(100);
  lastName          : String(100);
  dateOfJoining     : Date;
  address           : String(255);
  phoneNumber       : String(20);
}