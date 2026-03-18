import { useRef, useState } from "react";


const Calculadora = () => {

    let numA = useRef();
    let numB = useRef();

    const [resultado, setResultado] = useState()

    function somar(numA, numB) {
        setResultado(Number(numA) + Number(numB))

    }
    function subtrair(numA, numB) {
        setResultado(Number(numA) - Number(numB))

    }
    function multiplicar(numA, numB) {
        setResultado(Number(numA) * Number(numB))

    }
    function dividir(numA, numB) {
        if(Number(numB) == 0){
            alert("Não é possível divisão por zero");
            return
        }
        setResultado(Number(numA) / Number(numB))

    }

    return (
        <div className="flex flex-col gap-2 p-2  items-center justify-center pt-20">
            <input
                className="border rounded-xl w-80 h-8 pl-38 "
                type="number"
                ref={numA}
            />
            <input
                className="border rounded-xl w-80 h-8 pl-38 "
                type="Number"
                ref={numB}
            />
            <div className="flex ">
                <button
                    onClick={() => somar(numA.current.value, numB.current.value)}
                    className="border rounded-xl p-2 bg-black text-white w-40 cursor-pointer hover:bg-gray-500 duration-350"
                >
                    Somar
                </button>
                <button
                    onClick={() => subtrair(numA.current.value, numB.current.value)}
                    className="border rounded-xl p-2 bg-black text-white w-40 cursor-pointer hover:bg-gray-500 duration-350"
                >
                    subtrair
                </button>
                <button
                    onClick={() => multiplicar(numA.current.value, numB.current.value)}
                    className="border rounded-xl p-2 bg-black text-white w-40 cursor-pointer hover:bg-gray-500 duration-350"
                >
                    multiplicar
                </button>
                <button
                    onClick={() => dividir(numA.current.value, numB.current.value)}
                    className="border rounded-xl p-2 bg-black text-white w-40 cursor-pointer hover:bg-gray-500 duration-350"
                >
                    dividir
                </button>
            </div>

            <h1 className="font-bold "> = <br />
                <div className="font-bold text-2xl underline">
                    {resultado}
                </div>
            </h1>
        </div>
    );
}

export default Calculadora;