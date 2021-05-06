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

/*
1
From personal projects, a recent example was an application that made web scrping to an Amazon page and saved the data in a SQL Lite database. I decided to do it in Nodejs to be able to use the web scrapring libraries that I already used. Example: https://github.com/joelyustiz/web-scraping-nodejs

2

I would use ReactJs on the Frontend, Java with SprintBoot or Nodejs for the backend and Mysql as the database

3

Visual Studio, NetBeans my Id para base de datos, git

4

I do tests with Jest for Reactjs and I make sure to follow the practices that the team has

5

I have not had interaction with flux but I have worked with Redux which allows us to manage a global state of the applications and in this way allows us from any component to connect to the global state and not have to be passing the information through nodes (parents to children)


*/