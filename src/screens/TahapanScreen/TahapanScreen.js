import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HTML from "react-native-render-html";

import BannerImage from "../../components/BannerImage/BannerImage";
import * as tahapanPersembahyangan from "../../data/tahapan-persembahyangan.json";

export default class TahapanScreen extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
    });

    const data = tahapanPersembahyangan.data;

    return (
      <ScrollView style={styles.container}>
        <BannerImage source={require("./assets/banner-image.jpg")}/>
        <HTML html={data} />
      </ScrollView>
    );
  }
}
