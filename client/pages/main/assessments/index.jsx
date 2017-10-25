'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');


const Helmet = ReactHelmet.Helmet;


class AssessPage extends React.Component {
    render() {

        return (
            <section className="section-about container">
                <Helmet>
                    <title>About</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">Take an assessment</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Take an assessment</h4>
                                <p>
                                    Choose the test type, and begin.
                                </p>
                            </div>
                        </div>
                        <hr />
                        {/*<div className="media">*/}
                        {/*<div className="pull-left">*/}
                        {/*<div className="media-object">*/}
                        {/*<i className="fa fa-camera-retro fa-4x"></i>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="media-body">*/}
                        {/*<h4 className="media-heading">Mathew DiCaprio</h4>*/}
                        {/*<p>*/}
                        {/*Seitan cloud bread messenger bag small*/}
                        {/*batch. Green juice 90s banjo activated*/}
                        {/*charcoal wolf. Subway tile scenester*/}
                        {/*shoreditch, quinoa edison bulb kogi*/}
                        {/*microdosing cliche DIY tumeric meh.*/}
                        {/*</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        <hr />
                        {/*<div className="media">*/}
                        {/*<div className="pull-left">*/}
                        {/*<div className="media-object">*/}
                        {/*<i className="fa fa-camera-retro fa-4x"></i>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="media-body">*/}
                        {/*<h4 className="media-heading">Nick Jackson</h4>*/}
                        {/*<p>*/}
                        {/*Salvia man braid four dollar toast*/}
                        {/*chicharrones, selvage hell of selfies.*/}
                        {/*Try-hard crucifix cray freegan, viral*/}
                        {/*fingerstache aesthetic. Cronut butcher*/}
                        {/*irony brooklyn kitsch thundercats.*/}
                        {/*</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </section>
        );
    }
}


module.exports = AssessPage;
