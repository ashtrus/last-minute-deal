import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Caption, Subtitle, Row, Image, View } from "@shoutem/ui";

const DEFAULT_IMG = require("../../../../assets/img/massage.jpg");

class DealItem extends PureComponent {
  onPress = () => {
    const { onSelect, item } = this.props;
    onSelect(item);
  };

  render() {
    const {
      item: {
        imgUrl,
        title = "Service name",
        companyName = "Company name",
        discountedPrice = 100,
        originalPrice = 500,
        time = "14:00 - 15:00",
        address = "Company address"
      }
    } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <Row>
          <Image styleName="medium rounded-corners" source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} />
          <View styleName="vertical stretch">
            <Subtitle>{title}</Subtitle>
            <Caption>{companyName}</Caption>
            <Caption>{address}</Caption>
            <View styleName="horizontal space-between">
              <Caption>
                ${discountedPrice} / ${originalPrice}
              </Caption>
              <Caption>{time}</Caption>
            </View>
          </View>
        </Row>
      </TouchableOpacity>
    );
  }
}

DealItem.propTypes = {
  item: PropTypes.object,
  onSelect: PropTypes.func
};

export default connect(state => state)(DealItem);
