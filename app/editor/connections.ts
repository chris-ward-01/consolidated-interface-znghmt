export interface Connection {
  value: string;
  viewValue: string;
  user: string;
  active: boolean;
}

export const CONNECTIONS: Connection[] = [
  {
    value: "connections-0",
    viewValue: "vantage_prod",
    user: "Phillip Dominguez",
    active: false
  },
  {
    value: "connections-1",
    viewValue: "vantage_dev",
    user: "dbc",
    active: false
  },
  {
    value: "connections-2",
    viewValue: "vantage_qa",
    user: "qa_user",
    active: false
  }
];
