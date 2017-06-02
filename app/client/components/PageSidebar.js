import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonSecondary } from '../elements/Fields'

const Wrapper = styled.nav`
  background-color: ${p => p.theme.colors.whiteSmoke};
  padding: 1rem 0;
  width: ${p => p.theme.sizes.sidebarWidth};
`

const List = styled.ul``

const ItemLink = styled(Link)`
  border: 0;
  display: block;
  padding: .5rem 1rem;

  &:hover {
    border: 0;
  }
`

const SelectedItemLink = styled(ItemLink)`
  color: ${p => p.theme.colors.white};
`

const Item = styled.li`
  margin: 0 1rem 0 0;
  transition: background-color ${p => p.theme.transitions.default};

  &:hover {
    background-color: ${p => p.theme.colors.gainsboro}
  }
`

const SelectedItem = styled(Item)`
  background-color: ${p => p.theme.colors.base};

  &:hover {
    background-color: ${p => p.theme.colors.aluminum}
  }
`

const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
`

const PageSidebar = ({ items, selectedId, buttonText, buttonAction, selectedMenu }) => {
  const ListItems = items.map(({ text, linkUrl, id }) => {
    const isSelected = id === selectedId
    const ListItem = isSelected ? SelectedItem : Item
    const ListItemLink = isSelected ? SelectedItemLink : ItemLink

    return <ListItem key={id}><ListItemLink to={linkUrl}>{text}</ListItemLink></ListItem>
  })

  return (
    <Wrapper>
      <List>
        {ListItems}
      </List>
      <ButtonsWrapper>
        {buttonText && <ButtonSecondary onClick={buttonAction}>{buttonText}</ButtonSecondary>}
        {selectedMenu && <ButtonSecondary>Menu</ButtonSecondary>}
      </ButtonsWrapper>
    </Wrapper>
  )
}

PageSidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      linkUrl: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ).isRequired,
  selectedId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  selectedMenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.func
    })
  ),
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func
}

export default PageSidebar
