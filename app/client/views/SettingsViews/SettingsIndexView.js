import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
  background: ${p => p.theme.colors.white};
  margin: 1rem 0;
  padding: 1.5rem 2rem;
  width: 100%;
`

const SubHeading = styled.h3`
  border-bottom: 1px solid ${p => p.theme.colors.smoke};
  margin: 0 0 1rem;
  padding: 0 0 .25rem;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

const ListItem = styled.li`
  flex: 1 1 17%;
`

const SettingsLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 36% 0;
  transition: background ${p => p.theme.transitions.default};

  &:hover {
    background: ${p => p.theme.colors.smoke};
    border: 0;
  }

  &:active {
    background: ${p => p.theme.colors.gainsboro};
  }
`

class SettingsIndex extends Component {
  render () {
    return (
      <div>
        <h1>Settings</h1>
        <Section>
          <SubHeading>System</SubHeading>
          <List>
            <ListItem>
              <SettingsLink to='/admin/config/settings/general'>General</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/sites'>Sites</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/routes'>Routes</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/users'>Users</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/email'>Email</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/plugins'>Plugins</SettingsLink>
            </ListItem>
          </List>
        </Section>
        <Section>
          <SubHeading>Content</SubHeading>
          <List>
            <ListItem>
              <SettingsLink to='/admin/config/settings/fields'>Fields</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/sections'>Sections</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/assets'>Assets</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/globals'>Globals</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/categories'>Categories</SettingsLink>
            </ListItem>
            <ListItem>
              <SettingsLink to='/admin/config/settings/tags'>Tags</SettingsLink>
            </ListItem>
          </List>
        </Section>
      </div>
    )
  }
}

export default SettingsIndex
