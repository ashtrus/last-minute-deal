import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ScrollView, FlatList } from "react-native";
import { Container, Content } from "native-base";
import { Divider } from "src/common/components";
import Receipt from "./Receipt";
import commonStyles from "src/common/styles";
import { loadReceipts } from "src/common/actions/receipts.actions";

class ReceiptsPage extends Component {
  componentDidMount() {
    try {
      this.props.dispatch(loadReceipts());
    } catch (error) {
      console.error("Get receipts failed.", error);
    }
  }

  render() {
    const {
      receipts: { items }
    } = this.props;
    const availableReceipts = items.slice(0, 2);
    const usedReceipts = items.slice(2, 10);

    return (
      <Container>
        <ScrollView style={commonStyles.container}>
          <Content padder>
            <Divider text="Available" />
            <FlatList data={availableReceipts} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />

            <Divider text="Used" />
            <FlatList data={usedReceipts} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
          </Content>
        </ScrollView>
      </Container>
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => <Receipt item={item} />;
}

ReceiptsPage.propTypes = {
  dispatch: PropTypes.func,
  receipts: PropTypes.object
};

export default connect(state => state)(ReceiptsPage);
