var request = require('request');
request.post(
    'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13/',
    { form: { 
       client_id : 'pfndfhoefngogglandagkdjllicpmkjb', 
       client_secret  : '1gLu0cqLabUSxe3Zh7idzTT7LQgfqwyiPLLZpKjsSYo=', 
       scope  : 'http://api.microsofttranslator.com', 
       grant_type  : 'client_credentials' 
    } },
    function (error, response, body) {
        console.log(response.statusCode +"   "+ error);
        if (!error && response.statusCode == 200) {
            var jsBody = JSON.parse(body);
            console.log(jsBody.access_token);
            
        }
        else
        {
            console.log('error in request');            
        }
    }
);
