import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";
import main from "src/common/styles";
import { Navigation } from "react-native-navigation";

const DEFAULT_IMG = require("../../../assets/img/massage.jpg");

const DealItem = ({ item, componentId }) => {
  const { imgUrl, title = "Service name", discountedPrice = 100, originalPrice = 500, time = "14:00 - 15:00" } = item;

  return (
    <Card>
      <CardItem cardBody button onPress={() => openDetailsPage(item, componentId)}>
        <Image source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} style={main.banner} />
      </CardItem>
      <CardItem>
        <Body>
          <Text style={main.subtitle}>{title}</Text>
          <Text style={main.caption}>
            ${discountedPrice} / ${originalPrice}
          </Text>
          <Text style={main.caption}>{time}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

DealItem.propTypes = {
  item: PropTypes.object,
  componentId: PropTypes.string
};

export default DealItem;

const openDetailsPage = (deal, componentId) => {
  Navigation.push(componentId, {
    component: {
      name: "LastMinuteDeal.SinglePage",
      passProps: {
        deal
      },
      options: {
        topBar: {
          title: {
            text: deal.title
          },
          leftButtons: [
            {
              text: "Back",
              id: "backButton"
            }
          ]
        }
      }
    }
  });
};
