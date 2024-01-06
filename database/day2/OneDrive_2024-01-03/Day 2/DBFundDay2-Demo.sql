--DDL: Data Definition Language
--Create, Alter, Drop

--Create Database:
create database DbFundPython
--Default Path: c:/Program Files/Microsoft SQL Server/MSSQL/Data/(Database Files)
--*.mdf (mandatory datafile), *.ldf (log datafile), *.ndf (secondary datafile)
--can be customized

--Alter Database:
--Add File
--Remove File

--Drop Database:
drop database DbFundPython

--Create Table:
use DbFundPython

create table Member
(
	ID int not null primary key,
	Name varchar(20) not null,
	Address varchar(max) null,
	Type char(7) not null check(Type in ('Premuim','Regular'))--,
	--constraint MemberPK primary key (ID),
	--constraint MemberTypeRule check (Type = 'Premuim' or Type = 'Regular')
	--constraint MemberTypeRule check(Type in ('Premuim','Regular'))
)

alter table Member
add constraint MemberTypeDefault default 'Regular' for Type

alter table Member
add x int not null

alter table Member
drop column x

alter table Member
drop constraint MemberTypeDefault

create table Publisher
(
	Name varchar(20) not null primary key,
	Address varchar(max) null
)

create table PublisherPhones
(
	PName varchar(20) not null,
	Phone char(11) not null,
	constraint PublisherPhonesPK primary key (Phone),
	constraint PublisherPhonesRule check (len(Phone)=11),
	constraint PublisherPhones_Publisher_FK foreign key (PName) references Publisher(Name)
)

create table Book
(
	ISBN char(4) not null primary key,
	Title varchar(50) not null,
	Available bit not null default 0,
	PName varchar(20) not null,
	constraint Book_Publisher_FK foreign key (PName) references Publisher(Name)
)

