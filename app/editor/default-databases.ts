export interface DefaultDatabase {
  value: string;
  viewValue: string;
  user: string;
  active: boolean;
}

export const DEFAULTDB: DefaultDatabase[] = [
  {
    value: "db-0",
    viewValue: "finance_prod_db",
    user: "session default",
    active: false
  },
  {
    value: "db-1",
    viewValue: "qa_testData",
    user: "script default",
    active: false
  },
  {
    value: "db-2",
    viewValue: "development_database",
    user: "query default",
    active: false
  }
];
