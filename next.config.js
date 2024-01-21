/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
      YTAPIKEY: process.env.YTAPIKEY,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      MONGODB_URI: process.env.MONGODB_URI,
      BCRYPT_SALT: process.env.BCRYPT_SALT
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.imgur.com'
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          }
        ],
      }
}

module.exports = nextConfig
