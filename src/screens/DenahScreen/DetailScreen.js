import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

class DetailScreen extends React.Component{
  shouldComponentUpdate(nextProps){
    if (nextProps.route !== this.props.route) { 
      return true; 
    } else { 
      return false; 
    } 
  }
  render(){
    const { pelinggih } = this.props.route.params;
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
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
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
    return (
      <ScrollView>
        <View style={styles.container}>
          {pelinggih ? pelinggih.map((p) => (
            <Card key={p.nama} style={styles.Card}>
              <View style={{height: 190, }}>
              <Image
              style={styles.cover}
              source={p.images} 
              ></Image>
              </View>
              <Card.Content>
                <Paragraph style={styles.paragraph}>{p.nama}</Paragraph>
                <Paragraph style={styles.paragraph}>{p.keterangan}</Paragraph>
              </Card.Content>
            </Card>
          )) : null}
        </View>
      </ScrollView>
    );
  }
};

export default DetailScreen;