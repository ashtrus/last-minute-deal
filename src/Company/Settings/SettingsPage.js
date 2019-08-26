import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Container, Content, Body, List, ListItem, Right, Icon, Switch } from "native-base";
import { Button, Divider } from "src/common/components";
import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
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
      <Container>
        <Content padder>
          <List>
            <ListItem icon>
              <Body>
                <TouchableOpacity onPress={this.openCompanyProfile}>
                  <Text>Company details</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Body>
                <TouchableOpacity onPress={() => {}}>
                  <Text>Notify about new bookings</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Switch onValueChange={this.onNotificationsChange} value={enabled} />
              </Right>
            </ListItem>

            <Divider />

            <Button onPress={this.onLogout}>Logout</Button>
          </List>
        </Content>
      </Container>
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
    await this.props.dispatch(changeRoot(ROOTS.AUTH));
  };
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func,
  settings: PropTypes.object,
  componentId: PropTypes.string
};

export default connect(state => state)(SettingsPage);
