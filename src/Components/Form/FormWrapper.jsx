import React, { useContext } from "react";

// scss
import "./Form.scss";

// Context
import { Context } from "../../Context";

// Form
import Form from "./Form";

export default function FormWrapper({ title }) {

  const {formRef} = useContext(Context)

  return (
    <div className="wrapper-form" ref={formRef}>
      <div className="wrapper-form__inner">
          <Form title={title} />
      </div>
    </div>
  );
}
