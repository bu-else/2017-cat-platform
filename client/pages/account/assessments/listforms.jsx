// require the module
const Frisbee = require('frisbee');
const es6promise = require('es6-promise');
const React = require('react');
const __DEV__ = 'https://www.assessmentcenter.net/ac_api/2014-01/';
const USER_ID = "3F82B476-30F1-4419-8FA5-253EC937483D";
const TOKEN = "92F22069-1A32-4224-BA14-25431DE7F241";



class listforms extends React.Component {

    render () {
        es6promise.polyfill();
        // create a new instance of Frisbee
        const api = new Frisbee({
            baseURI:  __DEV__,
            headers: {
                'Accept': 'application/json, text/javascript',
                'Content-Type': 'application/json',
                'Authorization':'Basic M0Y4MkI0NzYtMzBGMS00NDE5LThGQTUtMjUzRUM5Mzc0ODNEOjkyRjIyMDY5LTFBMzItNDIyNC1CQTE0LTI1NDMxREU3RjI0MQ==',
                'Connection':'keep-alive',
                'Content-Length':'0',
                'Host':'www.assessmentcenter.net',
                'Origin':'https://www.assessmentcenter.net',
                'X-Requested-With':'XMLHttpRequest'
            }
        });

        async
        function makeRequests() {

            // log in to our API with a user/pass
            try {
                // make the request
                let res = await
                    api.auth.post('Forms/.json');

                console.log('response', res.body);

                // handle HTTP or API errors
                if (res.err) throw res.err;

                // set basic auth headers for all
                // future API requests we make
                api.auth(res.body.api_token);

            } catch (err) {
                throw err;
            }
        }

        return (
            makeRequests()
        );

    }
}

module.exports = listforms;