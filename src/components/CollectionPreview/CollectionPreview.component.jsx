import { useRouteMatch, Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem';
import {
  CollectionStyles,
  PreviewStyles,
  TitleStyles,
} from './CollectionPreview.styles';

export default function CollectionPreview({ title, items, routeName }) {
  const match = useRouteMatch();

  return (
    <CollectionStyles>
      <TitleStyles>
        <Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link>
      </TitleStyles>
      <PreviewStyles>
        {!!items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </PreviewStyles>
    </CollectionStyles>
  );
}
