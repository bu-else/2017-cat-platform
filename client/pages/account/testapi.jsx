// require the module
const React = require('react');
const __DEV__ = 'https://www.assessmentcenter.net/ac_api/2014-01/';
const USER_ID = "3F82B476-30F1-4419-8FA5-253EC937483D";
const TOKEN = "92F22069-1A32-4224-BA14-25431DE7F241";


class TestAPI extends React.Component {

    constructor() {
        super();
        this.state = {
            pictures: [],
    };
    }

componentDidMount() {

        var myHeaders = new Headers();

        myHeaders.append('Host','www.assessmentcenter.net');
        myHeaders.append('Connection','keep-alive');
        myHeaders.append('Content-Length','0');
        myHeaders.append('Accept','application/json, text/javascript, */*; q=0.01');
        myHeaders.append('Origin','https://www.assessmentcenter.net');
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        myHeaders.append('Authorization', 'Basic M0Y4MkI0NzYtMzBGMS00NDE5LThGQTUtMjUzRUM5Mzc0ODNEOjkyRjIyMDY5LTFBMzItNDIyNC1CQTE0LTI1NDMxREU3RjI0MQ==');
        myHeaders.append('Referer','https://www.assessmentcenter.net/ac_api/demo/defaultv2.htm');
        myHeaders.append('Accept-Encoding','gzip, deflate, br');
        myHeaders.append('Accept-Language','en-US,en;q=0.8,da;q=0.6');


        var myInit = {  method: 'POST',
                        headers: myHeaders,
                        cache: 'false',
                        dataType: 'json',
                        };
        var myRequest = new Request('"https://www.assessmentcenter.net/ac_api/2014-01/Forms/.json', myInit);

        fetch(myRequest)
            .then(function(response) {
                if (response.status == 200) return response.json();
                else throw new Error('Something went wrong on api server!');
            })
            .then(function(response){
                console.debug(response);
            })
            .catch(function(error){
                console.error(error);
        })

}
    render () {
        return (
            <div className ="container1">
                <div className="container2">
                </div>
            </div>
        )
    }

}


module.exports = TestAPI;