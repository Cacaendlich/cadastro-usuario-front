import Botao from "@/components/botao";

export default function Home() {
  return (
    <>
    <div>
      {/* botôes de teste */}
      <Botao texto={'Sign Up'} manipularClick={() => console.log("Botão clicado!")}/>
      <Botao texto={'Log in'} cor="secundario" manipularClick={() => console.log("Botão clicado!")}/>
    </div>
    </>
  )
}
