import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// import { debounce } from "throttle-debounce";

import { Form } from "native-base";
import { DebouncedInput } from "src/common/components";
class CompanyDetailsPage extends Component {
  render() {
    return (
      <View>
        <Form>
          <DebouncedInput label={"Company Name"} onChangeText={this.onChange} />

          <DebouncedInput label={"Address"} onChangeText={this.onChange} />

          <DebouncedInput
            label={"Phone"}
            keyboardType={"numeric"}
            onChangeText={this.onChange}
          />

          <DebouncedInput
            label={"Email"}
            keyboardType={"email-address"}
            onChangeText={this.onChange}
          />
        </Form>
      </View>
    );
  }

  onChange = data => {
    console.log("### data changed", data);
  };
}

export default connect(state => state)(CompanyDetailsPage);
