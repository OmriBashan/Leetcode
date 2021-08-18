select Emp1.Name  as Employee
from Employee as Emp1, Employee as Emp2 
where Emp1.ManagerId = Emp2.Id and Emp1.Salary > Emp2.Salary