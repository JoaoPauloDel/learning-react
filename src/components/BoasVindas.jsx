const BoasVindas = ({ nome, genero }) => {
    return (
        <h1>Seja bem-vind{ genero == "m" ? "o" : "a"} {nome}</h1>
    );
}

export default BoasVindas;