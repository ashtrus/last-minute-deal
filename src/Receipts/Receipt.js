import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

import { Icon, Caption, Image, Subtitle, Row, Button, View } from "@shoutem/ui";

const DEFAULT_IMG = require("../../assets/img/spa-logo.png");

class Receipt extends Component {
  render() {
    const {
      item: { imgUrl, title, discountedPrice = 100, originalPrice = 500 }
    } = this.props;

    return (
      <TouchableOpacity onPress={() => console.log("### item pressed")}>
        <Row>
          <Image styleName="small rounded-corners" source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} />
          <View styleName="vertical stretch space-between">
            <Subtitle>{title}</Subtitle>
            <View styleName="horizontal">
              <Subtitle styleName="md-gutter-right">${discountedPrice}</Subtitle>
              <Caption styleName="line-through">${originalPrice}</Caption>
            </View>
          </View>
          <Button styleName="right-icon">
            <Icon name="add-to-cart" />
          </Button>
        </Row>
      </TouchableOpacity>
    );
  }
}

Receipt.propTypes = {
  item: PropTypes.object
};

export default Receipt;
