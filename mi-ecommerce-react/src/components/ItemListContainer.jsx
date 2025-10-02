import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Explora nuestra colección</p>
    </div>
  )
}

export default ItemListContainer