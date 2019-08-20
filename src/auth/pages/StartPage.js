import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { Image } from "@shoutem/ui";
import { Button, Text } from "native-base";
import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import main from "src/common/styles";
import colors from "src/common/colors";

const StartPage = ({ dispatch }) =>
  // prettier-ignore
  <View style={[main.pageContainer]}>
    <View style={main.containerCenter}>
      <Image
        styleName="medium-square"
        source={ require('../../../assets/img/app-logo.png') }
      />
    </View>

    <View style={main.containerBottom}>
      <Button
        full
        style={[styles.btnFacebook]}
        onPress={() => dispatch(changeRoot(ROOTS.MAIN_APP))}
      >
        <Text>Login with Facebook</Text>
      </Button>

      <Button
        full
        style={[styles.btnGoogle]}
        onPress={() => dispatch(changeRoot(ROOTS.MAIN_APP))}
      >
        <Text>Login with Google</Text>
      </Button>

      <Button
        full
        bordered
        style={styles.btnBusinessLogin}
        onPress={() => dispatch(changeRoot(ROOTS.MAIN_APP_COMPANY))}
      >
        <Text primary>Business Login</Text>
      </Button>
    </View>
  </View>;

StartPage.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(StartPage);

const styles = StyleSheet.create({
  btnFacebook: {
    backgroundColor: colors.blue,
    borderWidth: 0,
    width: 280,
    margin: 5
  },
  btnGoogle: {
    backgroundColor: colors.red,
    borderWidth: 0,
    width: 280,
    margin: 5
  },
  btnBusinessLogin: {
    width: 280,
    margin: 5,
    marginTop: 50
  }
});
