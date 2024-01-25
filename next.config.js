/** @type {import('next').NextConfig} */

const fs = require('fs');
const https = require('https');

const nextConfig = {
    server: {
        https: {
            key: fs.readFileSync('./localhost.key'),
            cert: fs.readFileSync('./localhost.crt'),
        }
    }
};

module.exports = nextConfig
