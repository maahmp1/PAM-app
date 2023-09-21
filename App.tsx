import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import PowerUp from "./pages";
import React from "react";
import {
  useFonts,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
} from "@expo-google-fonts/fredoka";

export default function App() {
  const [fonteCarregada] = useFonts({
    FRegular: Fredoka_400Regular,
    FMedium: Fredoka_500Medium,
    FBold: Fredoka_600SemiBold,
  });

  const styles = StyleSheet.create({

    safeAreaView:{
      flex: 1,
      backgroundColor:"#D4D4D4"
    }
    
})


if (!fonteCarregada) {
  return null;
}

return (
  <SafeAreaView style={styles.safeAreaView}>
    <PowerUp />
    <StatusBar />
  </SafeAreaView>
);
}
