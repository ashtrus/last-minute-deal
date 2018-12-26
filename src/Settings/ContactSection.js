import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

import { Icon, View } from "@shoutem/ui";
import { Divider } from "src/common/components";
import main from "src/common/styles";

class GeneralSection extends Component {
  render() {
    return (
      <View>
        <Divider text="Contact" />

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Contact us</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Find us on Facebook</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Follow us on Instagram</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GeneralSection;
