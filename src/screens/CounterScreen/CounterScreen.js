import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class CounterScreen extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: this.props.color.name == "red" ? "#fff" : "#000",
        alignItems: "center",
        justifyContent: "center",
      },
    });

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20, color: this.props.color.hexCode }}>
              Increase
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: this.props.color.name == "red" ? "#000" : "#fff",
            }}
          >
            {" "}
            {this.props.counter}{" "}
          </Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text
              style={{
                fontSize: 20,
                color: this.props.color.name == "red" ? "#000" : "#fff",
              }}
            >
              Decrease
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("profile", { name: "Jane" })
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: this.props.color.name == "red" ? "#000" : "#fff",
            }}
          >
            Goto Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>this.props.navigation.toggleDrawer()}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Open Drawer
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.Counter.counter,
  };
}

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (counter) => dispatch(increaseCounter(counter)),
  decreaseCounter: (counter) => dispatch(decreaseCounter(counter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
