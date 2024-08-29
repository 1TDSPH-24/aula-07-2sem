type Pessoa = {
    id: number;
    nome: string;
    idade: number;
}

export default function Conteudo({arrayObjProps}:{arrayObjProps:Pessoa[]}){
    return (
        <main>
            <h2>Aqui fica todo o conteúdo!!</h2>
            <p>Este é um parágrafo de teste</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi reiciendis nesciunt inventore libero explicabo tempora veritatis deserunt deleniti facilis atque, ut rerum a accusantium illum esse dolores aspernatur porro delectus non? Ducimus, magni iste provident iure iusto possimus hic qui officia quam ex doloribus culpa non cumque praesentium vel.</p>

                <div>
                    { arrayObjProps.map((obj)=>(
                        <div key={obj.id}>
                            <span>{obj.nome}</span> -  
                            <span>{obj.idade}</span>
                        </div>
                    )) }
                </div>

        </main>
    );
}