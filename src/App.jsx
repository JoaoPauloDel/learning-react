import Butao from "./components/Butao";
import BoasVindas from "./components/BoasVindas";
import Box from "./components/Box";

const App = () => {
  return (
    <>
      <div>

        <BoasVindas nome="joao" genero="m" />
        <BoasVindas nome="jonas" />
        <BoasVindas nome="heitor" genero="m" />

        <Box>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia non enim explicabo vel minus praesentium mollitia numquam, quae ipsa voluptas, vero debitis quas ducimus fugit est dignissimos modi nam.
            </p>
          </div>
        </Box>
      </div>

      <div className="flex gap-4">
        <Butao
          texto="Confirmar"
          className={"bg-green-500 rounded"}
          onClick={() => alert("confirmou")} />
        <Butao
          className="font-bold text-white rounded bg-red-500"
          texto="Cancelar"
          onClick={() => alert("cancelou")}
        />
      </div>
    </>
  );
}

export default App;