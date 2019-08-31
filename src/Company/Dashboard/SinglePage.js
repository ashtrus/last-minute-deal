import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert, ScrollView, Image, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Container, Content, Row, Grid, Col, Text } from "native-base";
import Button from "src/common/components/Button";
import { deleteDeal } from "src/common/actions/deals.actions";
import main from "src/common/styles";

const DEFAULT_IMG = require("../../../assets/img/massage.jpg");

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
        time = "14:00 - 15:00",
        address = "Branch address",
        discountedPrice = 100,
        originalPrice = 500,
        imgUrl,
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
              <Text style={main.subtitle}>{address}</Text>
              <Text style={main.subtitle}>CVR: {cvr}</Text>
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
          </Content>
        </ScrollView>
      </Container>
    );
  }

  onEdit = () => {
    // this.validateBooking();
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "LastMinuteDeal.AddDealPopup",
              passProps: { deal: this.props.deal, isNew: false },
              options: {
                topBar: {
                  title: {
                    text: "Update deal info"
                  },
                  leftButtons: [
                    {
                      text: "Close",
                      id: "closeAddDeal"
                    }
                  ],
                  rightButtons: [
                    {
                      text: "Save",
                      id: "saveNewDeal"
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    });
  };

  onDelete = () => {
    const {
      dispatch,
      deal: { id },
      componentId
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
            Navigation.pop(componentId);
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

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "backButton") {
      Navigation.pop(this.props.componentId);
    }
  }
}

SinglePage.propTypes = {
  dispatch: PropTypes.func,
  deal: PropTypes.object,
  componentId: PropTypes.string
};

export default connect()(SinglePage);
