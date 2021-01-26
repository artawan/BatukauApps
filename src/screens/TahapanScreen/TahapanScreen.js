import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import HTML from "react-native-render-html";
import ImageViewer from "react-native-image-zoom-viewer";

import * as tahapanPersembahyangan from "../../data/tahapan-persembahyangan.json";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const TahapanScreen = (props) => {
  const dimensionState = {
      window,
      screen,
    };
  const [dimension, setDimension] = React.useState(dimensionState);

  const onChange = ({ window, screen }) => {
    setDimension({ window, screen });
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    }
  }, [])
  
  const images = [{ url:"", props:{source: require('./assets/banner-image.jpg')} },];
  const data = tahapanPersembahyangan.data;

  return (
    <ScrollView>
      <View style={{height: dimension.window.height, padding: 5, marginBottom: 25,}}>
        <ImageViewer
        imageUrls={images} renderIndicator={() => null} />
      </View>
      <HTML html={data}/>
    </ScrollView>
  );
}

export default TahapanScreen;