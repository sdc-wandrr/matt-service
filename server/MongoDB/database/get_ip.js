const AWS = require('aws-sdk');
const credentials = require('./api_keys');

const awsConfig = { credentials };

AWS.config = new AWS.Config(awsConfig);
AWS.config.update({ region: 'us-west-1' });

const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });
const params = { InstanceIds: ['i-047b6c2cdd4d0d09c'] };

const getIPAddress = () => new Promise((resolve, reject) => {
  ec2.describeInstances(params, (err, data) => {
    if (err) {
      reject((err));
    } else {
      const instanceIp = data.Reservations[0].Instances[0].PublicIpAddress;
      resolve(instanceIp);
    }
  });
});

module.exports = getIPAddress;
