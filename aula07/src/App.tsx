import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";


export default function App(){

    //mudando otitulo da página
    document.title = "Página principal";

    //exemplo de como tipar uma informação!!!
    const tituloDaPagina:string = "Minha página";

    const arrayNomes:string[] = ["Jorge", "Antonio", "Roberto"]

    const umObj:{nome:string;idade:number;br:boolean;casado:boolean} = {
      nome: "João", 
      idade: 30,
      br:true,
      casado:false
    }

    //aplicando o destructuring
    const{nome, idade, br, casado} = umObj;

  return(
    <div>
      <p>Nome: {umObj.nome}</p>
      <p>Idade: {umObj.idade}</p>
      <p>DESTRUCTURING</p>
      <p>Nome : {nome}</p>
      <p>Idade : {idade}</p>
      <Cabecalho tituloProps={tituloDaPagina} arrayProps={arrayNomes}/>
        <Conteudo/>
      <Rodape/>
    </div>
  )
}