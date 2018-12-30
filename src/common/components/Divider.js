import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { ListItem } from "native-base";

const Divider = props => (
  <ListItem itemDivider>
    <Text>{props.text}</Text>
  </ListItem>
);

export default Divider;

Divider.propTypes = {
  text: PropTypes.string
};
