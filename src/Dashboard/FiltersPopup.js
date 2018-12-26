import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Slider } from "react-native";
import { connect } from "react-redux";
import { dismissModal } from "src/utils/navUtils";

import { Caption, Divider } from "@shoutem/ui";

class FiltersPopup extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = { sliderValue: 10 };
  }

  onNavigatorEvent = event => {
    switch (event.id) {
      case "saveFilters":
        this.saveFilters();
      case "closeFilters":
        dismissModal();
      default:
        return;
    }
  };

  saveFilters() {
    dismissModal();
  }

  onSliderValueChange = value => {
    this.setState({ sliderValue: value });
  };

  render() {
    const { sliderValue } = this.state;
    return (
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
}

FiltersPopup.propTypes = {
  navigator: PropTypes.func
};

export default connect(state => state)(FiltersPopup);
