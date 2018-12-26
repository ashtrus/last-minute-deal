import React, { Component } from "react";
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
        <GeneralSection />
        <ContactSection />
        <Divider />
        <Button onPress={this.onLogout}>Logout</Button>
      </View>
    );
  }

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

export default connect(state => state)(SettingsPage);
