
const Button = ({clasname, titulo, onclick}) =>{
  return(
    <button className={`boton-general ${clasname}`} onClick={onclick}>
      <span>{titulo}</span>
    </button>
  )
}

export default Button