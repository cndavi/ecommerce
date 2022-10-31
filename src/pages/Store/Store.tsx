import storeItems from '../../data/items.json'
import { StoreItem } from '../../components/content/StoreItem/StoreItem'
import { StyledContainer } from './Store.styled'

export const Store = (): JSX.Element => {
  return (
    <StyledContainer>
      {storeItems.map((item) => (
        <div key={item.id}>
          <StoreItem {...item} />
        </div>
      ))}
    </StyledContainer>
  )
}
