import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

import { Spinner } from "native-base";
import Deals from "./components/Deals";
import { showModal } from "src/utils/navUtils";
import main from "src/common/styles";
import { openDealPopup, deleteDeal } from "src/common/actions/deals.actions";

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
    // this.getDeals();
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
        <Deals
          deals={items}
          onSelect={this.openDetailsPage}
          onEdit={id => this.onEdit(id)}
          onDelete={id => this.onDelete(id)}
        />
      </ScrollView>
    );
  }

  async getDeals() {
    try {
      const deals = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      await this.setState({ deals: deals.data, loading: false });
    } catch (error) {
      console.error("Get deals failed.", error);
    }
  }

  openDetailsPage = deal => {
    this.props.navigator.push({
      screen: "LastMinuteDeal.CompanySinglePage",
      title: "Deal details",
      backButtonTitle: "Back",
      passProps: deal || {}
    });
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
      }
    });
  };

  onEdit = id => this.props.dispatch(openDealPopup({ id }));

  onDelete = id => this.props.dispatch(deleteDeal(id));
}

DashboardPage.propTypes = {
  navigator: PropTypes.object,
  dispatch: PropTypes.func,
  deals: PropTypes.object
};

export default connect(state => state)(DashboardPage);
