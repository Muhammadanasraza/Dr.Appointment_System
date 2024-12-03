/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns : [
            {
                hostname : "img.freepik.com"
            },
            {
                hostname : "lh3.googleusercontent.com"
            }
            ,
            {
                hostname : "media.istockphoto.com"
            }
        ]
    }
};

export default nextConfig;
