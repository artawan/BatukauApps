import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class UpakaraScreen extends React.Component {
  state = {
    dimensions: {
      window,
      screen,
    },
  };

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onChange);
  }
  render() {
    const { dimensions } = this.state;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
      image:{
        height: 220,
        maxWidth: dimensions.window.width,
        marginBottom: 10,
      },
      title:{
        textAlign: "center",
        marginBottom: 15,
        fontWeight: "600",
      },
      description:{
        marginBottom: 20,
        lineHeight: 20,
      }
    });

    return (
      <ScrollView style={styles.container}>
        <View style={styles.upakaraContainer}>
          <Image style={styles.image} source={require('./assets/upacara_1945.jpg')}/>
          <Text style={styles.title}>Tahun 1945</Text>
          <Text style={styles.description}>Tuhan Yang Maha Esa / Ida Bhatara Sang Hyang Tumuwuh yang bisa disebut Sang Hyang Dewa Mahadewa lunga (melaksanakan) melasti kesegara/kelaut untuk menyucikan seisi alam semesta disebabkan penjajahan jepang pada tahun 1945</Text>
        </View>
        <View style={styles.upakaraContainer}>
          <Image style={styles.image} source={require('./assets/upacara_1963.jpg')}/>
          <Text style={styles.title}>Tahun 1963</Text>
          <Text style={styles.description}>Melaksakan Melasti kesegara/kelaut kembali untuk menyucikan alam semesta sebagai dampak pembantaian G30 SPKI (Gerakan 30 September PKI) pada tahun 1963</Text>
        </View>
        <View style={styles.upakaraContainer}>
          <Image style={styles.image} source={require('./assets/upacara_1993.jpg')}/>
          <Text style={styles.title}>Tahun 1993</Text>
          <Text style={styles.description}>Upacara ngenteg linggih Ida Bhatara Sang Hyang Dewa Mahadewa melasti kesegara/kelaut sebagai dampak pemugaran perbaikan dari semua pelinggih yang telah di perbaiki atau penambahan setiap pelinggih pada tahun 1993</Text>
        </View>
        <View style={styles.upakaraContainer}>
          <Image style={styles.image, {height: 450,}} source={require('./assets/upacara_2006.jpg')}/>
          <Text style={styles.title}>Tahun 2006</Text>
          <Text style={styles.description}>Ida Bhatara  Sang Hyang Dewa Mahadewa ketoya tabah menyucikan alam semesta dampak dari Bom Bali 1, Bom Bali 2, dan Bencana Sunami yang terjadi di Aceh pada tahun 2006</Text>
        </View>
        <View style={styles.upakaraContainer}>
          <Text style={styles.title}>Tahun 2020</Text>
          <Text style={styles.description}>Karya Agung Pengurip Bumi Ida Bhatara  Sang Hyang Dewa Mahadewa melasti kesegara/ kelaut menyucikan alam semesta atas berbagai macam kejadian seperti Gempa Bumi, Gunung Meletus, dan Covid 19</Text>
        </View>
        <View style={styles.upakaraContainer}>
          <Text style={styles.title}>6 Bulan / 210 Hari</Text>
          <Text style={styles.description}>Pura Luhur Batukaru Sad Khyangan Jagat Bali setiap 210 Hari atau bisa dikatakan 6 Bulan sekali, tepat setelah Hari Raya Galungan yaitu Hari Kamis (Wraspati), Umanis, Wuku Dungulan (kalender Bali), satu hari setelah Hari Raya Galungan yaitu Hari Raya Manis Galungan melaksanakan piodalan (upacara), piodalan ini dilaksanakan untuk merayakan hari kelahiran atau awal mula pembentukan dari abad ke-11 Pura Luhur Batukaru dari tahun 1604 yang sempat hancur, hingga kembali dibangun pada tahun 1959. Fungsi dari pelaksanaan upacara piodalan ini bermaksud untuk melindungi bali dari roh-roh jahat. Piodalan dari Pura Luhur Batukaru setiap piodalan besar atau kecil tidak menggunakan pedanda (pendeta) melainkan hanya dipuput (ditutup) oleh Pemangku Jero Kubayan.</Text>
        </View>
      </ScrollView>
    );
  }
}
