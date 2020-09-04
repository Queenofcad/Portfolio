import React, {Component} from 'react';
import { Tabs } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.states = { activeTab: 0};
    }

    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>UI & UX</Tab>
                <Tab>HTML/CSS/JavaScript</Tab>
                <Tab>React</Tab>
            </Tabs>
            <section>
                <div className="content">Content for the tab: {this.state.activeTab}</div>
            </section>
        </div>
        )
    }}

    export default Projects;