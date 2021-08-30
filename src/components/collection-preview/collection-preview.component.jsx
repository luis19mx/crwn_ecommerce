import CollectionItem from '../collection-item/collection-item'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection">
    <h1 className="collection__title">{title.toUpperCase()}</h1>
    <div className="collection__preview">
      {items
        .filter((_, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} {...{item}} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
