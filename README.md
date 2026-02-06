# 🚌 Kindle Bus

A bus schedule display optimized for Kindle E-ink screens with integrated iCloud calendar events.

## Features

- **Real-time bus departures** for routes 2A (EGHQ ↔ Grosvenor)
- **Live countdown timers** showing exact minutes/seconds until next bus
- **Calendar integration** displaying upcoming events from iCloud calendar
- **E-ink optimized** design with high contrast black and white
- **Click to toggle** between departure and return routes
- **Live clock** showing current local time

## Quick Start

```bash
# Start both servers with one command
./start.sh
```

Then open: http://localhost:8000/index.html

### Manual Start

```bash
# Terminal 1: Calendar proxy
node calendar-proxy.js

# Terminal 2: Web server
python3 -m http.server 8000
```

## Calendar Setup

The app displays events from your iCloud calendar. Due to CORS restrictions, a local proxy server is required.

**See [CALENDAR_SETUP.md](CALENDAR_SETUP.md) for detailed setup instructions.**

## Project Structure

```
├── index.html           # Main application
├── calendar-proxy.js    # Node.js proxy for iCloud calendar
├── start.sh            # Convenience script to start both servers
├── test-calendar.html  # Debug tool for testing calendar fetch
├── CALENDAR_SETUP.md   # Calendar setup documentation
└── package.json        # Node.js project configuration
```

## How It Works

### Bus Schedule
- Maintains static timetables for EGHQ and Grosvenor departures
- Calculates real-time countdowns using corrected local time (+4 hours)
- Highlights the next immediate departure
- Click the bus icon to flip between routes

### Calendar Integration
The app tries multiple strategies to fetch calendar data:
1. Local proxy server (most reliable)
2. Direct fetch (may work on Kindle)
3. Various public CORS proxies (fallback)

The calendar displays up to 4 upcoming events with day, time, and title.

## Kindle Deployment

For deployment to actual Kindle devices:

1. **Option A: Direct Access**
   - The Kindle's experimental browser may allow direct calendar fetching
   - Simply open index.html on the Kindle

2. **Option B: Remote Proxy**
   - Host the calendar proxy on a server (VPS, Raspberry Pi, etc.)
   - Update the proxy URL in index.html line ~268
   - Transfer index.html to Kindle

3. **Option C: Serverless Proxy**
   - Deploy proxy logic to Cloudflare Workers or Vercel
   - Update proxy URL in index.html
   - Transfer index.html to Kindle

## Customization

### Change Bus Route
Edit the schedule arrays in index.html:
```javascript
const scheduleEGHQ = ["0:15", "0:35", ...];
const scheduleGrosvenor = ["0:43", "1:03", ...];
```

### Change Calendar URL
Update the `icalUrl` variable in both:
- index.html (line ~268)
- calendar-proxy.js (line 5)

### Adjust Refresh Intervals
```javascript
setInterval(updateBoard, 1000);     // Bus schedule (1 second)
setInterval(fetchCalendar, 300000); // Calendar (5 minutes)
```

## Requirements

- **Node.js** (for calendar proxy)
- **Python 3** (for local web server)
- Modern web browser (for testing)
- Kindle device with experimental browser (for production)

## Troubleshooting

### Calendar Not Loading

1. Check console logs (F12 in browser)
2. Verify proxy is running: `curl http://localhost:3001/calendar`
3. Test direct iCloud URL: `curl -L [your-calendar-url]`
4. Review [CALENDAR_SETUP.md](CALENDAR_SETUP.md)

### Bus Times Wrong

Check the `getCorrectedDate()` function - it adds 4 hours to local time. Adjust as needed for your timezone.

## License

MIT
