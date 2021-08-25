import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <img className="menu-item__bg-image" src={imageUrl} alt="" />
    img
    <div className="menu-item__content">
      <h1 className="menu-item__title">{title}</h1>
      <span className="menu-item__subtitle">Shop</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
