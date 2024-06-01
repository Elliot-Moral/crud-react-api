import { useEffect, useState } from 'react';
import './App.css';
import  useCrud from './hooks/useCrud';
import  FormCard from './components/FormCard';
import UserInfo from './components/UserInfo';



function App() {

  const [userSelect, setUserSelect] = useState();
  const [users, getUser, createUser, deleteUser, updateUser] = useCrud('users/');
  
  console.log("🚀 ~ App ~ users:", users)

  useEffect(() => {
    getUser();
  }, [])


  return (
    <>
     <div>
        <h1>CRUD</h1>
        <p>interaccion con el back-end</p>
        
        <FormCard
          createUser={createUser} 
          userSelect={userSelect}
          setUserSelect={setUserSelect}
          updateUser={updateUser}
        />
        
     </div>

      <div>
          {
            // puedes usar un return implicito con () reemplazando las llaves
            users?.map((user)=>{
              return(
                
                //ojo elemento padre.
                  <UserInfo key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setUserSelect={setUserSelect}

                  />
            
              )
            })
          }
      </div>

    </>
  )
}

export default App
