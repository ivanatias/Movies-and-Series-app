import React from 'react'
import { Row } from 'react-bootstrap'
import ItemCard from '../ItemCard/ItemCard'
import Empty from '../Empty/Empty'

const Grid = ({ gridItems }) => {
  return (
    <Row className='g-4 mx-auto'>
      {gridItems.map(item => (
        <ItemCard item={item} key={item.id} />
      ))}
      {gridItems.length === 0 && <Empty />}
    </Row>
  )
}

export default Grid
