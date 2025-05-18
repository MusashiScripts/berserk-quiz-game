interface Props{
  className: string
}

export const GutsIcon: React.FC<Props> = ({ className }) => {
  return (
    <img className={ className } src='/guts.jpg' alt="guts icon" />
  )
}