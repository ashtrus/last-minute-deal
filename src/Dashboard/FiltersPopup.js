import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { dismissModal } from "src/utils/navUtils";
import { Navigation } from "react-native-navigation";
import { Container, Content, ListItem, Text } from "native-base";

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
      <Container>
        <ScrollView>
          <Content padder>
            <ListItem itemDivider>
              <Text>Distance</Text>
              <Text>{sliderValue} km</Text>
            </ListItem>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={sliderValue}
              step={1}
              onValueChange={this.onSliderValueChange}
            />
          </Content>
        </ScrollView>
      </Container>
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

export default FiltersPopup;
