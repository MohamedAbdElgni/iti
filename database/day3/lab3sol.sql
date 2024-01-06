--===================================================
--=        Mohamed Ahmed Mohamed AbdElgani          =
--=                 4-jan-2024                      =
--===================================================
--=====================Lab3==========================
CREATE TABLE Department (
  DeptNo SERIAL PRIMARY KEY,
  DeptName VARCHAR(20) NOT NULL,
  Location CHAR(2) NOT NULL DEFAULT 'NY',
  CONSTRAINT LocationRule CHECK (Location = 'NY' OR Location = 'DS' OR Location = 'KW')
);

CREATE TABLE Employee (
  EmpNo INTEGER PRIMARY Key,
  EmpfName VARCHAR(20) NOT NULL,
  EmpfLame VARCHAR(20) NOT NULL,
  DeptNO INTEGER REFERENCES Department(DeptNo) NOT NULL,
  Salary DECIMAL(8, 2) NOT NULL,
  CONSTRAINT EmpSalaryUniq UNIQUE (Salary),
  CONSTRAINT Emp_DeptNO_FK FOREIGN KEY (DeptNO) REFERENCES Department(DeptNo),
  CONSTRAINT EmpSalaryMin CHECK (Salary > 700),
  CONSTRAINT EmpSalaryMax CHECK (Salary < 6000)
);

CREATE TABLE Project (
  ProjectNo VARCHAR(5) PRIMARY KEY,
  ProjectName VARCHAR(20) NOT NULL,
  Budget DECIMAL(8, 2)
);

CREATE TABLE Works_on (
  EmpNo INTEGER REFERENCES Employee(EmpNo),
  ProjectNo VARCHAR(5) REFERENCES Project(ProjectNo),
  Job VARCHAR(20),
  Enter_Date DATE DEFAULT CURRENT_DATE,
  CONSTRAINT WorksOn_PK PRIMARY KEY (EmpNo, ProjectNo)
);

--====Lab3===>



INSERT INTO Department (DeptName, Location)
VALUES 
  ('HR', 'NY'),
  ('IT', 'DS'),
  ('Finance', 'KW'),
  ('Services', 'DS'),
  ('Operations', 'NY');

INSERT INTO Employee (EmpNo,EmpfName, EmpfLame, DeptNO, Salary)
VALUES 
  (25348,'Mathew', 'Smith', 1, 2500),
  (10102,'Ann', 'Jones', 2, 3000),
  (18316,'James', 'James', 3, 2400),
  (29346,'John', 'Barrimore', 2, 2800),
  (9031,'Lisa', 'Bertoni', 4, 4000);

INSERT INTO Project(ProjectNo, ProjectName, Budget)
VALUES
  ('p1', 'Apollo', 120000),
  ('p2', 'Gemini', 95000),
  ('p3', 'Mercury', 185600),
  ('p4', 'Pluto', 250000);

INSERT INTO Works_on (EmpNo, ProjectNo, Job, Enter_Date)
VALUES
  (25348, 'p1', 'Developer', '2006-01-04'),
  (10102, 'p2', 'Analyst', '2005-01-05'),
  (18316, 'p3', 'Designer', '2004-01-06'),
  (29346, 'p2', 'Manager', '2006-01-07'),
  (9031, 'p4', NULL, '2010-01-08'),
  (18316, 'p4', 'Clerk', '2004-01-06'),
  (10102, 'p4', 'Tester', '2011-01-05'),
  (25348, 'p3', 'Clerk', '2006-05-04'),
  (18316, 'p2', 'Clerk', '2006-03-05'),
  (9031, 'p2', NULL, '2010-01-08');

SELECT * FROM Works_on;
--i==>error
INSERT INTO Works_on (EmpNo, ProjectNo, Job, Enter_Date)
VALUES (11111, 'p1', 'Developer', '2024-01-04');
--ierror
--DETAIL:  Key (empno)=(11111) is not present in table "employee".

-- ii==>error
UPDATE Works_on
SET EmpNo = 11111
WHERE EmpNo = 10102;
--I insert or update on table "works_on" violates foreign key constraint
-- iii==>error
UPDATE Employee
SET EmpNo = 22222
WHERE EmpNo = 10102;
--IDETAIL:  Key (empno)=(10102) is still referenced from table "works_on".
--iv ==> error
DELETE FROM Employee
WHERE EmpNo = 10102;
SELECT * FROM Employee;
IDETAIL:  Key (empno)=(10102) is still referenced from table "works_on".

--<=================Adventure works DB queries=================>

-- q 4 
SELECT NationalIDNumber, LoginID, JobTitle
FROM HumanResources.Employee;

-- q5
SELECT Title, FirstName, LastName
FROM Person.person
WHERE Title = 'Ms' OR LastName = 'Antrim';

--q6 --the min date is 2004
SELECT salesorderid, shipdate
FROM sales.salesorderheader
WHERE shipdate BETWEEN '2010-07-28 00:00:000' and '2010-07-29 23:59:59.999'
--

--q7
SELECT ProductID, Name
FROM Production.Product
WHERE StandardCost < 110.00;

--q8
SELECT P.Name AS ProductName, SubCat.Name AS SubCatName, Cat.Name AS CatName
FROM Production.Product AS P
JOIN Production.ProductSubcategory AS SubCat ON P.ProductSubcategoryID = SubCat.ProductSubcategoryID
JOIN Production.ProductCategory AS Cat ON SubCat.ProductCategoryID = Cat.ProductCategoryID;

--q9
SELECT *
FROM Production.Product
WHERE Name LIKE 'B%';

--10
SELECT *
FROM Production.ProductSubcategory
WHERE ProductSubcategoryID IN (
    SELECT ProductSubcategoryID
    FROM Production.Product
    WHERE Name LIKE 'B%'
);

--q11
SELECT OrderDate, SUM(TotalDue) AS TotalDueSum
FROM Sales.SalesOrderHeader
WHERE OrderDate BETWEEN '2010-07-01' AND '2011-07-31'
GROUP BY OrderDate;

--q12
SELECT AVG(DISTINCT ListPrice) AS AvgListPrice, Cat.Name AS CategoryName
FROM Production.Product AS P
JOIN Production.ProductSubcategory AS SC ON P.ProductSubcategoryID = SC.ProductSubcategoryID
JOIN Production.ProductCategory AS Cat ON SC.ProductCategoryID = Cat.ProductCategoryID
GROUP BY Cat.Name
HAVING AVG(DISTINCT ListPrice) > 1000;





















