--1. Create a view that will display EmpName, ProjectName for the ‘clerk’ Employees (employee is clerk) order by name.

CREATE VIEW view_task AS
SELECT e.EmpName, p.ProjectName
FROM employee e, project p
WHERE e.EmpID = p.EmpID 

--2. Create a view that will display the project name and the number of employees work on it, and display project names that have no employees work on it. Make an alias for the view's column names. 
    --a. Could you insert, update or delete data from that View? 
    --b. And generally, when you insert, update or delete data to a view, Is this data stored or deleted in/from view itself? 
    --c. What’s check option? And why we use it?
    --d. When you drop a view, what will happen to the data inserted to it?	

CREATE VIEW view_task AS
SELECT p.ProjectName, COUNT(e.EmpID) AS 'Number of Employees'
FROM employee e, project p
WHERE e.EmpID = p.EmpID
GROUP BY p.ProjectName

--a==> No, you can't insert, update or delete data from that View

--b==> No, this data is not stored or deleted in/from view itself

--c==> Check option is used to prevent the data from being updated if it doesn't meet the criteria of the view

--d==> When you drop a view, the data inserted to it will be deleted


--3.  Create a view that displays student full name, course name if the student has a grade more than 50. 

CREATE VIEW student_course_above_50 AS
SELECT s.FirstName + ' ' + s.LastName AS 'Student Name', c.CourseName
FROM student s, course c, student_course sc
WHERE s.StudentID = sc.StudentID AND c.CourseID = sc.CourseID AND sc.Grade > 50

--4. Create an Encrypted view that displays manager names and the topics they teach. 

CREATE VIEW manager_topics WITH ENCRYPTION AS
SELECT e.EmpName, t.TopicName
FROM employee e, topic t
WHERE e.EmpID = t.EmpID

--5. Create a view that will display Instructor Name, Department Name for the ‘SD’ or ‘Java’ Department 

CREATE VIEW Instructor_SdJv AS
SELECT e.EmpName, d.DepartmentName
FROM employee e, department d
WHERE e.EmpID = d.EmpID AND d.DepartmentName = 'SD' OR d.DepartmentName = 'Java'

--6. Create a view “V1” that displays student data for student who lives in Alex or Cairo. Note: Prevent the users to run the following query 
--Update V1 set st_address=’tanta’ Where st_address=’alex’;

CREATE VIEW V1 AS
SELECT s.FirstName + ' ' + s.LastName AS 'Student Name', s.Address
FROM student s
WHERE s.Address = 'Alex' OR s.Address = 'Cairo'

--7. Create a view that will display the project name and the number of employees work on it. “Use Company DB”

CREATE VIEW project_emp AS
SELECT p.ProjectName, COUNT(e.EmpID) AS 'Number of Employees'
FROM employee e, project p
WHERE e.EmpID = p.EmpID
GROUP BY p.ProjectName

