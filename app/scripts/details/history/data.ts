export const HISTORY: any[] = [
  {
    system: "TDICATTBH1TD01",
    name: "Crimes analysis",
    description: "Times, locations, and description",
    sql: "SELECT REGEXP_REPLACE(location, '^.+[/\\]', '') as Name",
    status: "Succeeded",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "23.22",
    user: "ar183023",
    size: "253.54"
  },
  {
    system: "TDICATTBH1TD02",
    name: "Financial report update",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Failed",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "19.13",
    user: "ar183023",
    size: "543.34"
  },
  {
    system: "TDICATTBH1TD02",
    name: "Object storage data model",
    description: "Script description",
    sql: "SELECT Payload FROM READ_NOS (",
    status: "Succeeded",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "15.32",
    user: "ar183023",
    size: "543.22"
  },
  {
    system: "TDICATTBH1TD03",
    name: "Cleanup financial data",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Succeeded",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "14.83",
    user: "ar183023",
    size: "543.63"
  },
  {
    system: "TDICATTBH1TD05",
    name: "Move data to production",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Succeeded",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "19.23",
    user: "ar183023",
    size: "345.46"
  },
  {
    system: "TDICATTBH1TD01",
    name: "Join data from data lake",
    description: "Script description",
    sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
    status: "Failed",
    start_time: "11/17/2019, 1:40 pm",
    end_time: "blah",
    duration: "10.92",
    user: "ar183023",
    size: "534.34"
  }
];
