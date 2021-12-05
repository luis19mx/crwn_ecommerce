import { useRouteMatch, Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem';
import './collection-preview.styles.scss';

export default function CollectionPreview({ title, items, routeName }) {
  const match = useRouteMatch();

  return (
    <div className="collection">
      <h1 className="collection__title">
        <Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="collection__preview">
        {!!items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
