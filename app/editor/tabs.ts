export interface Tab {
  name: string;
  isSaved: boolean;
  closed: boolean;
  isRunning: boolean;
  id: number;
}

export const TABS: Tab[] = [
  {
    id: 1,
    name: "telco revenue",
    isSaved: false,
    closed: false,
    isRunning: false
  },
  {
    id: 2,
    name: "covid cases",
    isSaved: false,
    closed: false,
    isRunning: false
  },
  {
    id: 3,
    name: "oil & gas analysis",
    isSaved: true,
    closed: false,
    isRunning: false
  },
  {
    id: 4,
    name: "s3 object storage",
    isSaved: true,
    closed: false,
    isRunning: false
  }
];

export const TABS_DEEP_COPY = () => JSON.parse(JSON.stringify(TABS));
