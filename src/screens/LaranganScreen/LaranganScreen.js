import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HTML from "react-native-render-html";

import BannerImage from "../../components/BannerImage/BannerImage";
import * as datas from "../../data/larangan-pura-batukaru.json";

export default class LaranganScreen extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
    });

    const larangan = datas.data;

    return (
      <ScrollView style={styles.container}>
        <BannerImage source={require('./assets/larangan.jpg')}/>
        <HTML html={larangan} />
      </ScrollView>
    );
  }
}
