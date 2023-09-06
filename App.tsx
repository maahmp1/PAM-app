import { SafeAreaView, StatusBar } from "react-native";
import PowerUp from "./PowerUp";
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

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView>
      <PowerUp />
      <StatusBar />
    </SafeAreaView>
  );
}
