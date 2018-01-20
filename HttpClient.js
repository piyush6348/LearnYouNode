
const http = require('http');

var url = process.argv[2];

function onResponse(response){
    /*

    the response object is a Node Stream object. You can treat Node
  Streams as objects that emit events. The three events that are of most
  interest are: "data", "error" and "end". You listen to an event like so:

     response.on("data", function (data) {  })

    The "data" event is emitted when a chunk of data is available and can be
    processed. The size of the chunk depends upon the underlying data source.

        The response object / Stream that you get from http.get() also has a
    setEncoding() method. If you call this method with "utf8", the "data"
    events will emit Strings rather than the standard Node Buffer objects
    which you have to explicitly convert to Strings.
    */

    response.on("data",function (data) {
        console.log(data.toString());
    })
}

http.get(url,onResponse);
/*
    Original Sol

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)

 */