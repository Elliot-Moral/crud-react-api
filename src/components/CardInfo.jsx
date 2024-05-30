const CardInfo = ({ card, deleteCard, setCardSelect }) => {

  function funDelete(){
    deleteCard(card.id)
  }

  function funEdit(){
    setCardSelect(card)
  }

    return (
      <article>
        <h2>#{card.id} - {card.brand} {card.model}</h2>
        <ul>
          <li><span>Year</span><span>{card.year}</span></li>
          <li><span>Color</span><span>{card.color}</span></li>
          <li><span>Price</span><span>{card.price}</span></li>
        </ul>
        <div>
          <button onClick={funDelete}>Remove card</button>
          <button onClick={funEdit} >Edit</button>
        </div>
      </article>
    )
  }
  
  export default CardInfo