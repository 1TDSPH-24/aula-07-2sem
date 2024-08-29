import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){

  const tituloDaPagina:string = "Minha Página";

  const arrayNomes:string[] = ["Jorge", "Antonio","Roberto"];

  const umObj:{nome:string;idade:number;br:boolean;casado:boolean} ={
    nome: "João",
    idade: 30,
    br: true,
    casado: false
  }

  const{nome,idade,br,casado} = umObj;

  return(
    <div>
      <div>
        <p>Nome: {umObj.nome}</p>
        <p>Idade: {umObj.idade}</p>
        <p>Destructuring</p>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Brasileiro{br}</p>
        <p>Casado {casado}</p>
      </div>
      <Cabecalho tituloProps={tituloDaPagina} arrayProps={arrayNomes}/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}