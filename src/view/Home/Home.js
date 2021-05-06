import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Context } from "../../context/context"
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomLabel } from '../../components/CustomLabel/CustomLabel';
import { CustomSection } from '../../components/CustomSection/CustomSection';
import DynamicForm from "./DynamicForm"
import { form1, form2, form3 } from "../../util/data.js"

function Home(props) {
  const history = useHistory();
  const [selectedForm, setSelectedForm] = useState("")
  const [componentsForm, setComponentsForm] = useState([])
  const [api, setApi] = useState("")
  const {
    user,
    handleUser
  } = useContext(Context);

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value)
  }

  const handleButton = (event) => {
    event.preventDefault();
    handleUser(input)
  }

  return (
    <CustomSection>
      <h1 className="title">
        Formularios Dinámicos
      </h1>

      <div>
        <select
          className="select-dropdown"
          value={selectedForm}
          onChange={(event) => {
            event.preventDefault();
            setApi("")
            switch (event.target.value) {
              case "1":
                setComponentsForm(form1)
                break;
              case "2":
                setComponentsForm(form2)
                break;
              case "3":
                setComponentsForm(form3)
                break;
              default:
                setComponentsForm([])
                break;
            }
            setSelectedForm(event.target.value)
          }}>
          <option value="DEFAULT">SELECCIONES UN FORMULARIO</option>
          <option value="1">Formulario 1</option>
          <option value="2">Formulario 2</option>
          <option value="3">Formulario 3</option>
        </select>
      </div>

      <DynamicForm
        handleSubmit={(data) => {
          setApi(data)
        }}
        formType={componentsForm}
      />

      <p>Datos a enviar de los formularios dinámicos: {JSON.stringify(api)}</p>

    </CustomSection>
  );
}

export default Home;
