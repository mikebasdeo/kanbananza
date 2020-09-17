import { connect } from 'react-redux'

import CreateCard from './../components/CreateCard'

const defaultCardData = {
  title: 'Batman',
  description: 'Superman',
  assignedTo: '',
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCard(listId, cardData) {
      // make a new card
      const cardId = Date.now().toString()
      const card = {
        id: cardId,
        ...defaultCardData,
        ...cardData,
      }

      // dispatch action
      dispatch({
        type: 'CARD_CREATE',
        payload: { card, listId, cardId },
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(CreateCard)
