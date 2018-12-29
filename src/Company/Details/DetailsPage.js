import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { Form, Item, Input, Label } from "native-base";

class CompanyDetailsPage extends Component {
  render() {
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Company name</Label>
            <Input onChangeText={this.onChange} />
          </Item>

          <Item floatingLabel last>
            <Label>Address</Label>
            <Input onChangeText={this.onChange} />
          </Item>

          <Item floatingLabel last>
            <Label>Phone</Label>
            <Input keyboardType={"numeric"} onChangeText={this.onChange} />
          </Item>

          <Item floatingLabel last>
            <Label>Email</Label>
            <Input
              keyboardType={"email-address"}
              onChangeText={this.onChange}
            />
          </Item>
        </Form>
      </View>
    );
  }

  onChange = data => {
    console.log("### data changed", data);
  };
}

export default connect(state => state)(CompanyDetailsPage);
