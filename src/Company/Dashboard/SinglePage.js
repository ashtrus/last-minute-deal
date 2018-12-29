import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";

import { Title, Caption, Image, Subtitle, Row } from "@shoutem/ui";
import Button from "src/common/components/Button";

class SinglePage extends PureComponent {
  render() {
    const { title, body } = this.props;
    return (
      <ScrollView>
        <Image
          styleName="large-banner"
          source={{
            uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-5.png"
          }}
        />

        <View style={{ padding: 10 }}>
          <Title>{title}</Title>

          <Row>
            <Caption>14d 18:30</Caption>
            <Caption>100/30</Caption>
          </Row>

          <Text>{body}</Text>
          <Text>{body}</Text>

          <View style={{ paddingVertical: 20 }}>
            <Subtitle>CVR: 12345678</Subtitle>
            <Subtitle>Street 212 3th København 2300</Subtitle>
          </View>

          <Button onPress={this.onEdit}>Edit</Button>
          <Button onPress={this.onDelete}>Delete</Button>
        </View>
      </ScrollView>
    );
  }

  onEdit = () => {
    this.validateBooking();
  };

  onDelete = () => {
    console.log("Deleted. Go back to the list");
  };

  validateBooking = () => {
    Alert.alert(
      "Edit appointment",
      "Are you sure",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
}

SinglePage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default connect(state => state)(SinglePage);
