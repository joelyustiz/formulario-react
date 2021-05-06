import React, { useState, useEffect, Fragment } from 'react';
import { CustomInput } from '../../components/CustomInput/CustomInput';

const COMPONENTES = {
    INPUT: 1,
    SELECT: 2
}

function DynamicForm({ handleSubmit, formType }) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (formType.length > 0) {
            setData({})
        }
    }, [formType])

    return (
        <section>
            <form
                className="container-general"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(data)
                }}>
                {
                    formType.map((item, i) => {
                        let component = null;
                        switch (item.type_components) {
                            case 1:
                                component = (
                                    <div key={i}>
                                        <label>{item.label}</label>
                                        <br />
                                        <CustomInput
                                            isVisible={true}
                                            className="form-control"
                                            type="text"
                                            value={
                                                data[item.id] ? data[item.id] : ""
                                            }
                                            onChange={(event) => {
                                                event.persist()
                                                setData((prevState) => {
                                                    return {
                                                        ...prevState,
                                                        [item.id]: event.target.value
                                                    }
                                                })
                                            }
                                            }
                                        />
                                    </div>
                                )
                                break;

                            case 2:
                                component = (
                                    <div key={i}>
                                        <label>{item.label}</label>
                                        <br />
                                        <select
                                            className="select-dropdown"
                                            value={
                                                data[item.id] ? data[item.id] : ""
                                            }
                                            onChange={(event) => {
                                                event.persist()
                                                setData((prevState) => {
                                                    return {
                                                        ...prevState,
                                                        [item.id]: event.target.value
                                                    }
                                                })
                                            }
                                            }
                                        >
                                            <option value="DEFAULT">SELECCIONE UNA OPCIÓN</option>
                                            {item.data.map((item, index) => (<option key={index} value={item.cve}>{item.value}</option>))}
                                        </select>
                                    </div>
                                )

                                break;

                            default:
                                break;
                        }
                        return component

                    })
                }

                <CustomInput isVisible={formType.length > 0} className="input" type="submit" value="Enviar datos" />
            </form>
        </section>

    );
}

export default DynamicForm;
