import Link from 'next/link';

//useState importa um componente com memória(estado), nesse caso o contador
function Home() {
    return (<div>
        <h1>Site de Neyran Melo</h1>
        <Link href="/sobre">
            <a>não clique aqui</a>
        </Link>
       </div>
    )
}

//mostra na pagina o componente Home
export default Home; // Exporta a função Home