import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){

    //Mudando o título da página
    document.title = "Página principal";

    //Exemplo de como tipar uma informação!!!
    const tituloDapagina:string = "Minha Página";

    const arrayNomes:string[] = ["Jorge","Antonio","Roberto"];

    const umObj:{nome:string;idade:number;br:boolean;casado:boolean} = {
      nome: "João",
      idade: 30,
      br:true,
      casado:false
    }

    //Aplicando o destructuring
    const{nome,idade,br,casado} = umObj;
    console.log(br);

  return(
    <div>
        <div>
          <p>Nome : {umObj.nome}</p>
          <p>Idade : {umObj.idade}</p>
          <p>DESTRUCTURING</p>
          <p>Nome : {nome}</p>
          <p>Idade : {idade}</p>
        </div>
      <Cabecalho tituloProps={tituloDapagina} arrayProps={arrayNomes}/>
        <Conteudo/>
      <Rodape/>
    </div>
  );
}