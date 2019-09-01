import { Navigation } from "react-native-navigation";
import { iconsMap } from "./utils/theme";
import colors from "src/common/colors";

export const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    statusBar: {
      visible: false
    },
    layout: {
      direction: "ltr",
      backgroundColor: "white",
      orientation: ["portrait", "landscape"]
    },
    modalPresentationStyle: "overCurrentContext", // Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext', 'currentContext', 'popover', 'fullScreen' and 'none'. On Android, only overCurrentContext and none are supported.
    topBar: {
      visible: true,
      animate: false,
      hideOnScroll: false,
      leftButtonColor: colors.white,
      rightButtonColor: colors.white,
      drawBehind: false,
      testID: "topBar",
      title: {
        fontSize: 16,
        color: colors.white,
        fontFamily: "Helvetica",
        component: {
          // name: "example.CustomTopBarTitle",
          alignment: "center"
        }
      },
      subtitle: {
        fontSize: 14,
        color: colors.white,
        fontFamily: "Helvetica",
        alignment: "center"
      },
      backButton: {
        visible: true
      },
      background: {
        color: colors.primary,
        component: {
          // name: "example.CustomTopBarBackground"
        }
      }
    },
    bottomTabs: {
      visible: true,
      animate: false,
      testID: "bottomTabsBar",
      drawBehind: false,
      backgroundColor: colors.lightGray
    },
    bottomTab: {
      badgeColor: colors.red,
      dotIndicator: {
        color: colors.red,
        size: 8
      },
      testID: "bottomTab",
      iconColor: colors.gray,
      selectedIconColor: colors.primary,
      textColor: colors.darkGray,
      selectedTextColor: colors.primary,
      fontFamily: "Helvetica",
      fontSize: 10
    },

    overlay: {
      interceptTouchOutside: true,
      handleKeyboardEvents: true
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
                            color: colors.white
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
                  icon: iconsMap.location,
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
                            color: colors.white
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
                  icon: iconsMap.settings,
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
