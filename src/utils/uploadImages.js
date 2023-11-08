const aws = require('../aws')
const dotenv = require('dotenv')

dotenv.config()

const uploadImages = async (imageData) => {

    if(!imageData){
        return null
    }

    const arquivo = await aws.upload({
        Bucket: process.env.BUCKET_NAME,
        Key: `imagens/${imageData.originalname}`,
        Body: imageData.buffer,
        ContentType: imageData.mimetype
      }).promise()
    
      const img = {
        url:arquivo.Location,
        path: arquivo.Key
      }

      return img.url
}

module.exports = uploadImages