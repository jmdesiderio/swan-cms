// @flow
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function LogoutContainer (props) {
  props.mutate()
    .then(() => {
      props.history.push('/admin/login')
    })

  return null
}

LogoutContainer.propTypes = {
  history: PropTypes.object,
  mutate: PropTypes.func
}

const mutation = gql`
  mutation {
    logoutAuth
  }
`

export default compose(
  graphql(mutation),
  withRouter
)(LogoutContainer)
