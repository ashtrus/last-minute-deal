import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

import { Icon, Caption, Image, Subtitle, Row, Button, View } from "@shoutem/ui";

class Receipt extends Component {
  render() {
    const {
      item: {
        imgUrl = "https://cdn.logojoy.com/wp-content/uploads/2018/05/30160104/1145.png",
        title,
        discountedPrice = 100,
        originalPrice = 500
      }
    } = this.props;

    return (
      <TouchableOpacity onPress={() => console.log("### item pressed")}>
        <Row>
          <Image styleName="small rounded-corners" source={{ uri: imgUrl }} />
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
