import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
  return (
      //for every other card, there is a flex-direction: row-reverse, so that the image div appears before the text div
      //id % 2 === 0 essentially means "if id is even" 
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
