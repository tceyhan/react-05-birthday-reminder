import "./Button.css";

function Button({className, children, onClickPrp}) {
    console.log(children)

  return (
    <button className={className} onClick={onClickPrp}>{children}</button>
  )
}

export default Button