import { StoreItemProps } from '../../../models/types'
import { StyledContainer } from './StoreItem.styled'

export const StoreItem = ({ id, name, price }: StoreItemProps): JSX.Element => {
  return (
    <StyledContainer>
      <h1>{name}</h1>
      <p>{price}</p>
    </StyledContainer>
  )
}
