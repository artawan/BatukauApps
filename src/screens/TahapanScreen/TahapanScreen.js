import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import HTML from "react-native-render-html";

import * as tahapanPersembahyangan from "../../data/tahapan-persembahyangan.json";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
class TahapanScreen extends React.Component {
  state = {
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
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onChange);
  }
  render() {    
    const { dimensions } = this.state;
    const data = tahapanPersembahyangan.data;

    return (
      <ScrollView style={styles.container}>
        <Image
            source={require("./assets/banner-image.jpg")}
            style={
              (styles.denahImage, { height: dimensions.screen.height + 20, width: dimensions.screen.width })
            }
          />
        <HTML html={data}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  denahImage:{
    marginBottom: 25,
  },
});

export default TahapanScreen;