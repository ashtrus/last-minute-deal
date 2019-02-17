import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, Text } from "react-native";
import { connect } from "react-redux";

import { Title, Caption, Image, Subtitle, Row, View } from "@shoutem/ui";
import { Grid, Col } from "native-base";
import Button from "src/common/components/Button";
import { showModal } from "src/utils/navUtils";
import { deleteDeal } from "src/common/actions/deals.actions";

const DEFAULT_IMG = require("../../../assets/img/massage.jpg");

class SinglePage extends PureComponent {
  render() {
    const {
      currentDeal: {
        title,
        description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, doloremque. Delectus quis inventore consequatur ex ut praesentium maxime cupiditate aliquid iure culpa repudiandae totam provident quisquam nisi, quaerat eaque dolores.`,
        time = "14:00 - 15:00",
        address = "Branch address",
        discountedPrice = 100,
        originalPrice = 500,
        imgUrl
      }
    } = this.props;

    return (
      <ScrollView>
        <Image styleName="large-banner" source={Boolean(imgUrl) ? { uri: imgUrl } : DEFAULT_IMG} />

        <View style={{ padding: 10 }}>
          <Title>{title}</Title>

          <Row>
            <View styleName="horizontal space-between">
              <Caption>{time}</Caption>
              <Caption>
                ${discountedPrice} / ${originalPrice}
              </Caption>
            </View>
          </Row>

          <Text>{description}</Text>

          <View style={{ paddingVertical: 20 }}>
            <Subtitle>{address}</Subtitle>
          </View>

          <Grid>
            <Col>
              <Button btnStyle={{ borderColor: "red" }} txtStyle={{ color: "red" }} onPress={this.onDelete}>
                Delete
              </Button>
            </Col>
            <Col>
              <Button onPress={this.onEdit}>Edit</Button>
            </Col>
          </Grid>
        </View>
      </ScrollView>
    );
  }

  onEdit = () => {
    // this.validateBooking();

    showModal("AddDealPopup", {
      title: "Update deal info",
      navigatorButtons: {
        leftButtons: [{ title: "Close", id: "closeAddDeal" }],
        rightButtons: [{ title: "Save", id: "saveNewDeal" }]
      },
      props: { deal: this.props.currentDeal, isNew: false }
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
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
}

SinglePage.propTypes = { navigator: PropTypes.func, dispatch: PropTypes.func, currentDeal: PropTypes.func };

export default connect(state => state)(SinglePage);
