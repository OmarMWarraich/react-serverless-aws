var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "us-east-1"
});

console.log("Importing galleries into DynamoDB. Please wait.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleries =
    JSON.parse(fs.readFileSync('../components/data/gallery.json', 'utf8'));

galleries.forEach(function(gallery) {
    var className = gallery.className;
    if (className.trim() === "")
        className = "no_class";

    var params = {
        TableName: "Gallery",
        Item: {
            "src":  gallery.src,
            "alt": gallery.alt,
            "className": className
        }
    };

    dynamodb.put(params, function(err, data) {
       if (err)
           console.error("Unable to add gallery", gallery.src, ". Error JSON:", JSON.stringify(err, null, 2));
       else
           console.log("PutItem succeeded:", gallery.src);
    });
});