var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "us-east-1"
});

console.log("Importing menu links into DynamoDB. Please wait.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var menuLinks =
    JSON.parse(fs.readFileSync('../components/data/menu_links.json', 'utf8'));

menuLinks.forEach(function(menuLink) {
    var params = {
        TableName: "MenuLinks",
        Item: {
            "class": menuLink.class,
            "href": menuLink.href,
            "text": menuLink.text
        }
    };

    dynamodb.put(params, function(err, data) {
       if (err)
           console.error("Unable to add menu link", menuLink.text, ". Error JSON:", JSON.stringify(err, null, 2));
       else
           console.log("PutItem succeeded:", menuLink.text);
    });
});