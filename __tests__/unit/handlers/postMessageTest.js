const lambda = require('../../../src/handlers/postMessage.js');
const lambdaGet = require('../../../src/handlers/getMessages.js');
const chai = require('chai');
const expect = chai.expect;
const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-2'});


describe('Test for postMessage', function () {
    it('Verifies successful response', async () => {
        const event = {body : JSON.stringify({'bookDate': '29/02/1010', 'fName': 'Ann', 'lName': 'FAY' })};       
        const result = await lambda.handler(event)
        
        expect(result).to.be.an('object');
        
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
        

        //let response = JSON.parse(result.body);

        //expect(result.body).to.be.equal('Message posted on board!');
        
    
    });
});

describe('Test for getMessage', function () {
        it('Verifies successful get response', async () => {
            const result2 = await lambdaGet.handler()
    
            expect(result2).to.be.an('object');

            expect(result2.statusCode).to.equal(200);
            expect(result2.body).to.be.an('string');

            
    
            //let getResponce = JSON.parse(result.body);
    
            //expect(JSON.stringify(result2.body)).to.be.equal(JSON.stringify(result2.Items));
            
        
        });
    });
  