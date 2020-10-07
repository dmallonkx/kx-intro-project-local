const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-2'});
//const dynamodb = new AWS.DynamoDB({endpoint: 'http://localhost:8080'});
const dynamodb = new AWS.DynamoDB();

exports.handler = async () => {
  try {
    const result = await dynamodb.query({
      TableName: 'bookTable',
      KeyConditionExpression: 'partKey = :partKey',
      ScanIndexForward: false,
      Limit: 10,
      ExpressionAttributeValues: {':partKey': { S: 'booked'}}
    }).promise();
 
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result.Items),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Something went wrong :(',
    }
  }
};