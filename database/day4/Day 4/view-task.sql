--1.

CREATE VIEW view_task AS(
SELECT employee.EmpName, project.ProjectName
FROM employee , project
WHERE employee.EmpID = project.Empid 
AND employee.EmpID IN (SELECT Empid  FROM employee WHERE posation = 'clerk')
ORDER BY employee.EmpName)

--2.	

CREATE VIEW project_emp_no AS(
SELECT project.ProjectName, COUNT(employee.EmpID) AS NumOfEmps
FROM project 
LEFT JOIN employee ON project.EmpID = employee.EmpID
GROUP BY project.ProjectName)


--a==> No we can not insert, update or delete data from that View because it has Agg function

--b==> No, when we do DML in the table itself because its a gate to the table

--c==> Check option is used to prevent the data from being updated if it doesn't meet the criteria of the view

--d==> wen we drop a view, the data inserted to it will not be deleted


--3. 

CREATE VIEW student_course_above_50 AS(
SELECT student.FirstName + ' ' + student.LastName AS 'studentName', course.CourseName
FROM student , course , student_course 
WHERE student.StudentID = student_course.StudentID AND course.CourseID = student_course.CourseID AND sc.Grade > 50)


--4.  

CREATE VIEW manager_topics AS(
SELECT employee.EmpName, topic.TopicName
FROM employee
JOIN topic ON employee.EmpID = topic.EmpID
)
--5.

CREATE VIEW Instructor_SdJava AS(
SELECT e.EmpName, d.DepartmentName
FROM employee as e, department as d
WHERE e.EmpID = d.EmpID AND d.DepartmentName = 'SD' OR d.DepartmentName = 'Java')

--6.  

CREATE VIEW V1 AS(
SELECT student.FirstName + ' ' + student.LastName AS 'Student Name', student.Address
FROM student 
WHERE student.Address = 'Alex' OR student.Address = 'Cairo'
WITH CHECK OPTION)

--7. Create a view that will display the project name and the number of employees work on it. “Use Company DB”

CREATE VIEW project_emp AS(
SELECT project.ProjectName, COUNT(employee.EmpID) AS 'Number of Employees'
FROM employee , project 
WHERE employee.EmpID = project.EmpID
GROUP BY project.ProjectName)

