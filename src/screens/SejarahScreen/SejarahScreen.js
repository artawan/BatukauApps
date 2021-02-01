import React from "react";
import {
  ScrollView,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";

import HTML from "react-native-render-html";

import * as sejarah from "../../data/sejarah.json";

export default class SejarahScreen extends React.Component {
  render() {
    const styles = StyleSheet.create({
      imageStyle:{
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: 250,
        marginVertical: 10,
        resizeMode: 'contain',
        justifyContent: 'center',
      },
      content: { textAlign: 'justify', lineHeight: 20},
      listStyle: { textAlign: 'justify', lineHeight: 20, paddingLeft: 0, paddingTop: 10},
    });
    const tagsStyles = { p: styles.content, ul: styles.listStyle, ol:styles.listStyle, u:{fontWeight: 700}, li: {lineHeight: 22} }
    const data = sejarah.data;
    const customRender = {
      img1: ()=> <Image source={require('./assets/sejarah12.jpg')} style={styles.imageStyle} />,
      img2: ()=> <Image source={require('./assets/sejarah7.jpg')} style={styles.imageStyle} />,
      img3: ()=> <Image source={require('./assets/sejarah13.jpg')} style={styles.imageStyle} />,
      img4: ()=> <Image source={require('./assets/sejarah2.jpg')} style={styles.imageStyle} />,
      img5: ()=> <Image source={require('./assets/sejarah14.jpg')} style={styles.imageStyle} />,
      img6: ()=> <Image source={require('./assets/sejarah6.jpg')} style={styles.imageStyle} />,
      img7: ()=> <Image source={require('./assets/sejarah4.jpg')} style={styles.imageStyle} />,
      img9: ()=> <Image source={require('./assets/sejarah8.jpg')} style={styles.imageStyle} />,
      img10: ()=> <Image source={require('./assets/sejarah1.jpg')} style={styles.imageStyle} />,
      img11: ()=> <Image source={require('./assets/sejarah10.jpg')} style={styles.imageStyle} />,
      img12: ()=> <Image source={require('./assets/sejarah9.jpg')} style={styles.imageStyle} />,
      img13: ()=> <Image source={require('./assets/sejarah5.jpg')} style={styles.imageStyle} />,
      img14: ()=> <Image source={require('./assets/sejarah3.jpg')} style={styles.imageStyle} />,
    }

    return (
      <ScrollView style={{flex: 1, padding: 10,}}>
        <HTML html={data} tagsStyles={tagsStyles} renderers={ customRender } />
      </ScrollView>
    );
  }
}
