import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

class Login extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position : 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                                    <input type="email" className="form-control" 
                                                            id="inputEmail" aria-describedby="emailHelp"
                                                            placeholder="Digite seu E-mail">
                                                    </input>
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                                    <input type="password" className="form-control"
                                                            id="inputSenha" placeholder="Password">
                                                    </input>
                                                </FormGroup>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;