import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";

import { Spinner } from "native-base";
import Deals from "./components/Deals";
import { showModal } from "src/utils/navUtils";
import main from "src/common/styles";
import { loadDeals } from "src/common/actions/deals.actions";
import { openDealPage } from "src/common/actions/currentDeal.actions";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO: set to true when real data used
      loading: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    try {
      this.props.dispatch(loadDeals());
    } catch (error) {
      console.error("Get deals failed.", error);
    }
  }

  onNavigatorEvent = event => {
    if (event.id === "iconAdd") {
      this.openAddDealPopup();
    }
  };

  render() {
    const { loading } = this.state;
    const {
      deals: { items }
    } = this.props;

    return Boolean(loading) ? (
      <View style={main.containerCenter}>
        <Spinner color="blue" />
      </View>
    ) : (
      <ScrollView>
        <Deals deals={items} onSelect={this.openDetailsPage} />
      </ScrollView>
    );
  }

  openDetailsPage = deal => {
    this.props.dispatch(openDealPage(deal, this.props.navigator));
  };

  openAddDealPopup = () => {
    showModal("AddDealPopup", {
      title: "Add new deal",
      navigatorButtons: {
        leftButtons: [
          {
            title: "Close",
            id: "closeAddDeal"
          }
        ],
        rightButtons: [
          {
            title: "Save",
            id: "saveNewDeal"
          }
        ]
      },
      props: { isNew: true }
    });
  };
}

DashboardPage.propTypes = {
  navigator: PropTypes.object,
  dispatch: PropTypes.func,
  deals: PropTypes.object
};

export default connect(state => state)(DashboardPage);
