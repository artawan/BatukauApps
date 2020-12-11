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
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: this.props.data,
      dimensions: {
        window,
        screen,
      },
    };
  }

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
          style={{ flex: 1, flexGrow: 1 , justifyContent: "center" }}
        >
          {/* <Text style={styles.sliderTitle}>{item.title}</Text> */}
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
