import React, { Component, PropTypes } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

class RequireAuth extends Component {
  componentWillUpdate () {
    this.props.data.refetch()
  }

  render () {
    const { children, data, router } = this.props

    if (!data.loading && data.error) {
      router.push('/admin/login')
      return null
    }

    return children
  }
}

RequireAuth.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
  router: PropTypes.object
}

const query = gql`
  query {
    user {
      username
    }
  }
`

export default compose(
  graphql(query, {
    options: {
      forceFetch: true,
      variables: { test: Math.random().toString(36).substring(7) }
    }
  }),
)(RequireAuth)
