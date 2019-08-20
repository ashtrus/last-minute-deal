import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Slider } from "react-native";
import { connect } from "react-redux";
import { dismissModal } from "src/utils/navUtils";
import { Navigation } from "react-native-navigation";

import { Caption, Divider } from "@shoutem/ui";

class FiltersPopup extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = { sliderValue: 10 };
  }

  saveFilters() {
    dismissModal(this.props);
  }

  onSliderValueChange = value => {
    this.setState({ sliderValue: value });
  };

  render() {
    const { sliderValue } = this.state;
    return (
      // prettier-ignore
      <ScrollView>
        <Divider styleName="section-header">
          <Caption>Distance</Caption>
          <Caption>{sliderValue} km</Caption>
        </Divider>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={this.onSliderValueChange}
        />
      </ScrollView>
    );
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "closeFilters") {
      dismissModal(this.props);
    } else if (buttonId === "saveFilters") {
      this.saveFilters();
    }
  }
}

FiltersPopup.propTypes = {};

export default connect(state => state)(FiltersPopup);
