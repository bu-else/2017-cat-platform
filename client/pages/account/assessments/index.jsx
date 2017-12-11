'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');
//const Button = require('react-bootstrap/lib/Button');
const ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
//const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const DropdownButton = require('react-bootstrap/lib/DropdownButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const Helmet = ReactHelmet.Helmet;
const TestAPI = require('../testapi');
const url = 'http://128.31.24.189:8001/api/survey/start/';
const fetch = require('fetch-api');
const axios = require('axios');

class AssessPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const buttonsInstance = (
            <ButtonToolbar>
                <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                    <MenuItem eventKey="1">Dr</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
            </ButtonToolbar>

        );



        return (
            <section className="section-about container">
                <Helmet>
                    <title>Start Assessment</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">Take an assessment</h1>
                            <div>
                                <h4>Instructions</h4>
                                <li>Select List Forms to display available instruments.</li>
                                <li>Select an instrument and then click the 'Order Form' button to order the instrument.</li>
                                <li>Click the 'Administer Form' button to start the assessment.</li>
                                <li>Refresh page to try another instrument.</li>
                                <li>The 'Display Form' button will preview an instrument (display all items in the instrument).</li>
                            </div>
                        <div className="buttonsInstance">{buttonsInstance}</div>

                         {/*TestAPI component is a child of Index component*/}
                        <TestAPI/>

                    </div>

                        <hr />
                    </div>
            </section>
        );
    }
}


module.exports = AssessPage;
