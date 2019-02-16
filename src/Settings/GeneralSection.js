import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import { Icon, Image, Row, View } from "@shoutem/ui";
import { Divider } from "src/common/components";
import main from "src/common/styles";

const DEFAULT_IMG = require("../../assets/img/user.png");

class GeneralSection extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View>
        <Divider text="General" />

        <TouchableOpacity onPress={onPress}>
          <Row>
            <Image styleName="small-avatar" source={DEFAULT_IMG} />
            <Text>User profile</Text>
          </Row>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Notifications</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>How it works</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Join Last Minute Deal</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

GeneralSection.propTypes = {
  onPress: PropTypes.func
};

export default GeneralSection;
