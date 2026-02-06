#!/usr/bin/env node

const http = require('http');
const https = require('https');

const CALENDAR_URL = 'https://p108-caldav.icloud.com/published/2/MTUxMDYwNTYxNDE1MTA2MOcLt9DeC6aDOBzlZCUDejDdugx2IBT9HDhJA6jGIXwDHsR2_c0JH71EnIqBSkhBPTX-OE44UuANI0LecwDIOcg';
const PORT = 3001;

const server = http.createServer((req, res) => {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    if (req.url === '/calendar' && req.method === 'GET') {
        console.log('Fetching calendar...');
        
        https.get(CALENDAR_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/calendar,*/*'
            }
        }, (proxyRes) => {
            console.log('Status:', proxyRes.statusCode);
            
            let data = '';
            proxyRes.on('data', chunk => data += chunk);
            proxyRes.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/calendar' });
                res.end(data);
                console.log('Calendar sent, length:', data.length);
            });
        }).on('error', (err) => {
            console.error('Error:', err.message);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error fetching calendar');
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`✓ Calendar proxy running on http://localhost:${PORT}`);
    console.log(`  Use: http://localhost:${PORT}/calendar`);
});
