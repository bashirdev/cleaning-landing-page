

const Button = ({text, navButton, href, icon}) => {
  return (
    <a href={href} 
    className={`${navButton}`}
    >{icon ? <span className='flex items-center justify-center gap-4 '> <img src={icon} alt="" srcSet="" /> {text}</span> : text}</a>
  )
}

export default Button