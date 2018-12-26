import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    this.props.navigator.push({
      screen: "LastMinuteDeal.UserProfilePage",
      title: "User Profile",
      backButtonTitle: "Back"
      // passProps: data || {}
    });
  };

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

SettingsPage.propTypes = {
  navigator: PropTypes.object
};

export default connect(state => state)(SettingsPage);
