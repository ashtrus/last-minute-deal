import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import DealItem from "./DealItem";

const Deals = ({ deals, componentId }) => (
  <FlatList
    data={deals.slice(0, 10)}
    renderItem={({ item }) => <DealItem item={item} componentId={componentId} />}
    keyExtractor={item => item.id.toString()}
  />
);

Deals.propTypes = {
  deals: PropTypes.object,
  componentId: PropTypes.string
};

export default Deals;
