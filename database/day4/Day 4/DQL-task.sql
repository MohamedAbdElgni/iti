    --1. Display (Using Union Function)
        --a.  The name and the gender of the dependence that's gender is Female and depending on Female Employee.
        --b.  And the male dependence that depends on Male Employee.        SELECT name, gender
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


--For each project, list the project name and the total hours per week (for all employees) spent on that project.

    SELECT project.name, SUM(hours)
    FROM project
    JOIN works_on ON project.id = works_on.project_id
    GROUP BY project.name;

--Display the data of the department which has the smallest employee ID over all employees' ID.

    SELECT *
    FROM department
    WHERE id = (
        SELECT MIN(department_id)
            FROM employee
    );

--For each department, retrieve the department name and the maximum, minimum and average salary of its employees.

    SELECT department.name, MAX(salary), MIN(salary), AVG(salary)
    FROM department
    JOIN employee ON department.id = employee.department_id
    GROUP BY department.name;

--List the last name of all managers who have no dependents.

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

--For each department-- if its average salary is less than the average salary of all employees-- display its number, name and number of its employees.
    
    SELECT department.id, department.name, COUNT(employee.id)
    FROM department
    JOIN employee ON department.id = employee.department_id
    GROUP BY department.id, department.name
    HAVING AVG(employee.salary) < (
        SELECT AVG(salary)
        FROM employee
    );
--Retrieve a list of employees and the projects they are working on ordered by department and within each department, ordered alphabetically by last name, first name.

    SELECT employee.last_name, employee.first_name, project.name
    FROM employee
    JOIN works_on ON employee.id = works_on.employee_id
    JOIN project ON works_on.project_id = project.id
    ORDER BY employee.department_id, employee.last_name, employee.first_name;

--Try to get the max 2 salaries using subquery

    SELECT TOP 2 MAX(salary)
    FROM employee
    WHERE salary NOT IN (
        SELECT MAX(salary)
        FROM employee
    );

--Get the names of employees that is similar to any dependent name

    SELECT employee.first_name, employee.last_name
    FROM employee
    JOIN dependence ON employee.id = dependence.employee_id
    WHERE employee.first_name LIKE dependence.name OR employee.last_name LIKE dependence.name;


--    10. Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574)  moved to be the manager of the new department (id = 100), and they give you(your SSN =102672) her position (Dept. 20 manager) 

        --a. First try to update her record in the department table
        --b. Update your record to be department 20 manager.
        --c. Update the data of employee number=102660 to be in your teamwork (he will be supervised by you) (your SSN =102672)

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

--Unfortunately the company ended the contract with Mr. Kamel Mohamed (SSN=223344) so try to delete his data from your database in case you know that you will be temporarily in his position.
--Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises any employees or works in any projects and handle these cases).

    --a. Delete his data from the employee table.
    --b. Delete his data from the dependence table.
    --c. Delete his data from the works_on table.
    --d. Delete his data from the department table.

    -- check if Mr. Kamel has dependents

    SELECT * FROM dependence WHERE employee_id = 223344;

    -- check if Mr. Kamel works as a department manager

    SELECT * FROM department WHERE manager_id = 223344;

    -- check if Mr. Kamel supervises any employees

    SELECT * FROM employee WHERE manager_id = 223344;

    -- check if Mr. Kamel works in any projects

    SELECT * FROM works_on WHERE employee_id = 223344;


    --a. Delete his data from the employee table.

    DELETE FROM employee WHERE id = 223344;

    --b. Delete his data from the dependence table.

    DELETE FROM dependence WHERE employee_id = 223344;

    --c. Delete his data from the works_on table.

    DELETE FROM works_on WHERE employee_id = 223344;

    --d. Delete his data from the department table.

    DELETE FROM department WHERE manager_id = 223344;

--Try to update all salaries of employees who work in Project ‘AlRabwah’ by 30% 

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

