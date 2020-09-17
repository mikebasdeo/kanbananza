import { lists as defaultLists } from '../normalized-state'
import set from 'lodash/fp/set'

const listsReducer = (lists = defaultLists, action) => {
  // console.log(lists, action)
  if (action.type === 'CARD_CREATE') {
    const { listId, cardId } = action.payload
    const entities = { ...lists.entities }

    //Lodash fp way to update redux state.
    const cards = lists.entities[listId].cards.concat(cardId)
    return set(['entities', listId, 'cards'], cards, lists)

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
  return lists
}

export default listsReducer
