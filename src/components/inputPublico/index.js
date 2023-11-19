export default function InputPublico({  
  aoAlterarValorInput,
  placeholder,
  tipo,
  valorInput= "",
  exibirMensagemValidacao = false,
  mensagemValidacao = ""

}) {
  return (
    <div className={'inputPublicoContainer'}>
      <div className={'inputPublico'}>
        <input
          type={tipo}
          placeholder={placeholder}
          value={valorInput}
          onChange={aoAlterarValorInput}
        />
      </div>
      {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
    </div>
    
  );
}