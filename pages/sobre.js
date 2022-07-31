import Link from 'next/link';

//useState importa um componente com memória(estado), nesse caso o contador
function Sobre() {
    return (<div>
        <h1>Porque você clicou, Benedita?</h1>
        <Link href="/">
            <a>agora, clique aqui</a>
        </Link>
       </div>
    )
}

//mostra na pagina o componente Home
export default Sobre; // Exporta a função Home