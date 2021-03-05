import styled from 'styled-components'
import KanbanCard from './KanbanCard'
// import { v4 as uuidv4 } from 'uuid';

const KanbanColumn = ({ index, column, columnCount, onAddCard, onMoveCardLeft, onMoveCardRight }) => {
  const handleAddCard = () => {
    const newCardName = window.prompt('Card name?')
    if (newCardName) {
      onAddCard(index, newCardName)
    }
  }

  const handleMoveLeft = (cardIndex) => {
    onMoveCardLeft(index, cardIndex)
  }

  const handleMoveRight = (cardIndex) => {
    onMoveCardRight(index, cardIndex)
  }

  return (
    <Container>
      <Header color={column.color}>
        <ColumnTitle>{column.name}</ColumnTitle>
      </Header>
      <Body>
        {column.cards.map((card, cardIndex) => (
          <KanbanCard
            key={card.id}
            card={card}
            cardIndex={cardIndex}
            leftEnabled={index !== 0}
            rightEnabled={index !== columnCount - 1}
            onMoveLeft={handleMoveLeft}
            onMoveRight={handleMoveRight}
          />
        ))}
      </Body>
      <Footer>
        <Button onClick={handleAddCard}>+ Add a card</Button>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #fff;

  & > * + * {
    margin-top: 25px;
  }
`

const Header = styled.div`
  display: flex;
  background-color: ${props => props.color};

  padding: 25px 25px;
`

const ColumnTitle = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0;

  color: #fff;
  text-align: center;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 25px;

  & > * + * {
    margin-top: 5px;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 25px 25px;
`

const Button = styled.button``

export default KanbanColumn
