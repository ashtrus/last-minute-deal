import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";

import { Form, Input, Item, Label } from "native-base";

import { dismissModal } from "src/utils/navUtils";
import { createDeal } from "src/common/actions/deals.actions";
class AddDealPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: props.deal || {}
    };
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    switch (event.id) {
      case "saveNewDeal":
        this.save();
      case "closeAddDeal":
        dismissModal();
      default:
        return;
    }
  };

  render() {
    const {
      deal: { title, imgUrl, discountedPrice, originalPrice }
    } = this.state;

    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input value={title} onChangeText={this.onChangeTitle} />
          </Item>

          <Item floatingLabel>
            <Label>Image url</Label>
            <Input value={imgUrl} onChangeText={this.onChangeImage} />
          </Item>

          <Item floatingLabel>
            <Label>Discounted price</Label>
            <Input
              value={discountedPrice}
              keyboardType={"numeric"}
              onChangeText={this.onChangeDiscountedPrice}
            />
          </Item>

          <Item floatingLabel>
            <Label>Original price</Label>
            <Input
              value={originalPrice}
              keyboardType={"numeric"}
              onChangeText={this.onChangeOriginalPrice}
            />
          </Item>
        </Form>
      </View>
    );
  }

  onChangeTitle = title =>
    this.setState({
      deal: { ...this.state.deal, title }
    });

  onChangeAddress = imgUrl =>
    this.setState({
      deal: { ...this.state.deal, imgUrl }
    });

  onChangeDiscountedPrice = discountedPrice =>
    this.setState({
      deal: { ...this.state.deal, discountedPrice }
    });

  onChangeOriginalPrice = originalPrice =>
    this.setState({
      deal: { ...this.state.deal, originalPrice }
    });

  save = () => {
    this.props.dispatch(createDeal(this.state.deal));
    dismissModal();
  };
}

AddDealPopup.propTypes = {
  navigator: PropTypes.func,
  dispatch: PropTypes.func,
  deal: PropTypes.obj
};

export default connect(state => state)(AddDealPopup);
