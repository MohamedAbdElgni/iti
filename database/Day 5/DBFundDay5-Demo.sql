--Built-in Functions:
--NULL: isnull
--Convertion: cast
--Aggregation Function: max, min, avg, sum, count
--String: substring, lower, upper, concat
--Math: sin,cos,power
--Date: getDate = now, datediff = date_substract, year,day, month
--System: db_name = current_database, suser_name = current_user

use AdventureWorks
select [Title]+' '+[FirstName]+' '+ISNULL([MiddleName],'')+' '+[LastName] as 'Full Name'
from [Person].[Contact]
order by [ContactID]

select cast([ContactID] as nvarchar(50))+' : '+[FirstName] from [Person].[Contact]

select [ContactID], LOWER([FirstName])+' '+SUBSTRING([LastName],1,1)
from [Person].[Contact]

select CONCAT([Title],' ',[FirstName],' ',[MiddleName],' ',[LastName]) as 'Full Name'
from [Person].[Contact]
order by [ContactID]

select day(getDate())

select DB_NAME(), SUSER_NAME()
--------------------------------------------------------------------------
--Heap table & Indexing:
--table without any primary key
--data is sorted as inserted

create table HeapTable
(
	ID int not null,
	Name varchar(20) not null
)

insert into HeapTable values(2,'Test2'),(10,'Test10'),(1,'Test1'),(4,'Test4')

select * from HeapTable

delete from HeapTable where ID = 10

-----------Table Page---------
--ID	|Name
--2		|Test2
--5		|Test5
--1		|Test1
--4		|Test4
--7		|Test7
--3		|Test3
--
--
---------Order Stack-----------
--1(3)|2(1)|3(6)|4(4)|5(2)|7(5)
-------------------------------

insert into HeapTable values(5,'Test5'),(7,'Test7')

select * from HeapTable
where ID > 3

alter table HeapTable
add constraint HeapTablePK primary key (ID)

--select statment with where condition in ID:
--if no PK -> scan each row
--if PK -> use index

--by default clustered index goes to primary key
--only ONE clustered index
--zero or more non-clustered index

create clustered index NameIndex on HeapTable(Name)

-------------------------------------------------------------------------
create table Drug
(
	ID int identity(1,1), --primary key, --clustered index goes to ID
	Name nvarchar(50) not null,
	Dose int not null,
	Target char(5) not null default 'adult', --child-adult
	Form varchar(20) not null default 'tab',
	Expires date,
	Stock int,
	--constraint DrugUnique unique(Name,Dose,Target,Form),
	constraint DrugTargetCheck check(Target in ('child','adult')),
	constraint DrugFormCheck check (Form in ('tab','inject','liqued'))
)

create clustered index DrugIndex on Drug(Name,Dose,Target,Form)

alter table Drug
add constraint DrugPK primary key (ID)

create table [Order]
(
	ID int identity(1,1) primary key,
	OrderDate date not null default getDate(),
	DrugID int not null,
	Quantity int,
	constraint OrderDrugFK foreign key (DrugID) references Drug(ID)
)
------------------------------------------------------------------------------------------
--DBFundPythonBS
