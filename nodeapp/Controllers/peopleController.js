const request = require('request');

exports.getallpeoplename = async (req, res, next) => {
    console.log("into res")
        try{
            request('https://swapi.dev/api/people/', function (error, response, body) {
               // console.log(body);
              if (!error && response.statusCode == 200) {
                var jsonContent = JSON.parse(body);
                var aa = console.log(jsonContent);
                console.log("log of the jsoncontent"+jsonContent.results[0].name);
                for(var i = 0; i < jsonContent.results.length; i++)
                {
                    if(jsonContent.results[i].name == req.params.peoplename)
                    {
                        console.log("log of the jsoncontent"+jsonContent.results[i].name);
                        res.json(jsonContent.results[i])
                    }
                }
                res.json(aa);
              }
            });
            
        } catch (err) {
            res.json({ message: err });
        }
}


exports.getPeopleById = async (req, res, next) => {
        try{
            var id = req.params.peopleId;
            request('https://swapi.dev/api/people/'+id, function (error, response, body) {
              if (!error && response.statusCode == 200) {
                console.log(body);
                res.json(body);
              }
            });
            
        } catch (err) {
            res.json({ message: err });
        }
}



exports.getallpeople = async (req, res, next) => {
    try{
        console.log("into the all");
        var name = req.params.peoplename;
        request('https://swapi.dev/api/people/', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
          }
        });
        
    } catch (err) {
        res.json({ message: err });
    }
}

return exports