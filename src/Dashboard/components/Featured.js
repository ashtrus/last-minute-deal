import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import { Title, View } from "@shoutem/ui";
import DealItem from "./DealItem";

class Featured extends Component {
  render() {
    const { deals } = this.props;
    return (
      // prettier-ignore
      <View>
        <FlatList
          data={deals}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={
            <Title style={{ paddingLeft: 20, paddingVertical: 10 }}>
              Featured
            </Title>
          }
        />
      </View>
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => <DealItem item={item} onSelect={this.props.onSelect} />;
}

Featured.propTypes = {
  deals: PropTypes.array,
  onOpen: PropTypes.func,
  onSelect: PropTypes.func
};

export default connect(state => state)(Featured);
