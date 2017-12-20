// require the module
const React = require('react');
const url = 'http://128.31.24.189:8001/api/survey/start/';
const axios = require('axios');
const _ = require('underscore');

class TestAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            responses: [],
            selectedOption: [],
            score: 0
          //  surveyID: '',
          //  userID: ''
        };
        //React components using ES6 classes no longer autobind this to non React methods.
        this.handleFormReset = this.handleFormReset.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        // this is where you make the axios call

        axios.get(url)
            .then(({ data })=> {
                console.log(data); // entire json array
                this.setState(
                    {questions: data.questions}
                );

                _.map(this.state.questions, question => {
                    this.setState({responses: question.responseOptions });
                });

                _.map(this.state.responses, response => {
                    this.setState({selectedOption: response.value});
                });


            })
            .catch(function(error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

    }

    render () {

        return (
            <div className ="container1">
                <div className="container2">
                    <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
                        {this.renderQuestions()}
                        <button className="btn btn-default" type="submit">Submit Responses</button>
                        <button className="btn btn-default" type="reset">Reset Responses</button>
                    </form>

                    {/*{this.renderRadioButtons()}*/}

                </div>
            </div>
        );

    }

     // handleOptionChange(changeEvent) {
    //     this.setState({
    //         selectedOption: changeEvent.target.value
    //     });
    // }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        console.log('You have selected to submit');
        this.setState({
            score: 100
        });
        console.log(this.state.score);
    }

    handleFormReset(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        console.log('You have selected to reset');
        this.setState({
            selectedOption: []
        });
        console.log(this.state.selectedOption);
    }


    renderQuestions() {

        console.log(this.state.questions);

        console.log(this.state.responses); // the state of responses at a given time

        return _.map(this.state.questions, question => {

            var question_text= question.questionText;

            //var question_id = question.tabindex;

            return ( _.map(question.responseOptions, response => {

                var response_text = response.displayText;
                var response_id = response.id;

                // currently returning the question multiple times
                // how do i get it to show the question once, and then a list of responses for every question?
                return (

                    <ul><label>{question_text}</label>
                        <ul key ={response_id}></ul>

                      {/*//  <input type='radio' value ="response option">{response_text}</input>*/}
                        <ul>
                            <button type = "button"ç>{response_text}</button>
                        </ul>
                    </ul>

                );
            }));
        }

        );


    }
}


module.exports = TestAPI;

