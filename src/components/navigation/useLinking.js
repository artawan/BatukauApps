import { useLinking } from "@react-navigation/native";
import * as Linking from 'expo-linking'

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Root: "HomeScreen",
          HomeScreen: "HomeScreen",
          ProfileScreen: "ProfileScreen",
          SejarahScreen: "SejarahScreen",
          DenahScreen: "DenahScreen",
          TahapanScreen: "TahapanScreen",
          LaranganScreen: "LaranganScreen",
          UpakaraScreen: "UpakaraScreen",
        },
      },
    },
  });
}
