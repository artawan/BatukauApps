import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import Profile from "./profile.jpg";

class ProfileScreen extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
      },
      avatarContainer: {
        marginTop: 10,
        marginBottom: 15,
      },
      avatar: {
        alignSelf: "center",
      },

      // Text component style
      nama: {
        fontSize: 20,
        marginBottom: 20,
      },
      nim: {
        marginBottom: 15,
      },
      prodi: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 15,
      },
      content: {
        paddingHorizontal: 15,
      },
      contentTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
        paddingTop: 25,
      },
      contentDescription: {
        textAlign: 'left',
      },
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar.Image source={Profile} size={150} style={styles.avatar} />
          </View>
          <Text style={{ textAlign: "center", lineHeight: 25 }}>
            <Text style={styles.nama}>I Putu Mega Putra Parayana{"\n"}</Text>
            <Text style={styles.nim}>1304505035{"\n"}</Text>
            <Text style={styles.prodi}>
            {"\n"} Program Studi Teknologi Informasi {"\n"}
              Fakultas Teknik {"\n"}
              Universitas Udayana{"\n"}
            </Text>
              <Text style={styles.contentTitle}>
              {"\n"} Sistem Informasi Pura Luhur Batukaru {"\n"} Berbasis Android {"\n"}
              </Text>
              <Text style={styles.contentDescription}>
                Perkembangan Teknologi Informasi yang begitu pesat dan dengan
                kebutuhan manusia yang terus meningkat maka perlu diciptakan
                suatu terobosan baru yang dimana dapat memudahkan setiap
                penggunanya memperoleh informasi yang mudah dan cepat. Salah
                satu terobosan tersebut yakni memciptakan suatu aplikasi “Pura
                luhur batukaru” yang dalam aplikasi ini memperkenalkan secara
                mendetail Pura Luhur Batukaru. Dengan demikian Aplikasi ini
                diharapkan mampu memberikan gambaran dan tambahan pengetahuan
                masyarakat dan pemerintah tentang Pura Sad Kahyangan Jagat Bali
                Luhur Batukaru dengan Catur Angga.
              </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default ProfileScreen;
