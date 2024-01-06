--DML: Insert, Update, Delete

--Insert into Table:
use [DbFundPython]

insert into [dbo].[Member] values(3,'Noha','Minya','Regular')

insert into [dbo].[Member] values(3,'Noha','Minya',default)

insert into [dbo].[Member](ID,Name,Address) values(4,'Ramy','Minya')

insert into [dbo].[Member](ID,Name,Type,Address) values(6,'Karim','Premuim','Aswan')

insert into [dbo].[Member]
values (7,'Sarah','Minia','Premuim'),
(8,'Mahmoud','Minia','Regular')

insert into [dbo].[Member](ID,Name) values(9,'Mayan')
insert into [dbo].[Member] values(9,'Mayan',NULL,'Premuim')

------------------------------------------------------------------------
--Update Table:
update [dbo].[Member] 
set Address = 'No Address'
where Address is null

update [dbo].[Member]
set type = 'Premuim'
where Address = 'Cairo'

update [dbo].[Member]
set type = 'Premuim', Address = 'Minia'
where ID in (3,4)

------------------------------------------------------------------------
--Delete from Table:
delete from [dbo].[Member]

delete from [dbo].[Publisher]

drop table [dbo].[PublisherPhones]

--delete effect (No Rows)
--remove table then re-create it
--real action (drop then create)
Truncate table [dbo].[Publisher]

delete from [dbo].[Member]
where Address = 'Cairo'
------------------------------------------------------------------------
--Notes:
--Updating column datatype:
--increase size is ok
alter table [dbo].[Member]
alter column Name varchar(50) not null

--decrease size is ok if all existing data fits in new size
alter table [dbo].[Member]
alter column Name varchar(20) not null

--will cause error
alter table [dbo].[Member]
alter column Name varchar(5) not null

--Computed Column:
alter table [dbo].[Member]
add DateOfBirth date not null default '2024-01-04'

alter table [dbo].[Member]
drop column DateOfBirth

alter table [dbo].[Member]
add Age as year(getDate())-year(DateOfBirth)

--Database Integrity:
--Domain Integrity: datatypes, not/null, defult, check constraints
--Entity Integrity: unique values (PK, Unique constraint)
--Refrential Integrity: Foreign key constraint
----------------------------------------------------------------------------
--Schema:
--default schema is dbo (database owner)
go
create schema Borrowing
go

alter schema Borrowing
transfer [dbo].[Book]

create table Borrowing.Borrow
(
	ISBN char(4) not null,
	MemberID int not null,
	BorrowDate date not null,
	ReturnDate date null,
	constraint BorrowPK primary key (MemberID,BorrowDate),
	constraint Borrow_Book_FK foreign key (ISBN) references [Borrowing].[Book](ISBN),
	constraint Borrow_Member_FK foreign key (MemberID) references Member(ID) 
)

insert into Borrowing.Book values('1')

-------------------------------------------------------------------------
--DQL: Select from where, order by, alias, group by, having, top with ties, distinct
select ID,Name,Type from [dbo].[Member]
where Address = 'Minia'

use [AdventureWorks]

select [EmployeeID],[Title],[MaritalStatus],[Gender], [SickLeaveHours]
from [HumanResources].[Employee]
where [SickLeaveHours]>40

select [EmployeeID],[Title],[MaritalStatus],[Gender], [SickLeaveHours]
from [HumanResources].[Employee]
where [SickLeaveHours]>=40 and [SickLeaveHours]<=50

select [EmployeeID],[Title],[MaritalStatus],[Gender], [SickLeaveHours]
from [HumanResources].[Employee]
where [SickLeaveHours] between 40 and 50

select [ProductID],[Name],[Color]
from [Production].[Product]
where [Color]='Black' or [Color] = 'Silver' or [Color] = 'Red'

select [ProductID],[Name],[Color]
from [Production].[Product]
where [Color] in ('Black','Silver','Red')

select [ProductID],[Name],[Color]
from [Production].[Product]
where [Color] not in ('Black','Silver','Red')

select [ProductID],[Name],[Color]
from [Production].[Product]
where [Color] != 'NULL' --Color is not NULL

select [ProductID],[Name],[Color]
from [Production].[Product]
where Name like 'Road-%'

select [ProductID],[Name],[Color]
from [Production].[Product]
where Name like '%Road Frame%'
order by [Color] desc, [Name] asc

select [ProductID],[Name],[Color]
from [Production].[Product]
where Name like '_L%'

select distinct [Color]
from [Production].[Product]

select top 3 with ties [ProductID],[Name],[ListPrice]
from [Production].[Product]
where [ListPrice]>100
order by [ListPrice] asc

--Aggregation Functions: count, sum, min, max, avg
select [Color] as 'Color Name', count(*) as 'Number of Products'
from [Production].[Product]
group by [Color]

--can't select any column with aggregation functions except the one in group by statment
select [Color] as 'Color Name', max([ListPrice]) as 'Highest Price'
from [Production].[Product]
where [Color] is not null
group by [Color]
having max([ListPrice])>1000

select max([ListPrice]) from [Production].[Product]

select [Gender],[MaritalStatus], count(*)
from [HumanResources].[Employee]
group by [Gender],[MaritalStatus]
