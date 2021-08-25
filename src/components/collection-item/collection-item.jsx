import './collection-item.styles.scss'

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="item">
    <div
      className="item__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <button className="item__cta">Add to cart</button>
    </div>
    <div className="item__footer">
      <span className="item__footer--name">{name}</span>
      <span className="item__footer--price">${price}</span>
    </div>
  </div>
)

export default CollectionItem
