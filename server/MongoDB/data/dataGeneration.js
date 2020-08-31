/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb://localhost:27017/imagecarousel',
  { useUnifiedTopology: true },
);

const handleError = (error) => {
  console.log(error);
  client.close();
  process.exit();
};

const writeToMongoDB = async (hostelRecord) => {
  try {
    const imageCarousel = client.db('imagecarousel');
    await imageCarousel.collection('images').insertOne(hostelRecord);
  } catch (error) {
    handleError(error);
  }
};

const generateHostelImages = (hostelID, totalNumberOfImages) => {
  const hostelRecord = { _id: hostelID, images: [] };
  let imageCounter = totalNumberOfImages;
  while (imageCounter > 0) {
    const imageFileName = Math.floor(Math.random() * 1000);
    const imageObj = {};
    const url = `https://sdc-ic.s3-us-west-1.amazonaws.com/File+${imageFileName}.jpg`;
    imageObj.id = imageCounter;
    imageObj.url = url;
    hostelRecord.images.push(imageObj);
    imageCounter -= 1;
  }
  return hostelRecord;
};

const generatePrimaryRecord = async (primaryRecordId, numberOfImagesToAssign) => {
  try {
    const hostelRecord = generateHostelImages(primaryRecordId, numberOfImagesToAssign);
    await writeToMongoDB(hostelRecord);
  } catch (error) {
    handleError(error);
  }
};

const timestampDataGeneration = async (primaryRecordCount = 10000000) => {
  let primaryRecordId = primaryRecordCount;
  let totalWrittenCSVRows = 0;
  client.connect();
  const dataGenStartTime = new Date();
  try {
    while (primaryRecordId > 0) {
      const numberOfImagesToAssign = Math.floor(Math.random() * 25) + 1;
      await generatePrimaryRecord(primaryRecordId, numberOfImagesToAssign);
      primaryRecordId -= 1;
      totalWrittenCSVRows += numberOfImagesToAssign;
    }
    const dataGenFinishTime = new Date();
    console.log(`Total generation time: ${dataGenFinishTime - dataGenStartTime}ms`);
    console.log(`Total data entries: ${totalWrittenCSVRows.toLocaleString()}`);
    client.close();
  } catch (error) {
    handleError(error);
  }
};

timestampDataGeneration();
