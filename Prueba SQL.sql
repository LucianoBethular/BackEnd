select * from items;

insert into items set nombre="Fideos" , categoria= "Harina", stock= "20";
insert into items set nombre="Leche" , categoria= "Lacteos", stock= "30";
insert into items set nombre="Crema" , categoria= "Lacteos", stock= "15";

delete from items where id=1;
update items set id=45 where id=2;


select * from items;


