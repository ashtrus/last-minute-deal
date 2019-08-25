import React from "react";
import { List, ListItem, Icon, Body, Right, Text } from "native-base";
import { Divider } from "src/common/components";

const GeneralSection = () => (
  <List>
    <Divider text="General" />

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>Notifications</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>How it works?</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>Join Last Minute Deal</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
);

export default GeneralSection;
