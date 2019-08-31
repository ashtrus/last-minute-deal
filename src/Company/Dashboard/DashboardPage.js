import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Container, Content, Spinner } from "native-base";
import Deals from "./components/Deals";
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
    const {
      componentId,
      deals: { items }
    } = this.props;

    return loading ? (
      <View style={main.containerCenter}>
        <Spinner color="blue" />
      </View>
    ) : (
      <Container>
        <Content padder>
          <ScrollView>
            <Deals deals={items} componentId={componentId} />
          </ScrollView>
        </Content>
      </Container>
    );
  }

  openAddDealPopup = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "LastMinuteDeal.AddDealPopup",
              passProps: { isNew: true },
              options: {
                topBar: {
                  title: {
                    text: "Add new deal"
                  },
                  leftButtons: [
                    {
                      text: "Close",
                      id: "closeAddDeal"
                    }
                  ],
                  rightButtons: [
                    {
                      text: "Save",
                      id: "saveNewDeal"
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
    if (buttonId === "iconAdd") {
      this.openAddDealPopup();
    }
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func,
  deals: PropTypes.object,
  componentId: PropTypes.string
};

export default connect(state => state)(DashboardPage);
