import { useLinking } from "@react-navigation/native";

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: ['https://app.batukauapp.com', 'batukauapp://'],
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
