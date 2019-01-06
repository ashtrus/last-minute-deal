import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../colors";

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.btnStyle]}>
    <Text style={[styles.buttonTextStyle, props.txtStyle]}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;

Button.propTypes = {
  onPress: PropTypes.func,
  btnStyle: PropTypes.func,
  txtStyle: PropTypes.func,
  children: PropTypes.any
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.white,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.blue
  },
  buttonTextStyle: {
    alignSelf: "center",
    color: colors.blue,
    fontSize: 16,
    fontWeight: "400",
    padding: 10
  }
});
