import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RectButton, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Slider from "../../components/Slider/Slider";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentOpened: false,
      sliderItem:[
        {
          uri: require("./assets/banner-image.jpg"),
        },
        {
          uri: require("./assets/1.jpg"),
        },
        {
          uri: require("./assets/2.jpg"),
        },
        {
          uri: require("./assets/3.jpg"),
        },
        {
          uri: require("./assets/4.jpg"),
        },
        {
          uri: require("./assets/4.jpg"),
        },
        {
          uri: require("./assets/5.jpg"),
        },
        {
          uri: require("./assets/6.jpg"),
        },
        {
          uri: require("./assets/7.jpg"),
        },
        {
          uri: require("./assets/8.jpg"),
        },
        {
          uri: require("./assets/9.jpg"),
        },
        {
          uri: require("./assets/10.jpg"),
        },
        {
          uri: require("./assets/11.jpg"),
        },
        {
          uri: require("./assets/12.jpg"),
        },
        {
          uri: require("./assets/13.jpg"),
        },
        {
          uri: require("./assets/14.jpg"),
        },
        {
          uri: require("./assets/15.jpg"),
        },
        {
          uri: require("./assets/16.jpg"),
        },
        {
          uri: require("./assets/17.jpg"),
        },
        {
          uri: require("./assets/18.jpg"),
        },
        {
          uri: require("./assets/19.jpg"),
        },
      ],
    };

    this.toggleOpened = this.toggleOpened.bind(this);
  }

  toggleOpened() {
    this.setState((state) => ({ contentOpened: !state.contentOpened }));
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignContent: "flex-end",
        alignItems: "center",
      },
      contentContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#f2f2f2",
        marginTop: -26,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -10 },
        shadowRadius: 15,
        shadowOpacity: 0.24,
      },

      openButton: {
        alignItems: "center",
        marginBottom: 20,
      },

      contentOpened: {
        marginTop: "-40%",
      },

      title: {
        textAlign: "center",
        color: "#0f0f0f",
        fontSize: 24,
        fontWeight: "500",
        letterSpacing: 1,
        marginBottom: 10,
        textTransform: "uppercase",
      },
      lineButton: {
        width: "60%",
        height: 2,
        backgroundColor: "#666",
        borderRadius: 5,
      },
      content:{
        textAlign: "justify",
        lineHeight: 20,
        paddingHorizontal: 15,
      },
      floatingButton:{
        position: "absolute",
        top: 20,
        left: 20,
        width: 35,
        height: 35,
        justifyContent: 'center',
        textAlign:'center',
        alignItems: 'center',
        borderRadius: 18,
        zIndex:1,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.24,
      }
    });
    const {sliderItem} = this.state;

    return (
      <View style={styles.container}>
          <RectButton style={styles.floatingButton}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon
                name="menu"
                size={25}
                color="#000"
                backgroundColor="#fff"
              ></Icon>
          </RectButton>
        <Slider data = {sliderItem} />

        <View
          style={[
            styles.contentContainer,
            this.state.contentOpened ? styles.contentOpened : null,
          ]}
        >
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => this.toggleOpened()}
          >
            <View style={styles.lineButton} />
          </TouchableOpacity>
          <ScrollView>
            <Text style={styles.title}>Pura Luhur Batukaru</Text>
            <Text style={styles.content}>
              Pura Luhur Batukaru adalah pura sebagai tempat memuja Tuhan
              sebagai Dewa Mahadewa. Karena fungsinya untuk memuja Tuhan sebagai
              Dewa yang menumbuhkan tumbuh-tumbuhan dengan mempergunakan air
              secara benar, maka di Pura Luhur Batukaru ini disebut sebagai
              pemujaan Tuhan sebagai Ratu Hyang Tumuwuh—sebutan Tuhan sebagai
              yang menumbuhkan. Pura Luhur Batukaru terletak di Desa Wongaya
              Gede, Kecamatan Penebel, Kabupaten Tabanan. Lokasi pura ini
              terletak di bagian barat Pulau Bali di lereng selatan Gunung
              Batukaru.
            </Text>
            <Text style={styles.content}>
            Pujawali atau Upacara piodalan di pura ini jatuh setiap 210 hari sekali yaitu pada hari Kamis, Wuku Dungulan (kalender Bali), satu hari setelah hari raya Galungan.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
