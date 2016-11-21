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
    apt_num varchar(10),
    city varchar(50) not null,
    state char(2),
    zipcode varchar(10) not null,
    female_only_housing boolean,
    male_only_housing boolean,
    squareft varchar(10),
    bedrooms int not null,
    baths int not null,
    parkingspace text,
    currentOcc int,
    totalOcc int,
    wifiname text,
    wifipwd varchar(255),
    trashDay text,
    owner integer references aptOwners
  )

create table apt_notes
  (
    id serial primary key,
    note text,
    aptId integer references apartments
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
    aptId integer references apartments
  )

create table aptOwn_notes
  (
    id serial primary key,
    note text,
    aptOwnId integer references aptOwners
  )

create table aptContractors
  (
    id serial primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    occupation varchar(50) not null,
    phone int not null,
    email varchar(255),
    aptId integer references apartments
  )

create table aptContr_notes
  (
    id serial primary key,
    note text,
    aptContrId integer references aptContractors
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
    private_room boolean,
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
    aptId integer references apartments,
    roomId integer references rooms,
    groupId integer references groups
  )

create table renter_notes
  (
    id serial primary key,
    note text,
    renterId integer references renters
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

create table servReqs
  (
    id serial primary key,
    submitted date,
    request text,
    type text,
    permissions text,
    status text,
    renterId integer references renters,
    aptId integer references apartments
  )

create table servReq_notes
  (
    id serial primary key,
    note text,
    servReqId integer references servReqs
  )

create table faqs
  (
    id serial primary key,
    question text,
    answer text
  )

-- create table nearby
--   (
--     id serial primary key,
--     grocery1_name text,
--     grocery1_address text,
--     grocery2_name text,
--     grocery2_address text,
--     grocery3_name text,
--     grocery3_address text,
--     grocery4_name text,
--     grocery4_address text,
--     gym_name text,
--     gym_address text,
--     other_name text,
--     other_address text,
--     aptId integer references apartments
--   )
