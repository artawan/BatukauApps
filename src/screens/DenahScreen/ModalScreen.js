import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const window = Dimensions.get("window");

const ModalScreen = ({ route }) => {
  const { image, keterangan } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={image} style={{width: window.width}} />
        <Text>{keterangan}</Text>
      </View>
    </ScrollView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-start",
    padding: 10,
  },
  Card: {
    width: "100%",
    flex: 1,
    marginBottom: 15,
  },
  paragraph: {
    paddingTop: 5,
  },
});
