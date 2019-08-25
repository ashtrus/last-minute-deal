import React from "react";
import PropTypes from "prop-types";
import { ListItem, Text } from "native-base";

const Divider = ({ text }) => (
  <ListItem itemDivider>
    <Text>{text}</Text>
  </ListItem>
);

export default Divider;

Divider.propTypes = {
  text: PropTypes.string
};
