import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent }  from 'react-mdl';
import Personal from './img/personal.png';

class contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Carolina Reis</h2>
                        <img className="contact-img" src= {Personal} alt="Personal" style={{height: '254px'}}/>
                        <h5>Endereço</h5>
                        <p>Rua 29 de Junho, 208, Bairro Progresso</p>
                        <p>Passo de  Torres/SC</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contato</h2>
                        <hr></hr>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    (51) 99978 9249
                                    </ListItemContent>                                
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    carolvitheusmobile@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                    www.linkedin.com/in/carolina-dosreis/
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    www.instagram.com/devuxcarol/
                                </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }}

    export default contact;