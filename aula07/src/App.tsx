import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){

    //Mudando o título da página
    document.title = "Página principal";

    //Exemplo de como tipar uma informação!!!
    const tituloDapagina:string = "Minha Página";

    const arrayNomes:string[] = ["jorge","morte","benio","vitor"]

    const umObj:{nome:string;idade:number;br:boolean;casado:boolean} = {
      nome: "João",
      idade: 30,
      br:true,
      casado:false
    }

    // aplicando decruturing 
    const {nome,idade,br,casado} = umObj;


  return(
    <div>
        <div>
          <p>Nome : {umObj.nome}</p>
          <p>Idade : {umObj.idade}</p>
          <p>DESTRUCTURING</p>
          <p>nome: {nome}</p>
          <p>idade: {idade}</p>
          <p>brasileiro: {br}</p>
          <p>casado: {casado}</p>
        </div>
      <Cabecalho tituloProps={tituloDapagina}/>
        <Conteudo/>
      <Rodape/>
    </div>
  );
}