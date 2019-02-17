import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";

import { Spinner } from "native-base";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import { showModal } from "src/utils/navUtils";
import main from "src/common/styles";

import { loadDeals } from "src/common/actions/deals.actions";
import { openDealPage } from "src/common/actions/currentDeal.actions";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    try {
      this.props.dispatch(loadDeals());
      this.setState({ loading: false });
    } catch (error) {
      console.error("Get deals failed.", error);
    }
  }

  onNavigatorEvent = event => {
    if (event.id === "iconFilter") {
      this.openFiltersPopup();
    }
  };

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
    this.props.navigator.push({
      screen: "LastMinuteDeal.SinglePage",
      title: deal.title,
      backButtonTitle: "Back",
      passProps: deal || {}
    });
  };

  openFiltersPopup = () => {
    showModal("FiltersPopup", {
      title: "Filters",
      navigatorButtons: {
        leftButtons: [
          {
            title: "Close",
            id: "closeFilters"
          }
        ],
        rightButtons: [
          {
            title: "Save",
            id: "saveFilters"
          }
        ]
      }
    });
  };
}

DashboardPage.propTypes = {
  navigator: PropTypes.object,
  dispatch: PropTypes.func,
  deals: PropTypes.func
};

export default connect(state => state)(DashboardPage);
