import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";

import { Title, Caption, Image, Subtitle, Row } from "@shoutem/ui";
import Button from "src/common/components/Button";
import { showModal } from "src/utils/navUtils";
import { deleteDeal } from "src/common/actions/deals.actions";

class SinglePage extends PureComponent {
  render() {
    const {
      currentDeal: { title }
    } = this.props;

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

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, doloremque. Delectus quis inventore consequatur ex ut
            praesentium maxime cupiditate aliquid iure culpa repudiandae totam
            provident quisquam nisi, quaerat eaque dolores.
          </Text>

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
    // this.validateBooking();

    showModal("AddDealPopup", {
      title: "Update deal info",
      navigatorButtons: {
        leftButtons: [
          {
            title: "Close",
            id: "closeAddDeal"
          }
        ],
        rightButtons: [
          {
            title: "Save",
            id: "saveNewDeal"
          }
        ]
      },
      props: {
        deal: this.props.currentDeal,
        isNew: false
      }
    });
  };

  onDelete = () => {
    const {
      dispatch,
      navigator,
      currentDeal: { id }
    } = this.props;

    Alert.alert(
      "Delete deal",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteDeal(id));
            navigator.pop();
          }
        }
      ],
      { cancelable: false }
    );
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
  navigator: PropTypes.obj,
  dispatch: PropTypes.func,
  currentDeal: PropTypes.obj
};

export default connect(state => state)(SinglePage);
