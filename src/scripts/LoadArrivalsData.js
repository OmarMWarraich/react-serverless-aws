var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "us-east-1"
});

console.log("Importing services into DynamoDB. Please wait.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var arrivals =
    JSON.parse(fs.readFileSync('../components/data/arrival.json', 'utf8'));

arrivals.forEach(function(arrival) {
    var params = {
        TableName: "Arrivals",
        Item: {
            "title":  arrival.title,
            "description": arrival.description
        }
    };

    dynamodb.put(params, function(err, data) {
       if (err)
           console.error("Unable to add arrival", arrival.title, ". Error JSON:", JSON.stringify(err, null, 2));
       else
           console.log("PutItem succeeded:", arrival.title);
    });
});