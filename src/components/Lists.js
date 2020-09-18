import React from 'react'
import ListContainer from '../containers/ListContainer'

// critique #1 of redux. That @param lists comes from redux is not obvious (container is the hint).
const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((listId) => (
        <ListContainer key={listId} listId={listId} />
      ))}
    </section>
  )
}

export default Lists
