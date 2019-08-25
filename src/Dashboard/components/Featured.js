import React from "react";
import { FlatList } from "react-native";
import { Text } from "native-base";
import PropTypes from "prop-types";
import DealItem from "./DealItem";
import main from "src/common/styles";

const Featured = ({ deals, componentId }) => (
  <FlatList
    data={deals.slice(0, 5)}
    renderItem={({ item }) => <DealItem item={item} componentId={componentId} />}
    keyExtractor={item => item.id.toString()}
    ListHeaderComponent={<Text style={main.title}>Featured</Text>}
  />
);

Featured.propTypes = {
  deals: PropTypes.array,
  componentId: PropTypes.string
};

export default Featured;
