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
  shouldComponentUpdate(nextProps){
    if (nextProps.route !== this.props.route) { 
      return true; 
    } else { 
      return false; 
    } 
  }
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
    const tagsStyles = { p: styles.content, ul: styles.listStyle, ol:styles.listStyle, u:{fontWeight: 'bold'}, li: {lineHeight: 22} }
    const data = sejarah.data;
    const customRender = {
      img1: ()=> <Image key='img1' source={require('./assets/sejarah12.jpg')} style={styles.imageStyle} />,
      img2: ()=> <Image key='img2' source={require('./assets/sejarah7.jpg')} style={styles.imageStyle} />,
      img3: ()=> <Image key='img3' source={require('./assets/sejarah13.jpg')} style={styles.imageStyle} />,
      img4: ()=> <Image key='img4' source={require('./assets/sejarah2.jpg')} style={styles.imageStyle} />,
      img5: ()=> <Image key='img5' source={require('./assets/sejarah14.jpg')} style={styles.imageStyle} />,
      img6: ()=> <Image key='img6' source={require('./assets/sejarah6.jpg')} style={styles.imageStyle} />,
      img7: ()=> <Image key='img7' source={require('./assets/sejarah4.jpg')} style={styles.imageStyle} />,
      img9: ()=> <Image key='img9' source={require('./assets/sejarah8.jpg')} style={styles.imageStyle} />,
      img10: ()=> <Image key='img10' source={require('./assets/sejarah1.jpg')} style={styles.imageStyle} />,
      img11: ()=> <Image key='img11' source={require('./assets/sejarah10.jpg')} style={styles.imageStyle} />,
      img12: ()=> <Image key='img12' source={require('./assets/sejarah9.jpg')} style={styles.imageStyle} />,
      img13: ()=> <Image key='img13' source={require('./assets/sejarah5.jpg')} style={styles.imageStyle} />,
      img14: ()=> <Image key='img14' source={require('./assets/sejarah3.jpg')} style={styles.imageStyle} />,
    }

    return (
      <ScrollView style={{flex: 1, padding: 10,}}>
        <HTML html={data} tagsStyles={tagsStyles} renderers={ customRender } />
      </ScrollView>
    );
  }
}
