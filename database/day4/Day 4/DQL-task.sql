--1.      
    SELECT name, gender
    FROM dependence
    WHERE gender = 'Female' AND employee_id IN (
        SELECT id
        FROM employee
        WHERE gender = 'Female'
    )
    UNION
    SELECT name, gender
    FROM dependence
    WHERE gender = 'Male' AND employee_id IN (
        SELECT id
        FROM employee
        WHERE gender = 'Male'
    );


--2

    SELECT project.name, SUM(hours)
    FROM project
    JOIN works_on ON project.id = works_on.project_id
    GROUP BY project.name;

--3

    SELECT *
    FROM department
    WHERE id = (
        SELECT MIN(department_id)
            FROM employee
    );

--4

    SELECT department.name, MAX(salary), MIN(salary), AVG(salary)
    FROM department
    JOIN employee ON department.id = employee.department_id
    GROUP BY department.name;

--5

    SELECT last_name
    FROM employee
    WHERE id IN (
        SELECT manager_id
        FROM department
        WHERE manager_id NOT IN (
            SELECT employee_id
            FROM dependence
        )
    );

--6
    
    SELECT department.id, department.name, COUNT(employee.id)
    FROM department
    JOIN employee ON department.id = employee.department_id
    GROUP BY department.id, department.name
    HAVING AVG(employee.salary) < (
        SELECT AVG(salary)
        FROM employee
    );
--7

    SELECT employee.last_name, employee.first_name, project.name
    FROM employee
    JOIN works_on ON employee.id = works_on.employee_id
    JOIN project ON works_on.project_id = project.id
    ORDER BY employee.department_id, employee.last_name, employee.first_name;

--8

    SELECT TOP 2 MAX(salary)
    FROM employee
    WHERE salary NOT IN (
        SELECT MAX(salary)
        FROM employee
    );

--9

    SELECT employee.first_name, employee.last_name
    FROM employee
    JOIN dependence ON employee.id = dependence.employee_id
    WHERE employee.first_name LIKE dependence.name OR employee.last_name LIKE dependence.name;


--10

        --10.a==>
        
        UPDATE department
        
        SET manager_id = 102672
        
        WHERE manager_id = 968574;

        --10.b==>

        UPDATE department

        SET manager_id = 102672

        WHERE department.id = 20;

        --10.c==>

        UPDATE employee

        SET manager_id = 102672

        WHERE id = 102660;
        

--11

    SELECT * FROM dependence WHERE employee_id = 223344;   

    SELECT * FROM department WHERE manager_id = 223344;
 
    SELECT * FROM employee WHERE manager_id = 223344;

    SELECT * FROM works_on WHERE employee_id = 223344;

    --a. Delete his data from the employee table.

    DELETE FROM employee WHERE id = 223344;

    --b. Delete his data from the dependence table.

    DELETE FROM dependence WHERE employee_id = 223344;

    --c. Delete his data from the works_on table.

    DELETE FROM works_on WHERE employee_id = 223344;

    --d. Delete his data from the department table.

    DELETE FROM department WHERE manager_id = 223344;

--12 

    UPDATE employee
    SET salary = salary * 1.3
    WHERE id IN (
        SELECT employee_id
        FROM works_on
        WHERE project_id = (
            SELECT id
            FROM project
            WHERE name = 'AlRabwah'
        )
    );

