import Butao from "./components/Butao";

const App = () => {
  return (
    <>  
      <div className="flex gap-4">
        <Butao
          texto="Confirmar"
          className={"bg-green-500 rounded"}
          onClick={alert("confirmou")}
        />
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