export default function InputPublico({  
  aoAlterarValorInput,
  placeholder,
  tipo,
  valorInput= "",
  exibirMensagemValidacao = false,
  mensagemValidacao = ""


}) {
  return (
    <div className={'inputContainer'}>
      <div className={'inputPublico'}>
        <input
          type={tipo}
          placeholder={placeholder}
          value={valorInput}
          className={'input'}
          onChange={aoAlterarValorInput}
        ></input>
      </div>
      {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
    </div>
    
  );
}