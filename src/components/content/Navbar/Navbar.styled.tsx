import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  position: sticky;
  padding: 1.25rem 0;
  width: 100%;
  max-width: 80rem;
  margin: auto;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`

export const StyledListItem = styled.li`
  position: relative;
  display: inline-block;
  margin-left: 1rem;

  &:last-child {
    margin-left: auto !important;
  }
`

export const StyledShoppingCart = styled.div`
  display: flex;
  cursor: pointer;
`

export const StyledIcon = styled.div``

export const StyledBadge = styled.div``
