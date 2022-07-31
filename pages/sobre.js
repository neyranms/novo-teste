import Link from 'next/link';

//useState importa um componente com memória(estado), nesse caso o contador
function Sobre() {
    return (<div>
        <h1>Home</h1>
        <Link href="/">
            <a>Acessar a página Home</a>
        </Link>
       </div>
    )
}

//mostra na pagina o componente Home
export default Sobre; // Exporta a função Home