--DQL: Join
use [AdventureWorks]

--cross join:
select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee],[Person].[Contact]

--inner join:
select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee],[Person].[Contact]
where [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee]
inner join [Person].[Contact]
on [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee]
join [Person].[Contact]
on [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

select * from [HumanResources].[Employee]
where ContactID = 1

--right outer join:
select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee] right join [Person].[Contact]
on [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

--left outer join:
select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee] left join [Person].[Contact]
on [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

--full outer join:
select [EmployeeID],[HumanResources].[Employee].ContactID,[Person].[Contact].ContactID,[FirstName],[MiddleName],[LastName]
from [HumanResources].[Employee] full join [Person].[Contact]
on [HumanResources].[Employee].ContactID = [Person].[Contact].ContactID

--self-join:
select Employee.EmployeeID as 'Employee ID', Employee.NationalIDNumber as 'Employee SSN',
Manager.EmployeeID as 'Manager ID', Manager.NationalIDNumber as 'Manager SSN'
from [HumanResources].[Employee] as Employee
join [HumanResources].[Employee] as Manager
on Employee.ManagerID = Manager.EmployeeID

--------------------------------------------------------------------------
--subquery:
select avg([ListPrice]) from [Production].[Product]

select [ProductID],[Name],[ListPrice]
from [Production].[Product]
where [ListPrice]>(select avg([ListPrice]) from [Production].[Product])
order by ListPrice

--Math.round(Math.random()*10)

select distinct top 3 [ListPrice] from [Production].[Product]
order by [ListPrice] desc

select [ProductID],[Name],[ListPrice],[ProductSubcategoryID]
from [Production].[Product]
where [ListPrice] in (select distinct top 3 [ListPrice] from [Production].[Product]
order by [ListPrice] desc)
order by ListPrice

select [ProductSubcategoryID],[Name]
from [Production].[ProductSubcategory]
where [ProductSubcategoryID] in
(select distinct [ProductSubcategoryID]
from [Production].[Product]
where [ListPrice] in 
(select distinct top 3 [ListPrice] from [Production].[Product]
order by [ListPrice] desc))
--------------------------------------------------------------------------
--UNION Family:
use [PreLecture]

--union without duplication
--union all keep the exact result even if duplicated
--intersect gets duplicated values only
--except gets values in result set 1 not existing in result set 2
select Address from [dbo].[Authors]
except
select Address from [dbo].Member
-------------------------------------------------------------------------
--View:
go
create View HighestSubCategory
as (
	select [ProductSubcategoryID],[Name]
	from [Production].[ProductSubcategory]
	where [ProductSubcategoryID] in
	(select distinct [ProductSubcategoryID]
	from [Production].[Product]
	where [ListPrice] in 
	(select distinct top 3 [ListPrice] from [Production].[Product]
	order by [ListPrice] desc))
)
go
select * from HighestSubCategory

select * from [Production].[Product]
where [ProductSubcategoryID] not in (1,2) 

update [Production].[Product]
set ListPrice = 10000
where ProductID = 680

create View ProductCategoryFullData
as (
	select p.[ProductID],p.[Name] as 'ProductName',psc.[Name] as 'ProductSubCategoryName',pc.[Name] as 'ProductCategoryName'
	from [Production].[Product] as p
	join [Production].[ProductSubcategory] as psc
	on p.[ProductSubcategoryID] = psc.[ProductSubcategoryID]
	join [Production].[ProductCategory] as pc
	on psc.[ProductCategoryID] = pc.[ProductCategoryID]
)

alter View ProductCategoryFullData(ProductID,ProductName,ProductSubCategoryName,ProductCategoryName)
as (
	select p.[ProductID],p.[Name],psc.[Name],pc.[Name]
	from [Production].[Product] as p
	join [Production].[ProductSubcategory] as psc
	on p.[ProductSubcategoryID] = psc.[ProductSubcategoryID]
	join [Production].[ProductCategory] as pc
	on psc.[ProductCategoryID] = pc.[ProductCategoryID]
)

select * from ProductCategoryFullData

use [DbFundPython]
go
alter view MiniaMembers(MemberID,MemberName,MemberAddress,DoB,MemberAge)
as (
	select [ID],[Name],[Address],[DateOfBirth],[Age]
	from [dbo].[Member]
	where Address='Minia'
)
with check option
go
select * from  MiniaMembers

--to use DML with VIEW:
--1. view selects columns from 1 table
--2. view selects all column (missing columns either allow null or has default value)
--3. view does not containt aggregation function

insert into MiniaMembers(MemberID,MemberName,DoB) values(10,'ViewTest','1995-07-16')
insert into MiniaMembers(MemberID,MemberName,MemberAddress,DoB) 
values(12,'ViewTest3','Minia','1995-07-16')