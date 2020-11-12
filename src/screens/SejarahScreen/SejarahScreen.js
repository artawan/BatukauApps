import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";

import HTML from "react-native-render-html";

import * as sejarah from "../../data/sejarah.json";

export default class SejarahScreen extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
      content:{
        lineHeight: 20,
        textAlign: 'justify',
      },
    });
    const data = sejarah.data;
    return (
      <ScrollView style={styles.container}>
        <HTML html={data} style={styles.content} />
      </ScrollView>
    );
  }
}
