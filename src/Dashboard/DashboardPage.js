import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Container, Content, Spinner, Text } from "native-base";
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
            <Text style={[main.title]}>Categories</Text>
            <Categories />
            <Featured deals={items} componentId={componentId} />
          </ScrollView>
        </Content>
      </Container>
    );
  }

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
  deals: PropTypes.func,
  componentId: PropTypes.string
};

export default connect(state => state)(DashboardPage);
