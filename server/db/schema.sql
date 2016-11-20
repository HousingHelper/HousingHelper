create table admin
  (
    id serial primary key,
    username varchar(255) not null,
    password varchar(255),
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    startDate date,
    phone int,
    email varchar(255) not null
  )

create table apartments
  (
    id serial primary key,
    title varchar(255),
    address varchar(255) not null,
    city varchar(50) not null,
    state char(2),
    zipcode varchar(10) not null,
    squareft varchar(10),
    bedrooms int not null,
    baths int not null
    parkingspace text,
    currentOcc int,
    totalOcc int,
    wifipwd varchar(255),
    emergency text,
    grocery text,
    restaurants text,
    trashDay text,
    notes text,
    owner integer references aptOwners
  )

create table rooms
  (
    id serial primary key,
    beds int not null,
    ensuite boolean not null,
    currentOcc int,
    totalOcc int,
    aptId integer references apartments
  )

create table aptOwners
  (
    id serial primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    phone int not null,
    email varchar(255),
    notes text,
    aptId integer references apartments
  )

create table aptContractors
  (
    id serial primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    occupation varchar(50) not null,
    phone int not null,
    email varchar(255),
    notes text,
    aptId integer references apartments
  )

create table renters
  (
    id serial primary key,
    username varchar(255) not null,
    password varchar(255),
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    gender varchar(1) not null,
    DOB date not null,
    hometown text not null,
    phone int not null,
    email varchar(255),
    carMake text,
    carModel text,
    carYear date,
    leaseStart date,
    leaseEnd date,
    payDate date,
    rentAmt decimal(10, 2),
    monthPaid date,
    checkInTime time,
    checkOutTime time,
    notes text,
    aptId integer references apartments,
    roomId integer references rooms,
    groupId integer references groups
  )

create table groups
  (
    id serial primary key,
    title text not null,
    startDate date,
    endDate date,
    checkInDate date,
    checkOutDate date
  )

create table ServReq
  (
    id serial primary key,
    submitted date,
    request text,
    type text,
    permissions text,
    status text,
    notes text,
    renterId integer references renters
  )

create table faqs
  (
    id serial primary key,
    question text,
    answer text
  )
