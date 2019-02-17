import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import uuid from "uuid";
import { Form, Input, Item, Label } from "native-base";

import { dismissModal } from "src/utils/navUtils";
import { createDeal } from "src/common/actions/deals.actions";
import { updateCurrentDeal } from "src/common/actions/currentDeal.actions";

class AddDealPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { deal: props.deal || {} };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
      deal: { title, description, imgUrl, time, address, discountedPrice, originalPrice }
    } = this.state;

    return (
      // prettier-ignore
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input 
              value={title}
              onChangeText={title => this.onChange('title', title)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Description</Label>
            <Input 
              value={description}
              onChangeText={description => this.onChange('description', description)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Image url</Label>
            <Input 
              value={imgUrl}
              onChangeText={imgUrl => this.onChange('imgUrl', imgUrl)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Branch Address</Label>
            <Input 
              value={address}
              onChangeText={address => this.onChange('address', address)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Time slot</Label>
            <Input 
              value={time}
              onChangeText={time => this.onChange('time', time)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Discounted price</Label>
            <Input 
              value={discountedPrice}
              keyboardType={"numeric"} 
              onChangeText={discountedPrice => this.onChange('discountedPrice', discountedPrice)} 
            />
          </Item>

          <Item floatingLabel>
            <Label>Original price</Label>
            <Input 
              value={originalPrice} 
              keyboardType={"numeric"} 
              onChangeText={originalPrice => this.onChange('originalPrice', originalPrice)}
            />
          </Item>
        </Form>
      </View>
    );
  }

  onChange = (key, value) =>
    this.setState({
      deal: { ...this.state.deal, [key]: value }
    });

  save = () => {
    const { dispatch, isNew } = this.props;
    const deal = { ...this.state.deal, id: uuid() };

    // prettier-ignore
    isNew
      ? dispatch(createDeal(deal))
      : dispatch(updateCurrentDeal(this.state.deal));
    dismissModal();
  };
}

AddDealPopup.propTypes = {
  navigator: PropTypes.func,
  dispatch: PropTypes.func,
  deal: PropTypes.obj,
  isNew: PropTypes.bool
};

export default connect(state => state)(AddDealPopup);
