function Tempo(props) {
    console.log('>Passando pelo Frontend;>');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('>Passando pelo getStaticProps;>');
    console.log('>Adicionando delay de 5 segundos;>');

    await DelayNode(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}
export default Tempo;