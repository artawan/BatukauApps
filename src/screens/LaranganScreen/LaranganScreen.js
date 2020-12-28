import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
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

    const data = datas.data;

    return (
      <ScrollView style={styles.container}>
        <BannerImage source={require('./assets/larangan.jpg')}/>
        <Text style={{marginVertical: 20,}}>Berada ditempat suci sebaiknya kita menjaga sikap dan perilaku kita untuk menghormati pelaksanaan upakara serta untuk menjaga ketertiban umum. Adapun hal-hal yang perlu diperhatikan: </Text>
        <HTML html={data} />
      </ScrollView>
    );
  }
}
