import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { List, ListItem, Left, Body, Text } from "native-base";
import main from "src/common/styles";
import { Navigation } from "react-native-navigation";

const DEFAULT_IMG = require("../../../../assets/img/massage.jpg");

const DealItem = ({ item, componentId }) => {
  const {
    imgUrl,
    title = "Service name",
    companyName = "Branch name / Employee",
    discountedPrice = 100,
    originalPrice = 500,
    time = "14:00 - 15:00",
    address = "Branch address"
  } = item;

  return (
    <List>
      <ListItem
        thumbnail
        button
        onPress={() => openDetailsPage(item, componentId)}
        style={{ flex: 1, justifyContent: "flex-start", alignSelf: "flex-start" }}
      >
        <Left>
          <Image
            square
            source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG}
            style={[main.thumbnail, { marginLeft: -20 }]}
          />
        </Left>
        <Body>
          <Text style={main.subtitle}>{title}</Text>
          <Text style={main.caption}>{address}</Text>
          <Text style={main.caption}>{companyName}</Text>
          <Text style={main.caption}>{time}</Text>
          <Text style={main.caption}>
            ${discountedPrice} / ${originalPrice}
          </Text>
        </Body>
      </ListItem>
    </List>
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
      name: "LastMinuteDeal.CompanySinglePage",
      passProps: {
        deal
      },
      options: {
        topBar: {
          title: {
            text: "Deal details"
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
