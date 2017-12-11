const CatServer = "https://www.assessmentcenter.net/ac_api/2014-01/";
const UserID = "3F82B476-30F1-4419-8FA5-253EC937483D";
const Token="92F22069-1A32-4224-BA14-25431DE7F241";

const internals = {};


internals.applyRoutes = function (CatServer, next) {


    CatServer.route({
        method: "POST",
        path: "Forms/.json",
        config: {
            auth: {

            }
        }


    })

}