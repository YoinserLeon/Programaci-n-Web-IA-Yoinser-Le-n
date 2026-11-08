export default function   Home () {
  return (
    <>
      <p className="text-red-600">Hola</p>
      <p>mundo</p>
      <div className="flex flex-col gap-4 p-8">
        <Boton texto="hola"></Boton>
        <Boton texto="presioname"></Boton>
        <Boton texto="mundo"></Boton>
        <Boton texto="haz click aqui"></Boton>
        <Boton texto="hola"></Boton>
      </div>
    </>
  )
}

function Boton(
  propiedades: { texto: string; bgColor?: string } = {
    texto: "presioname", 
    bgColor: "bg-red-600",
  },
) {
  return (
    <button className={`${propiedades.bgColor} px-4 py-2 rounded-md text-white`}>
      {propiedades.texto}
    </button>
  );
}
