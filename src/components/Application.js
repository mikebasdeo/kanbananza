import React from 'react'

import Users from './Users'
import CreateList from './CreateList'
import Lists from './Lists'
import ListsContainer from '../containers/ListsContainer'

const Application = () => {

  
  console.log(Symbol())
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateList />
        <ListsContainer />
      </section>
    </main>
  )
}

export default Application
