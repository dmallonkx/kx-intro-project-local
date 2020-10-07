const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-2'});
//const dynamodb = new AWS.DynamoDB({endpoint: 'http://localhost:8080'});
const dynamodb = new AWS.DynamoDB();
 
exports.handler = async (event) => {
  const { body } = event;
  try {
    const { bookDate, fName, lName } = JSON.parse(body);
    if ( !bookDate || !fName || !lName) {
      return {
        statusCode: 403,
        body: 'fName and lName and BookDate are required!'
      }
    }
 
    await dynamodb.putItem({
      TableName: 'bookTable',
      Item: {
        partKey:  {S: 'booked' },
        bookDate: { S: bookDate },
        fName: { S: fName },
        lName: { S: lName },
      }
    }).promise();
    return {
       statusCode: 200,
       body: 'Message posted on board!',
    }

  } catch (err) {
    console.log(err);
    return {
       statusCode: 500,
       body: 'Something went wrong :(',
      
      
    }
  }

};
