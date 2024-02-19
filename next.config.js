/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images:{
        domains:[
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "lh3.google.com"
        ]
    }
}

module.exports = nextConfig
