import {
    introducePerson,
    FullTime,
    isFulltimeEmployee,
    personToString,
    getProfessions,
  } from "./objects";
  
  interface Person {
    name: {
      first: string;
      last: string;
    };
    status: typeof FullTime;
    profession: string;
  }
  
  const tauhid: Person = {
    name: {
      first: "Mohammad",
      last: "Islam",
    },
    status: FullTime,
    profession: "Engineer and Professor",
  };
  
  const john: Person = {
    name: {
      first: "John",
      last: "Snow",
    },
    status: FullTime,
    profession: "Night's Watch",
  };
  
  console.log(introducePerson(john));
  console.log(introducePerson(tauhid));
  
  console.log(isFulltimeEmployee(tauhid));
  
  console.log(personToString(tauhid));
  
  console.log(
    getProfessions({
      1: tauhid,
    })
  );
  