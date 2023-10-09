import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import logo from "../../../assets/logo.png";

const width = Dimensions.get("screen").width;

type Props = {
  titulo: string
}

export default function Top({ titulo }: Props) {
  return (
    <>
      <Image source={logo} style={styles.topo} />
      <Text style={styles.titulo}>{titulo}</Text>
    </>  
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16,
  }
}
);
