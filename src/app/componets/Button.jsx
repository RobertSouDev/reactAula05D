export default function Button({funcao, texto = "botao"}){
    return(
        
        <button onClick={funcao}  className="calculateButton">{texto}</button>
    )
}