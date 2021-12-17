import { useRouteMatch, useHistory } from 'react-router-dom';
import { MenuItemStyles, ContentStyles, ImageStyles } from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const handleClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemStyles size={size} onClick={handleClick}>
      <ImageStyles src={imageUrl} alt="" />
      <ContentStyles>
        <h1>{title}</h1>
        <span>Shop</span>
      </ContentStyles>
    </MenuItemStyles>
  );
};

export default MenuItem;
