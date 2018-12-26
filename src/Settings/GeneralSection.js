import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

import { Icon, Image, Row, View } from "@shoutem/ui";
import { Divider } from "src/common/components";
import main from "src/common/styles";

class GeneralSection extends Component {
  render() {
    return (
      <View>
        <Divider text="General" />

        <TouchableOpacity>
          <Row>
            <Image
              styleName="small-avatar"
              source={{
                uri:
                  "https://shoutem.github.io/img/ui-toolkit/examples/image-9.png"
              }}
            />
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

export default GeneralSection;
