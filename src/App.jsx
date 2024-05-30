import { useEffect, useState } from 'react';
import './App.css';
import  useCrud from './hooks/useCrud';
import  FormCard from './components/FormCard';
import CardInfo from './components/CardInfo';



function App() {

  const [cardSelect, setCardSelect] = useState();
  const [cards, getCards, createCard, deleteCard, updateCard] = useCrud('cars/');

  useEffect(() => {
    getCards();
  }, [])


  return (
    <>
     <div>
        <h1>CRUD</h1>
        <p>interaccion con el back-end</p>
        
        <FormCard 
          createCard={createCard} 
          cardSelect={cardSelect}
          setCardSelect={setCardSelect}
          updateCard={updateCard}
        />
        
     </div>

      <div>
          {
            // puedes usar un return implicito con () reemplazando las llaves
            cards?.map((card)=>{
              return(
                
                //ojo elemento padre.
                  <CardInfo key={card.id}
                    card={card}
                    deleteCard={deleteCard}
                    setCardSelect={setCardSelect}

                  />
            
              )
            })
          }
      </div>

    </>
  )
}

export default App
