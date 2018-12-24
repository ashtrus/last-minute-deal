import React, { Component } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Title, Image, View } from "@shoutem/ui";
import main from "src/common/styles";

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          userId: 1,
          id: 4,
          title: "eum et est occaecati",
          body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
      ]
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <View>
        <Title style={main.title}>Categories</Title>
        <FlatList
          horizontal
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  onSelect = category => {
    console.log("Category selected", category);
  };

  keyExtractor = item => item.id.toString();

  renderItem = () => (
    <TouchableOpacity onPress={this.onSelect}>
      <Image
        styleName="medium"
        style={{ marginLeft: 10 }}
        source={{
          uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png"
        }}
      />
    </TouchableOpacity>
  );
}
