import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const DetailScreen = ({ navigation, route }) => {
  const { pelinggih } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {pelinggih ? pelinggih.map((p) => (
          <Card style={styles.Card} key={p.nama}>
            <Image source={ p.images } style={styles.cover}/>
            <Card.Content>
              <Paragraph style={styles.paragraph}>{p.nama}</Paragraph>
              <Paragraph style={styles.paragraph}>{p.keterangan}</Paragraph>
            </Card.Content>
          </Card>
        )) : null}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-start",
    padding: 10,
  },
  Card: {
    width: '100%',
    flex: 1,
    marginBottom: 15,
  },
  cover:{
    flex: 1,
    height: 195,
    resizeMode: "contain",
  },
  paragraph:{
    paddingTop: 5,
  },
  puraContainer:{
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  namaPura: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15,
  }
});
