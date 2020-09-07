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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
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