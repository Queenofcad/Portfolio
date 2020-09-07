import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import logo  from './img/personal.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={ logo } 
                                alt="perfil"
                                style={{height: '250px', borderRadius: '20px'}}
                            />
                        </div>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>Lado direito
                        <h2>Formação</h2>

                        <Education
                            startYear={2014}
                            endYear={2015}
                            schoolName="Instituto Marcílio Dias"
                            schoolDescription="Técnica em Edificações"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2014}
                            endYear={2015}
                            jobName="Instituto Marcílio Dias"
                            jobDescription="Técnica em Edificações"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills
                            startYear={2014}
                            endYear={2015}
                            jobName="Instituto Marcílio Dias"
                            jobDescription="Técnica em Edificações"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }}

    export default Resume;