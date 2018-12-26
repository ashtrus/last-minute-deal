import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import colors from "src/common/colors";

const Divider = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

export default Divider;

Divider.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
