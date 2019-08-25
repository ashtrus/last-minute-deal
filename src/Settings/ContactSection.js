import React from "react";
import { List, ListItem, Icon, Body, Right, Text } from "native-base";
import { Divider } from "src/common/components";

const ContactSection = () => (
  <List>
    <Divider text="Contact" />

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>Contact us</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>Find us on Facebook</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>

    <ListItem icon button onPress={() => {}}>
      <Body>
        <Text>Follow us on Instagram</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
);

export default ContactSection;
