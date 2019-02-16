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

  // TODO: style it
  render() {
    const { item } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <Row>
          <Image
            styleName="medium rounded-corners"
            source={Boolean(item.imgUri) ? { uri: item.imgUri } : DEFAULT_IMG}
          />
          <View styleName="vertical stretch space-between">
            <Subtitle>{item.title}</Subtitle>
            <View styleName="horizontal space-between">
              <Caption>post author</Caption>
              <Caption>12:16</Caption>
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
