import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, FlatList } from "react-native";
import { connect } from "react-redux";
import { loadReceipts } from "src/common/actions/receipts.actions";

import commonStyles from "src/common/styles";
import { Divider } from "src/common/components";
import Receipt from "./Receipt";

class ReceiptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usedReceipts: [
        {
          id: 1,
          imgUrl: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          title: "Family Safari Vacation To The Home Of The Gods",
          discountedPrice: 120,
          originalPrice: 150
        },
        {
          id: 2,
          imgUrl: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          title: "Family Safari Vacation To The Home Of The Gods",
          discountedPrice: 120,
          originalPrice: 150
        },
        {
          id: 3,
          imgUrl: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          title: "Family Safari Vacation To The Home Of The Gods",
          discountedPrice: 120,
          originalPrice: 150
        }
      ]
    };
  }

  componentDidMount() {
    try {
      this.props.dispatch(loadReceipts());
    } catch (error) {
      console.error("Get deals failed.", error);
    }
  }

  render() {
    const { usedReceipts } = this.state;
    const {
      receipts: { items }
    } = this.props;

    return (
      // prettier-ignore
      <ScrollView style={commonStyles.container}>
        <Divider text="Available" />
        <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

        <Divider text="Used" />
        <FlatList
          data={usedReceipts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </ScrollView>
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => <Receipt item={item} />;
}

ReceiptsPage.propTypes = {
  navigator: PropTypes.object,
  dispatch: PropTypes.func,
  receipts: PropTypes.object
};

export default connect(state => state)(ReceiptsPage);
