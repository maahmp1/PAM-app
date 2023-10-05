import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, ScrollView, } from "react-native";
import Topo from "./components/Topo";
import Details from "./components/Details";
import carrinho from "../mocks/carrinho";

const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return <>
      <Topo titulo={carrinho.topo.nome}/>

      <View style={styles.carrinho}>
      <Details/>

      </View>
    </>
}
const styles = StyleSheet.create({

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,

  },

});
