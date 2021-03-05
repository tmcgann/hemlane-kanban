import * as React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { generateRandomHexColor } from '../utils'

import KanbanColumn from './KanbanColumn'

const Kanban = () => {
  const [columns, setColumns] = React.useState([
    {
      id: uuidv4(),
      name: 'Winnie',
      color: generateRandomHexColor(),
      cards: [
        {
          id: uuidv4(),
          name: 'buy eggs',
        },
        {
          id: uuidv4(),
          name: 'buy milk',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'Brad',
      color: generateRandomHexColor(),
      cards: [
        {
          id: uuidv4(),
          name: 'buy meat',
        },
        {
          id: uuidv4(),
          name: 'buy vegi',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'Bob',
      color: generateRandomHexColor(),
      cards: [
        {
          id: uuidv4(),
          name: 'buy meat',
        },
        {
          id: uuidv4(),
          name: 'buy vegi',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'Thomas',
      color: generateRandomHexColor(),
      cards: [
        {
          id: uuidv4(),
          name: 'buy meat',
        },
        {
          id: uuidv4(),
          name: 'buy vegi',
        },
      ],
    },
  ])

  const onAddCard = (columnIndex, newCardName) => {
    setColumns((prev) => {
      const columns = prev.slice()
      const column = { ...columns[columnIndex] }

      column.cards = [
        ...column.cards,
        {
          id: uuidv4(),
          name: newCardName,
        },
      ]
      columns[columnIndex] = column

      return columns
    })
  }

  const moveCard = (columnMoveCount, columnIndex, cardIndex) => {
    setColumns(prev => {
      const columns = prev.slice()

      const currentColumn = { ...columns[columnIndex] }
      const nextColumn = { ...columns[columnIndex + columnMoveCount] }

      currentColumn.cards = currentColumn.cards.slice()
      const [cardToMove] = currentColumn.cards.splice(cardIndex, 1)

      nextColumn.cards = nextColumn.cards.slice()
      nextColumn.cards.splice(cardIndex, 0, cardToMove)

      columns[columnIndex] = currentColumn
      columns[columnIndex + columnMoveCount] = nextColumn

      return columns
    })
  }

  const handleMoveCardLeft = (columnIndex, cardIndex) => {
    moveCard(-1, columnIndex, cardIndex)
  }

  const handleMoveCardRight = (columnIndex, cardIndex) => {
    moveCard(1, columnIndex, cardIndex)
  }

  return (
    <Container>
      {columns.map((column, index) => (
        <KanbanColumn
          key={column.id}
          onAddCard={onAddCard}
          index={index}
          column={column}
          columnCount={columns.length}
          onMoveCardLeft={handleMoveCardLeft}
          onMoveCardRight={handleMoveCardRight}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;

  background-color: gray;

  & > * + * {
    margin-left: 25px;
  }
`

export default Kanban
