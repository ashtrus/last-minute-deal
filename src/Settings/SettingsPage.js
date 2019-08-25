import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import { Button } from "src/common/components";
import GeneralSection from "./GeneralSection";
import ContactSection from "./ContactSection";
import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import main from "src/common/styles";

const DEFAULT_IMG = require("../../assets/img/user.png");

const SettingsPage = ({ dispatch, componentId }) => (
  <Container>
    <Content>
      <Card>
        <CardItem button onPress={() => openUserProfile(componentId)}>
          <Body>
            <Image style={[main.avatar, { alignSelf: "center" }]} source={DEFAULT_IMG} />
            <Text style={{ alignSelf: "center" }}>User profile</Text>
          </Body>
        </CardItem>
      </Card>
      <GeneralSection />
      <ContactSection />
      <Button onPress={() => dispatch(changeRoot(ROOTS.AUTH))}>Logout</Button>
    </Content>
  </Container>
);

const openUserProfile = componentId => {
  Navigation.push(componentId, {
    component: {
      name: "LastMinuteDeal.UserProfilePage",
      passProps: {},
      options: {
        topBar: {
          title: {
            text: "User Profile"
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

SettingsPage.propTypes = {
  dispatch: PropTypes.func,
  componentId: PropTypes.string
};

export default connect()(SettingsPage);
