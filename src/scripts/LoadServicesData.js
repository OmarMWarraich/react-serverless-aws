var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "us-east-1"
});

console.log("Importing services into DynamoDB. Please wait.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var services =
    JSON.parse(fs.readFileSync('../components/data/services.json', 'utf8'));

services.forEach(function(service) {
    var params = {
        TableName: "Services",
        Item: {
            "name":  service.name,
            "description": service.description
        }
    };

    dynamodb.put(params, function(err, data) {
       if (err)
           console.error("Unable to add service", service.name, ". Error JSON:", JSON.stringify(err, null, 2));
       else
           console.log("PutItem succeeded:", service.name);
    });
});