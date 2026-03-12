const Butao = ({ texto, className, onClick }) => {

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}

export default Butao;