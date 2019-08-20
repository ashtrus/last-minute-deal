import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import { Form, Input, Item, Label } from "native-base";
import { Button } from "src/common/components";

import { updateCompanyProfile } from "src/common/actions/settings.actions";
class CompanyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyProfile: props.settings.companyProfile
    };
    Navigation.events().bindComponent(this);
  }

  render() {
    const {
      companyProfile: { address, email, name, phone }
    } = this.state;

    return (
      // prettier-ignore
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Company Name</Label>
            <Input
              value={name}
              onChangeText={this.onChangeName} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Address</Label>
            <Input 
              value={address}
              onChangeText={this.onChangeAddress}
            />
          </Item>

          <Item floatingLabel>
            <Label>Phone</Label>
            <Input
              value={phone}
              keyboardType={"numeric"}
              onChangeText={this.onChangePhone}
            />
          </Item>

          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={email}
              keyboardType={"email-address"}
              onChangeText={this.onChangeEmail}
            />
          </Item>
        </Form>

        <Button onPress={this.updateCompanyProfile}>Save</Button>
      </View>
    );
  }

  onChangeName = name =>
    this.setState({
      companyProfile: { ...this.state.companyProfile, name }
    });

  onChangeAddress = address =>
    this.setState({
      companyProfile: { ...this.state.companyProfile, address }
    });

  onChangePhone = phone =>
    this.setState({
      companyProfile: { ...this.state.companyProfile, phone }
    });

  onChangeEmail = email =>
    this.setState({
      companyProfile: { ...this.state.companyProfile, email }
    });

  updateCompanyProfile = async () => {
    await this.props.dispatch(updateCompanyProfile(this.state.companyProfile));
    Navigation.pop(this.props.componentId);
  };

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "backButton") {
      Navigation.pop(this.props.componentId);
    }
  }
}

CompanyDetailsPage.propTypes = {
  dispatch: PropTypes.func,
  settings: PropTypes.func
};

export default connect(state => state)(CompanyDetailsPage);
