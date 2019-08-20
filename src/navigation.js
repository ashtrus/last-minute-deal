import { Navigation } from "react-native-navigation";
import { iconsMap } from "./utils/theme";
import colors from "src/common/colors";

export const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: colors.blue,
      orientation: ["portrait"],
      direction: "locale"
    },
    bottomTabs: {
      titleDisplayMode: "alwaysShow"
    },
    bottomTab: {
      selectedIconColor: colors.blue,
      selectedTextColor: colors.blue
    }
  });

export const startPage = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "LastMinuteDeal.StartPage"
            }
          }
        ]
      },
      options: {
        topBar: {
          visible: false
        }
      }
    }
  });

export const userPage = async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.DashboardPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Last Minute Deal"
                        },
                        leftButtons: [
                          {
                            id: "iconFilter",
                            icon: iconsMap.filter,
                            color: "blue"
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.home,
                  testID: "HomeTab",
                  text: "Home"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.MapPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Map"
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.map,
                  testID: "MapTab",
                  text: "Map"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.ReceiptsPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Receipts"
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.receipt,
                  testID: "ReceiptsTab",
                  text: "Receipts"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.SettingsPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Settings"
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.settings,
                  testID: "SettingsTab",
                  text: "Settings"
                }
              }
            }
          }
        ]
      }
    }
  });
};

export const companyPage = async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.CompanyDashboardPage",
                    options: {
                      topBar: {
                        title: {
                          // TODO: set to user company name
                          text: "Company name"
                        },
                        rightButtons: [
                          {
                            id: "iconAdd",
                            icon: iconsMap.plus,
                            color: "blue"
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.home,
                  testID: "HomeTab",
                  text: "Home"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.ReceiptsPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Receipts"
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.receipt,
                  testID: "ReceiptsTab",
                  text: "Receipts"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "LastMinuteDeal.CompanySettingsPage",
                    options: {
                      topBar: {
                        title: {
                          text: "Settings"
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: iconsMap.receipt,
                  testID: "CompanySettingsPageTab",
                  text: "Settings"
                }
              }
            }
          }
        ]
      }
    }
  });
};
