// Optional script to automatically acquire public ip for aws instances.
const AWS = require('aws-sdk');
const {
  accessKeyId,
  secretAccessKey,
  instanceId,
  region,
} = require('./api_keys');

const awsConfig = { accessKeyId, secretAccessKey };

AWS.config = new AWS.Config(awsConfig);
AWS.config.update({ region });

const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });
const params = { InstanceIds: [instanceId] };

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
