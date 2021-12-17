import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.actions';
import {
  ItemStyles,
  ItemImageStyles,
  CtaStyles,
  FooterStyles,
  NameStyles,
  PriceStyles,
} from './CollectionItem.styles';

export default function CollectionItem({ item }) {
  const { name, imageUrl, price } = item;

  const dispatch = useDispatch();
  const addItemHandler = () => dispatch(addItem(item));

  return (
    <ItemStyles>
      <ItemImageStyles imageUrl={imageUrl}>
        <CtaStyles onClick={addItemHandler} inverted>
          Add to cart
        </CtaStyles>
      </ItemImageStyles>
      <FooterStyles>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>${price}</PriceStyles>
      </FooterStyles>
    </ItemStyles>
  );
}
