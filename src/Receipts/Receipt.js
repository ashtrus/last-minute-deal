import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";
import main from "src/common/styles";

const DEFAULT_IMG = require("../../assets/img/spa-logo.png");

const Receipt = ({ item: { title, body, imgUrl, discountedPrice = 100, originalPrice = 500 } }) => (
  <Card>
    <CardItem cardBody button onPress={() => {}}>
      <Image source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} style={main.banner} />
    </CardItem>
    <CardItem>
      <Body>
        <Text style={main.subtitle}>{title}</Text>
        <Text style={main.caption}>
          ${discountedPrice} / ${originalPrice}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

Receipt.propTypes = {
  item: PropTypes.object
};

export default Receipt;
