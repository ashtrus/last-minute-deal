import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, View, Image } from "react-native";
import { Navigation } from "react-native-navigation";
import { Container, Content, Row, Text } from "native-base";
import Button from "src/common/components/Button";
import main from "src/common/styles";

const DEFAULT_IMG = require("../../assets/img/massage.jpg");

class SinglePage extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    const {
      deal: {
        title,
        body,
        imgUrl,
        time = "14:00 - 15:00",
        address = "Street 212 3th København 2300",
        discountedPrice = 100,
        originalPrice = 500,
        cvr = 12345678
      }
    } = this.props;

    return (
      <Container>
        <ScrollView>
          <Image style={main.banner} source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} />

          <Content padder>
            <Text style={main.title}>{title}</Text>

            <Row style={{ flex: 1, justifyContent: "space-between", paddingVertical: 20 }}>
              <Text style={main.caption}>{time}</Text>
              <Text style={main.caption}>
                ${discountedPrice} / ${originalPrice}
              </Text>
            </Row>

            <Text style={main.subtitle}>{body}</Text>

            <View style={{ paddingVertical: 20 }}>
              <Text>CVR: {cvr}</Text>
              <Text>{address}</Text>
            </View>

            <Button onPress={this.onBook}>Book</Button>
          </Content>
        </ScrollView>
      </Container>
    );
  }

  onBook = () => {
    this.validateBooking();
  };

  validateBooking = () => {
    Alert.alert(
      "Book appointment",
      "Are you sure",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "backButton") {
      Navigation.pop(this.props.componentId);
    }
  }
}

SinglePage.propTypes = {
  deal: PropTypes.object,
  componentId: PropTypes.string
};

export default SinglePage;
