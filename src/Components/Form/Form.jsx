import React, {useContext} from "react"
import { useForm } from "react-hook-form";

// scss
import "./Form.scss";

// Context
import { Context } from "../../Context";

// scss
import './Form.scss'



export default function Form({ title }) {

    const {setFormActive, setThankActive, closeRef } = useContext(Context);

    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();
  
    function formOnSubmit(data) {
      console.log(data);
      setFormActive(false)
      setThankActive(true)
      reset()
    } 

    return (
        <div className="wrapper-form__content">
          <h4 className="wrapper-form__title" dangerouslySetInnerHTML={{__html: title}}></h4>
            {/* {formOnSubmit ? <div dangerouslySetInnerHTML={{__html: close}}></div> : null} */}
            
            <form
              onSubmit={handleSubmit(formOnSubmit)}
              action="#"
              className="wrapper-form__form"
              id="home-form"
            >
              <div className="wrapper-form__item">
                <label htmlFor="home-fotm-name">Name</label>
                <input
                  className={`${errors["name"] ? "error" : ""}`}
                  {...register("name", {
                    required: "Invalid name",
                  })}
                  id="home-fotm-name"
                  type="text"
                  placeholder="John Appleseed"
                />
                {errors["name"] && 
                <p className="error"><span>{errors["name"].message}</span></p>}
              </div>
              <div className="wrapper-form__item">
                <label htmlFor="home-fotm-business">Business Name</label>
                <input
                  className={`${errors["business-name"] ? "error" : ""}`}
                  {...register("business-name", {
                    required: "Invalid business name",
                  })}
                  id="home-fotm-business"
                  type="text"
                  placeholder="Burgers Boba (Singapore)"
                />
                {errors["business-name"] && 
                <p className="error"><span>{errors["business-name"].message}</span></p>}
              </div>
              <div className="wrapper-form__item">
                <label htmlFor="home-fotm-business">Phone</label>
                <input
                  className={`${errors["phone"] ? "error" : ""}`}
                  {...register("phone", {
                    required: 'Invalid phone number',
                  })}
                  id="home-fotm-business"
                  type="number"
                  placeholder="65 9123 4567"
                />
                {errors["phone"] && 
                <p className="error"><span>{errors["phone"].message}</span></p>}
              </div>
              <div className="wrapper-form__buttons">
                <button type="submit" className="wrapper-form__submit btn-red">
                  Submit
                </button>
              </div>
              <span className="wrapper-form__sub-label">No spam, promise</span>
            </form>
          </div>
    )
}