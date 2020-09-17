import { lists as defaultLists } from '../normalized-state'
import set from 'lodash/fp/set'
import { addEntity, addToChidren } from './_utilities'

const listsReducer = (lists = defaultLists, action) => {
  // console.log(lists, action)
  if (action.type === 'CARD_CREATE') {
    const { listId, cardId } = action.payload
    // const entities = { ...lists.entities }

    // const cards = lists.entities[listId].cards.concat(cardId)
    return addToChidren(lists, listId, 'cards', cardId)

    //Lodash fp way to update redux state.
    // return set(['entities', listId, 'cards'], cards, lists)

    // Verbose redux state update
    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId),
    // }
    // return {
    //   ...lists,
    //   entities,
    // }
  }

  if (action.type === 'LIST_CREATE') {
    const { list, listId } = action.payload
    return addEntity(lists, list, listId)
  }

  return lists
}

export default listsReducer
