import { useState } from "react";

const Contador = () => {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar(){
        setNumero(numero - 1)
    }
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={incrementar} className="bg-black rounded px-4 text-white">+ 1</button>
            <button onClick={decrementar} className="bg-black rounded px-4 text-white">- 1</button>
        </div>

    );
}

export default Contador;