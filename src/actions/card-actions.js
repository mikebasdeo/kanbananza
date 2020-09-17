const CARD_CREATE = 'CARD_CREATE'

const defaultCardData = {
  title: 'Batman',
  description: 'Superman',
  assignedTo: '',
}

export const createCard = (listId, cardData) => {
  // make a new card
  const cardId = Date.now().toString()
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  }

  // dispatch action
  return {
    type: 'CARD_CREATE',
    payload: { card, listId, cardId },
  }
}
