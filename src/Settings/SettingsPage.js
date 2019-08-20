import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import { Button, Divider } from "src/common/components";
import { View } from "@shoutem/ui";
import GeneralSection from "./GeneralSection";
import ContactSection from "./ContactSection";

class SettingsPage extends Component {
  render() {
    return (
      <View>
        <GeneralSection onPress={this.openUserProfile} />
        <ContactSection />
        <Divider />
        <Button onPress={this.onLogout}>Logout</Button>
      </View>
    );
  }

  openUserProfile = () => {
    Navigation.push(this.props.componentId, {
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

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

SettingsPage.propTypes = {};

export default connect(state => state)(SettingsPage);
