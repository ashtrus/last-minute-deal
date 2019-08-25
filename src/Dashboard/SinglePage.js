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
      deal: { title, body, imgUrl }
    } = this.props;

    return (
      <Container>
        <ScrollView>
          <Image style={main.banner} source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} />

          <Content padder>
            <Text style={main.title}>{title}</Text>

            <Row style={{ flex: 1, justifyContent: "space-between", paddingVertical: 20 }}>
              <Text style={main.subtitle}>14d 18:30</Text>
              <Text style={main.subtitle}>100/30</Text>
            </Row>

            <Text style={main.subtitle}>{body}</Text>

            <View style={{ paddingVertical: 20 }}>
              <Text>CVR: 12345678</Text>
              <Text>Street 212 3th København 2300</Text>
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
  deal: PropTypes.objectOf,
  componentId: PropTypes.string
};

export default SinglePage;
