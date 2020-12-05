export interface CodeNode {
  name: string;
  children?: CodeNode[];
  default?: boolean;
}

export const TREE_DATA: CodeNode[] = [
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "qa_testData",
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      },
      {
        name: "finance_folder",
        children: [
          {
            name: "finance_yearly",
            children: [
              {
                name: "finance_2015",
                children: [
                  {
                    name: "finance_2015_q1",
                    children: [
                      {
                        name: "finance_2015_jan",
                        children: [
                          {
                            name: "finance_2015_jan_emea",
                            children: [
                              {
                                name: "finance_2015_jan_london",
                                children: [
                                  { name: "finance_2015_jan_london_brits" },
                                  { name: "finance_2015_jan_london_blokes" },
                                  { name: "finance_2015_jan_london_football" },
                                  { name: "finance_2015_jan_london_jewels" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "development_database",
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      },
      {
        name: "finance_folder",
        children: [
          {
            name: "finance_yearly",
            children: [
              {
                name: "finance_2015",
                children: [
                  {
                    name: "finance_2015_q1",
                    children: [
                      {
                        name: "finance_2015_jan",
                        children: [
                          {
                            name: "finance_2015_jan_emea",
                            children: [
                              {
                                name: "finance_2015_jan_london",
                                children: [
                                  { name: "finance_2015_jan_london_brits" },
                                  { name: "finance_2015_jan_london_blokes" },
                                  { name: "finance_2015_jan_london_football" },
                                  { name: "finance_2015_jan_london_jewels" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "SO183034",
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      },
      {
        name: "finance_folder",
        children: [
          {
            name: "finance_yearly",
            children: [
              {
                name: "finance_2015",
                children: [
                  {
                    name: "finance_2015_q1",
                    children: [
                      {
                        name: "finance_2015_jan",
                        children: [
                          {
                            name: "finance_2015_jan_emea",
                            children: [
                              {
                                name: "finance_2015_jan_london",
                                children: [
                                  { name: "finance_2015_jan_london_brits" },
                                  { name: "finance_2015_jan_london_blokes" },
                                  { name: "finance_2015_jan_london_football" },
                                  { name: "finance_2015_jan_london_jewels" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  },
  {
    name: "finance_data",
    default: true,
    children: [
      {
        name: "ux_folder",
        children: [
          {
            name: "ux_yearly"
          }
        ]
      }
    ]
  }
];
