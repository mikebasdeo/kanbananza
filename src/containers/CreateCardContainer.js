import { connect } from 'react-redux'
import { createCard } from '../actions/card-actions'
import CreateCard from './../components/CreateCard'

const mapDispatchToProps = { createCard }

export default connect(null, mapDispatchToProps)(CreateCard)
