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
            responses: []
          //  surveyID: '',
          //  userID: ''
        };
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
                })

               // console.log(this.state.responses);

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
                    {this.renderQuestions()}
                </div>
            </div>
        );

    }

    renderQuestions() {

        console.log(this.state.questions);

        console.log(this.state.responses); // the state of responses at a given time

        return _.map(this.state.questions, question => {

            return ( _.map(question.responseOptions, response => {

                var text = response.displayText + " ";

                // currently returning the question multiple times
                // how do i get it to show the question once, and then a list of responses for every question?
                return (
                    <ul key ={response.id}>
                        {question.questionText}
                        {text}
                    </ul>
                );
            }));
        });


    }




    // renderResponseOptions() {
    //
    //     console.log(this.state.responses);
    //     return _.map(this.state.responses, option => {
    //         return(
    //             <li className="list-group-item" key={option.id}>
    //                 <ul>
    //                     {option.displayText}
    //                 </ul>
    //             </li>
    //         );
    //     });
    // }



}


module.exports = TestAPI;

