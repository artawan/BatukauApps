import * as React from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Asset } from "expo-asset";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class Slider extends React.Component {
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        uri: Asset.fromModule(require("./assets/banner-image.jpg")).uri,
        title: "Home Page",
        text: "Welcome to My Application",
      },
      {
        uri: Asset.fromModule(require("./assets/1.jpg")).uri,
        title: "Chats",
      },
      {
        uri: Asset.fromModule(require("./assets/2.jpg")).uri,
        title: "Calls",
      },
      {
        uri: Asset.fromModule(require("./assets/3.jpg")).uri,
        title: "Gallery",
      },
      {
        uri: Asset.fromModule(require("./assets/4.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/4.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/5.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/6.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/7.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/8.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/9.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/10.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/11.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/12.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/13.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/14.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/15.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/16.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/17.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/18.jpg")).uri,
        title: "Settings",
      },
      {
        uri: Asset.fromModule(require("./assets/19.jpg")).uri,
        title: "Settings",
      },
    ],
    dimensions: {
      window,
      screen,
    },
  };

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onChange);
    setInterval(() => {
      this.setState({ selectedIndex: (this.state.selectedIndex + 1) % 5 });
    }, 1000);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onChange);
  }

  _renderItem({ item, index }) {
    const styles = StyleSheet.create({
      sliderTitle: { fontSize: 20, color: "#fff", paddingLeft: 15},
    });

    return (
      <View
        style={{backgroundColor: "#000",
        flex: 1,
        width: "100%",}}
      >
        <ImageBackground
          source={item.uri}
          style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        >
          <Text style={styles.sliderTitle}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  }
  render() {
    const { dimensions } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          selectedIndex={this.state.activeIndex}
          autoplay
          infinite
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={dimensions.window.width}
          itemWidth={dimensions.window.width}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
