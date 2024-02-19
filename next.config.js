/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                hostname: 'avatars.githubusercontent.com',
                port: '',
            },
            {
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                hostname: 'lh3.google.com',
                port: '',
            },
          ],
    }
}

module.exports = nextConfig
