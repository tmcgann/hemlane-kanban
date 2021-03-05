import styled from 'styled-components'

const KanbanCard = ({ leftEnabled, rightEnabled, onMoveLeft, onMoveRight, card, cardIndex }) => {
  const handleMoveRight = () => {
    onMoveRight(cardIndex)
  }

  const handleMoveLeft = () => {
    onMoveLeft(cardIndex)
  }

  return (
    <Container>
      <Button onClick={handleMoveLeft} disabled={!leftEnabled}>&lt;</Button>
      <Content>{card.name}</Content>
      <Button onClick={handleMoveRight} disabled={!rightEnabled}>&gt;</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  width: 100%;

  & > * + * {
    margin-left: 25px;
  }
`

const Content = styled.span`
  flex-grow: 1;

  text-align: left;
`

const Button = styled.button``

export default KanbanCard