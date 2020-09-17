import { connect } from 'react-redux'

import List from '../components/List'

// ownProps = the properties passed to this container when you use it (container props!)
// state = redux state
const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] }
}

export default connect(mapStateToProps)(List)
