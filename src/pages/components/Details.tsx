import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import Card from "../../shared/card";
import wheyMax from "../../assets/wheyMax.png";
import creatine from "../../assets/creatine.png";

export default function Details() {
  return (
    <>
      <ScrollView>
        <View style={styles.carrinho}>
          <Text style={styles.nome}>Carrinho de Compras</Text>
          <Card>
            <View style={styles.teste}>
              <View style={styles.produto}>
                <Image style={styles.logo} source={creatine}></Image>
                <Text style={styles.descricao}>
                  Creatina Importada 150g - Max Titanium
                </Text>
                <Text style={styles.preco2}>R$40,00</Text>
              </View>
            </View>
          </Card>

          <Card>
            <View style={styles.teste}>
              <View style={styles.produto}>
                <Image style={styles.logo} source={wheyMax}></Image>
                <Text style={styles.descricao}>
                  100% Whey Protein 900g - Max Titanium{" "}
                </Text>
                <Text style={styles.preco}>R$80,00</Text>
              </View>
            </View>
          </Card>
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

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "FBold",
    textAlign: "center",
    marginBottom: 10,
  },

  teste: {
    flexDirection: "row",
  },

  produto: {
    paddingVertical: 12,
    textAlign: "center",
  },

  logo: {
    //produto que aparece no carrinho
    margin: 15,
    marginTop: "0%",
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    left: 110,
  },

  nomeProduto: {
    fontSize: 16,
    fontFamily: "FBold",
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontFamily: "FRegular",
    textAlign: "center",
  },
  // descricao2: {
  //   color: "#A3A3A3",
  //   fontFamily: "FRegular",
  //   marginLeft: 20,
  //   textAlign: "center",
  // },

  preco: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
  },
  preco2: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    textAlign: "center",
  },
});
