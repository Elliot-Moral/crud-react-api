const UserInfo = ({ user, deleteUser, setUserSelect }) => {

  function funDelete(){
    deleteUser(user.id)
  }

  function funEdit(){
    setUserSelect(user)
  }

    return (
      <article>
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
          <li><span>Email: </span><span>{user.email}</span></li>
          <li><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
        <div>
          <button onClick={funDelete}>Remove user</button>
          <button onClick={funEdit} >Edit</button>
        </div>
      </article>
    )
  }
  
  export default UserInfo