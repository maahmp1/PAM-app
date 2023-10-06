import wheyMax from "../../assets/wheyMax.png";
import colagenoo from "../../assets/colagenoo.png";
import micellar from "../../assets/micellar.png";
import isowhey from "../../assets/isowhey.png";
import wheyrefil from "../../assets/wheyrefil.png";

const props = {
  topo: {
    nome: "Detalhes do Carrinho",
  },
  detalhes: {
    descricao: "Creatina Importada 150g - Max Titanium",
    preco: "R$40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens do Carrinho",
    lista: [
      {
        nome: "Whey Refil",
        imagem: wheyrefil,
      },
      {
        nome: "Iso Whey",
        imagem: isowhey,
      },
      {
        nome: "Micellar",
        imagem: micellar,
      },
      {
        nome: "Colágeno",
        imagem: colagenoo,
      },
      {
        nome: "Whey Max",
        imagem: wheyMax,
      },
    ],
  },
};

export default props;
