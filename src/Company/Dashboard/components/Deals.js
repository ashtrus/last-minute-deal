import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import { View } from "@shoutem/ui";
import DealItem from "./DealItem";

class Deals extends Component {
  render() {
    const {
      deals: { items }
    } = this.props;

    return (
      <View>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => (
    <DealItem item={item} onSelect={this.props.onSelect} />
  );
}

Deals.propTypes = {
  deals: PropTypes.array,
  onOpen: PropTypes.func,
  onSelect: PropTypes.func
};

export default connect(state => state)(Deals);
