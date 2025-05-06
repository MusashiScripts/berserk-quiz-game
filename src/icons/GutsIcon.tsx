interface Props{
  className: string
}

export const GutsIcon: React.FC<Props> = ({ className }) => {
  return (
    <img className={ className } src={`${import.meta.env.BASE_URL}guts.jpg`} alt="guts icon" />
  )
}