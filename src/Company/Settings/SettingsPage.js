import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import { Button, Divider } from "src/common/components";
import { Icon, Switch, View } from "@shoutem/ui";
import main from "src/common/styles";

import { updateNotification } from "src/common/actions/settings.actions";
class SettingsPage extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    const {
      settings: {
        notifications: { enabled }
      }
    } = this.props;

    return (
      <View>
        <TouchableOpacity style={main.listItem} onPress={this.openCompanyProfile}>
          <View styleName="space-between horizontal">
            <Text>Company details</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Notify about new bookings</Text>
            <Switch onValueChange={this.onNotificationsChange} value={enabled} />
          </View>
        </TouchableOpacity>

        <Divider />

        <Button onPress={this.onLogout}>Logout</Button>
      </View>
    );
  }

  openCompanyProfile = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "LastMinuteDeal.CompanyDetailsPage",
        passProps: {},
        options: {
          topBar: {
            title: {
              text: "Company profile"
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

  onNotificationsChange = val => {
    this.props.dispatch(updateNotification(val));
  };

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func,
  settings: PropTypes.object
};

export default connect(state => state)(SettingsPage);
