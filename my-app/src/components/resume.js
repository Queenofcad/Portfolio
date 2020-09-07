import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import logo  from './img/personal.png'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={ logo } 
                                alt="perfil"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Carol Reis</h2>
                        <h4 style={{color: 'white'}}>Designer e Desenvolvedora Front-End</h4>
                        <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
                        <h5>Endereço</h5>
                        <p>Rua 29 de Junho, 208, Passo de Torres/SC</p>
                        <h5>Telefone</h5>
                        <p>(51) 99978 9249</p>
                        <h5>Email</h5>
                        <p>carolvitheusmobile@gmail.com</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>Lado direito</Cell>
                </Grid>
            </div>
        )
    }}

    export default Resume;