import Link from 'next/link';

//useState importa um componente com memória(estado), nesse caso o contador
function Home() {
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Entrar na página Sobre</a>
        </Link>
       </div>
    )
}

//mostra na pagina o componente Home
export default Home; // Exporta a função Home