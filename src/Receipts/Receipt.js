import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

import { Icon, Caption, Image, Subtitle, Row, Button, View } from "@shoutem/ui";

class Receipt extends Component {
  render() {
    const {
      item: { imgUrl, title, discountedPrice, originalPrice }
    } = this.props;

    return (
      <TouchableOpacity>
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
