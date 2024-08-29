export default function Cabecalho({tituloProps,arrayProps}:{tituloProps:string,arrayProps:string[]}){
    return(
        <header>
            <h1>Cabeçalho</h1>
            <h2>{tituloProps}</h2>
            <div>
                {arrayProps.map((item, index) => {
                    return <p key={index}>Nome {index+1}: {item}</p>
                    })}
            </div>
        </header>
    );
}