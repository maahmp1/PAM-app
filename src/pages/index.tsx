import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, ScrollView, } from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import carrinho from "../mocks/props";

const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return <>
    <ScrollView>
      <Topo titulo={carrinho.topo.nome} />

      <View style={styles.carrinho}>
        <Detalhes 
        preco={carrinho.detalhes.preco}
        descricao={carrinho.detalhes.descricao}
        botao={carrinho.detalhes.botao}
        nome={carrinho.topo.nome}
        />
        
      </View>
    </ScrollView>
  </>
}
const styles = StyleSheet.create({

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

});
