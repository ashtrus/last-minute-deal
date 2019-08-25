import React from "react";
import { FlatList, Image } from "react-native";
import { Body, Text, Card, CardItem } from "native-base";
import main from "src/common/styles";
import { CATEGORIES } from "src/common/placeholders";

const Categories = () => (
  <FlatList
    horizontal
    data={CATEGORIES}
    renderItem={({ item: { title, url } }) => (
      <Card>
        <CardItem button onPress={() => {}}>
          <Body>
            <Image source={url} style={main.thumbnail} />
            <Text style={[main.caption, main.center, { alignSelf: "center" }]}>{title}</Text>
          </Body>
        </CardItem>
      </Card>
    )}
    keyExtractor={category => category.id.toString()}
  />
);

export default Categories;
