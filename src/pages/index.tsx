import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, ScrollView, } from "react-native";
import Top from "./components/Topo";
import Details from "./components/Details";

const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return (
    <>
    <ScrollView>
      <Top/>

      <View style={styles.carrinho}>
      <Details/>

      </View>
      </ScrollView>
    </>

  );
}
const styles = StyleSheet.create({

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,

  },

});
