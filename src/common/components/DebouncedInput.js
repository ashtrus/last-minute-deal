import React from "react";
import PropTypes from "prop-types";
import { debounce } from "throttle-debounce";
import { Item, Input, Label } from "native-base";

const DebouncedInput = props => (
  <Item floatingLabel>
    <Label>{props.label}</Label>
    <Input {...props} onChangeText={debounce(300, props.onChangeText)} />
  </Item>
);

export default DebouncedInput;

DebouncedInput.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func
};
