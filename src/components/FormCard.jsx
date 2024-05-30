
//# Esto es una librebria, otra librebria es formik
import { useEffect } from "react";
import { useForm } from "react-hook-form";

//#https://react-hook-form.com/
//#npm install react-hook-form


const FormCar = ( {createCard, cardSelect, setCardSelect, updateCard} ) => {

    // useForm devuelve un objeto.
    const { register, handleSubmit, reset } = useForm();

    useEffect(()=>{
      reset(cardSelect)
    }, [cardSelect])
    
    
    function funSubmit(data){
      
      if(cardSelect){
        console.log(data)
        updateCard(cardSelect.id, data)
        setCardSelect();
      }else{
        createCard(data)
      }



        reset({
          brand:'',
          model: '',
          color: '',
          year: '',
          price: '',
        })
    }

    return (

        //crad un objeto de los datos ejemplo
        /*
            {brand: 'ss', model: 'ss', color: 'ss', year: '232', price: 'sdsdas'}
        */


      <form onSubmit={handleSubmit(funSubmit)}>
        <label>
          <span>Brand</span>
          <input {...register("brand")} type="text" />
        </label>
        <label>
          <span>Model</span>
          <input {...register("model")} type="text" />
        </label>
        <label>
          <span>Color</span>
          <input {...register("color")} type="text" />
        </label>
        <label>
          <span>Year</span>
          <input {...register("year")} type="number" />
        </label>
        <label>
          <span>Price</span>
          <input {...register("price")} type="text" />
        </label>
        <button>Submit</button>
      </form>
    );
  };
  
  export default FormCar;