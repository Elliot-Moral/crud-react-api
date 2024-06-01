
//# Esto es una librebria, otra librebria es formik
import { useEffect } from "react";
import { useForm } from "react-hook-form";

//#https://react-hook-form.com/
//#npm install react-hook-form


const FormCar = ( {createUser, userSelect, setUserSelect, updateUser} ) => {

    // useForm devuelve un objeto.
    const { register, handleSubmit, reset } = useForm();

    useEffect(()=>{
      reset(userSelect)
    }, [userSelect])
    
    
    function funSubmit(data){
      
      if(userSelect){

        const obj = {
          brand:'hola',
          model: 'como',
          color: 'vaz',
          year: 1996,
          price: '200',
        }

        updateUser( userSelect.id , data)
        setUserSelect();
      }else{
        createUser(data)
      }

        reset({
          first_name:'',
          last_name: '',
          email: '',
          password: '',
          birthday: '',
        })
    }

    return (

        //crad un objeto de los datos ejemplo
        /*
            {brand: 'ss', model: 'ss', color: 'ss', year: '232', price: 'sdsdas'}
        */


      <form onSubmit={handleSubmit(funSubmit)}>
        <label>
          <span>Firs Name</span>
          <input {...register("first_name")} type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register("last_name")} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register("email")} type="text" />
        </label>
        <label>
          <span>Password</span>
          <input {...register("password")} type="password" />
        </label>
        <label>
          <span>Birthday</span>
          <input {...register("birthday")} type="date" />
        </label>
        <button>Submit</button>
      </form>
    );
  };
  
  export default FormCar;