# Kindle Bus - Calendar Setup

## Problem
The iCloud calendar requires CORS headers that aren't available when fetching directly from the browser. Public CORS proxies are unreliable or slow.

## Solution
Use a local Node.js proxy server to fetch the calendar data.

## Setup Instructions

### 1. Start the Calendar Proxy
```bash
node calendar-proxy.js
```

This starts a proxy server on `http://localhost:3001`

### 2. Start the Web Server
```bash
python3 -m http.server 8000
```

### 3. Open the Page
Navigate to: `http://localhost:8000/index.html`

The calendar should now load successfully!

## How It Works

The `index.html` tries multiple strategies to fetch the calendar:
1. **Local proxy** (port 3001) - Most reliable, used when running locally
2. **Direct fetch** - May work on Kindle browser
3. **Public CORS proxies** - Fallback options (slower, less reliable)

The local proxy (`calendar-proxy.js`) fetches the iCloud calendar with proper headers and serves it with CORS headers enabled.

## For Kindle Deployment

If deploying to a Kindle device:
- The direct fetch method may work on the Kindle's experimental browser
- Alternatively, host the proxy on a remote server and update the proxy URL in index.html
- Or use a serverless function (Cloudflare Workers, Vercel, etc.) as the proxy

## Troubleshooting

Check browser console (F12) for detailed logs showing which fetch strategy succeeded.

The console will show:
- `Trying strategy X...`
- `✓ Calendar loaded successfully via strategy X`

Or if all fail:
- `All fetch strategies failed`
