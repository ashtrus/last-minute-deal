import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

import { Spinner } from "native-base";
import Deals from "./components/Deals";
import { showModal } from "src/utils/navUtils";
import main from "src/common/styles";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deals: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          userId: 1,
          id: 4,
          title: "eum et est occaecati",
          body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          userId: 1,
          id: 5,
          title: "nesciunt quas odio",
          body:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          userId: 1,
          id: 6,
          title: "dolorem eum magni eos aperiam quia",
          body:
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          userId: 1,
          id: 7,
          title: "magnam facilis autem",
          body:
            "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          userId: 1,
          id: 8,
          title: "dolorem dolore est ipsam",
          body:
            "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        }
      ],
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
    const { loading, deals } = this.state;

    return Boolean(loading) ? (
      <View style={main.containerCenter}>
        <Spinner color="blue" />
      </View>
    ) : (
      <ScrollView>
        <Deals deals={deals} onSelect={this.openDetailsPage} />
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
}

DashboardPage.propTypes = {
  navigator: PropTypes.object
};

export default connect(state => state)(DashboardPage);
