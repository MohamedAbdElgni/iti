
--==========Mohamed Ahmed Mohamed Abd Elgani==================
--====================3-Jan-2024==============================
--============================================================
--=		        Lab2                                 =
--============================================================

CREATE TABLE Department (
  DeptNo INTEGER PRIMARY KEY,
  DeptName NVARCHAR(20) NOT NULL,
  --to adabt the var length and accept different langs.
  Location NCHAR(2) NOT NULL DEFAULT 'NY',
  --to be only 2 chars no more no less and also unicode.
  --we can make it char(2)
    
  CONSTRAINT LocationRule CHECK (Location = 'NY' OR Location = 'DS' OR Location = 'KW')
);

CREATE TABLE Employee (

  EmpNo INTEGER IDENTITY(1,1),
  EmpfName VARCHAR(20) NOT NULL,
  EmpfLame VARCHAR(20) NOT NULL,
  DeptNO INTEGER NOT NULL,
  Salary DECIMAL(5, 2) NOT NULL,
    
  CONSTRAINT EmpPK PRIMARY KEY (EmpNo),
  CONSTRAINT EmpSalaryUniq UNIQUE (Salary),
  CONSTRAINT Emp_DeptNO_FK FOREIGN KEY (DeptNO) REFERENCES Department(DeptNo),
  CONSTRAINT EmpSalaryMin CHECK (Salary > 700),
  CONSTRAINT EmpSalaryMax CHECK (Salary < 6000) 
  
);

CREATE TABLE Project (

  ProjectNo NVARCHAR(5) PRIMARY KEY, 
  ProjectName VARCHAR(20) NOT NULL,
  Budget DECIMAL(8, 2)
  
);

CREATE TABLE Works_on (
    
  EmpNo INTEGER NOT NULL,
  ProjectNo NVARCHAR(5) NOT NULL,
  Job VARCHAR(20) ,
  Enter_Date DATE DEFAULT GETDATE() NOT NULL,
    
  CONSTRAINT WorksOn_EmpFK FOREIGN KEY (EmpNo) REFERENCES Employee(EmpNo),
  CONSTRAINT WorksOn_ProjectFK FOREIGN KEY (ProjectNo) REFERENCES Project(ProjectNo),
  CONSTRAINT WorksOn_PK PRIMARY KEY (EmpNo, ProjectNo)
  
);
----------------------------------------------------------
--=============3==========
ALTER TABLE Employee
ADD TelephoneNumber VARCHAR(15);

ALTER TABLE Employee
DROP COLUMN TelephoneNumber;

------------------------------------------------------
--============4============
--!ALTER TABLE Employee
--!DROP CONSTRAINT EmpPK;
--it will not work because of Works_on table uses it as a referance for it's fk.
--to make it work we need to drop the forign key CONSTRAINT WorksOn_EmpFK then we can drop it.
------------------------------------------------------

--bonus
--1
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'Employee';
