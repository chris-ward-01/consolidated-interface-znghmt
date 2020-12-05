export interface CodeNode {
  name: string;
  children?: CodeNode[];
  default?: boolean;
}

export const TREE: CodeNode[] = [
  {
    name: "ADLAPJ_TECH_SUMMIT_01",
    default: true,
    children: [
      {
        name: "ASSOC_CLASS_HIST_CUR_VW_ACC_OUTPUT",
        children: [
          {
            name: "ASSOC_CLASS_HIST_CUR_VW_COUNT_OUTPUT"
          }
        ]
      }
    ]
  },
  {
    name: "ACC_MKTG_CNTMK_VW",
    children: [
      {
        name: "cntmk_buyersjourney_acs_vw",
        children: [
          {
            name: "cntmk_buyersjourney_acs_data"
          }
        ]
      },
      {
        name: "cntmk_dgtl_asset_access_hist",
        children: [
          {
            name: "cntmk_dgtl_asset_bus_outcome_hist",
            children: [
              {
                name: "cntmk_dgtl_asset_event_download_vw",
                children: [
                  {
                    name: "cntmk_dgtl_asset_event_pageviewed_acs_vw",
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
    name: "IDWClaraviewsales",
    children: [
      {
        name: "mm_donuts_vw",
        children: [
          {
            name: "obase_temp"
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
    name: "ACC_TED_VW",
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
    name: "dwtools",
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
    name: "mdm_edw_sub",
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
    name: "PUBLIC_VW",
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
    name: "QUICKLOOK",
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
    name: "tdwm",
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
    name: "TRNG_AustinBikShare",
    default: true,
    children: [
      {
        name: "stations",
        children: [
          {
            name: "trips"
          }
        ]
      }
    ]
  },
  {
    name: "TRNG_AustinBikeShare",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_BustOutFrau",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  },
  {
    name: "TRNG_DS",
    children: [
      {
        name: "stations",
      }
    ]
  }
];
