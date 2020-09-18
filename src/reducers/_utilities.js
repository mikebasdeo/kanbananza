import set from 'lodash/fp/set'
import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'


// updates to two places required to add a new anything thanks to normaliz
export const addEntity = (state, entity, id) => {
  return pipe(
    set(['entities', id], entity),
    set('ids', state.ids.concat(id)),
  )(state)
}

export const addToChidren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property]
  const children = get(path)(state)
  return set(path, children.concat(childId), state)
}
