import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Caption, Subtitle, Row, Image, View } from "@shoutem/ui";

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
            source={{
              uri:
                "https://shoutem.github.io/img/ui-toolkit/examples/image-1.png"
            }}
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
