import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(1);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const diminuir = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    return (
        <div className="flex items-center justify-center gap-4 mt-10">
            <button
                onClick={diminuir}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
                -1
            </button>
            <span className="text-2xl font-bold">{contador}</span>
            <button
                onClick={aumentar}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
                +1
            </button>
        </div>
    );
};

export default Contador;