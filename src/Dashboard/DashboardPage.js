import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import { Spinner } from "native-base";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import main from "src/common/styles";

import { loadDeals } from "src/common/actions/deals.actions";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    try {
      this.props.dispatch(loadDeals());
      this.setState({ loading: false });
    } catch (error) {
      console.error("Get deals failed.", error);
    }
  }

  render() {
    const { loading } = this.state;
    const { deals } = this.props;

    return loading ? (
      <View style={main.containerCenter}>
        <Spinner color="blue" />
      </View>
    ) : (
      <ScrollView>
        <Categories />
        <Featured deals={deals} onSelect={this.openDetailsPage} />
      </ScrollView>
    );
  }

  openDetailsPage = deal => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "LastMinuteDeal.SinglePage",
        passProps: {
          deal
        },
        options: {
          topBar: {
            title: {
              text: deal.title
            },
            leftButtons: [
              {
                text: "Back",
                id: "backButton"
              }
            ]
          }
        }
      }
    });
  };

  openFiltersPopup = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "LastMinuteDeal.FiltersPopup",
              options: {
                topBar: {
                  title: {
                    text: "Filters"
                  },
                  leftButtons: [
                    {
                      text: "Close",
                      id: "closeFilters"
                    }
                  ],
                  rightButtons: [
                    {
                      text: "Save",
                      id: "saveFilters"
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    });
  };

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "iconFilter") {
      this.openFiltersPopup();
    }
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func,
  deals: PropTypes.func
};

export default connect(state => state)(DashboardPage);
