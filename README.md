# 🚌 Kindle Bus

A bus schedule display optimized for Kindle E-ink screens with live route tracking through Dubai.

## Features

- **Real-time bus departures** for routes 2A (EGHQ ↔ Grosvenor)
- **Live countdown timers** showing exact minutes/seconds until next bus
- **Google Maps-style route map** with real GPS coordinates and live bus position
- **Realistic Dubai road visualization** following major highways and landmarks
- **E-ink optimized** design with high contrast black and white
- **Click to toggle** between departure and return routes
- **Live clock** showing current local time

## Quick Start

```bash
# Start web server
python3 -m http.server 8000
```

Then open: http://localhost:8000/index.html

## Route Information

**Route 2A** connects two key locations in Dubai:

- **EGHQ** (Emirates Group Headquarters): 25.2417°N, 55.3660°E  
- **Grosvenor**: 25.2071°N, 55.2645°E

**Total distance:** ~10.2 km  
**Journey time:** ~28 minutes

The route follows major Dubai roads:
- **Airport Road** - Starting from EGHQ near Dubai International Airport
- **Al Maktoum Road** - Through Deira and crossing the creek
- **Sheikh Zayed Road** - Dubai's main highway heading south

Passing through key areas:
- Airport Terminal 1
- Deira City Centre  
- Al Maktoum Bridge
- Burj Khalifa area
- Business Bay

## Project Structure

```
├── index.html           # Main application with live map
├── README.md           # This file
└── (legacy files from calendar integration development)
```

## How It Works

### Bus Schedule
- Maintains static timetables for EGHQ and Grosvenor departures
- Calculates real-time countdowns using corrected local time (+4 hours)
- Highlights the next immediate departure
- Click the bus icon to flip between routes

### Live Route Map
The right panel displays a Google Maps-style route showing:
- **Real GPS coordinates** from Google Maps for accurate positioning
- **Realistic road layout** following Dubai's actual street network
- **Major highways** (Airport Rd, Al Maktoum Rd, Sheikh Zayed Rd)
- **Live bus position** calculated from departure times and journey duration
- **7 major stops** along the route with clear markers
- **Landmark indicators** (Burj Khalifa, Deira, Arabian Gulf)
- **Status updates** indicating if bus is "En route" or "At station"
- **E-ink optimized** black and white styling inspired by Google Maps

The bus icon moves smoothly along the realistic road path in real-time, showing its approximate position between stops.

## Kindle Deployment

For deployment to actual Kindle devices:

1. Transfer `index.html` to your Kindle
2. Open it with the Kindle's experimental browser
3. The app works entirely offline (no server needed on Kindle)
4. Schedule updates in real-time based on local device time

## Customization

### Change Bus Route Stops

Edit the `routeStops` array in index.html (~line 280):
```javascript
const routeStops = [
    { name: 'EGHQ', position: 0, coords: { lat: 25.2417, lng: 55.3660 }, marker: 'A' },
    { name: 'Airport Terminal 1', position: 0.12, coords: {...}, marker: '' },
    // Add or modify stops...
];
```

### Update Street Names

Edit the `routeStreets` array to show different road names:
```javascript
const routeStreets = [
    { segment: 0.06, name: 'Airport Rd' },
    { segment: 0.38, name: 'Al Maktoum Rd' },
    { segment: 0.72, name: 'Sheikh Zayed Rd' }
];
```

### Update GPS Coordinates

The real coordinates are defined at the top of the map section:
```javascript
const EGHQ_COORDS = { lat: 25.2417461, lng: 55.3659608 };
const GROSVENOR_COORDS = { lat: 25.2070978, lng: 55.264489 };
```

### Change Bus Schedules

Edit the schedule arrays:
```javascript
const scheduleEGHQ = ["0:15", "0:35", ...];
const scheduleGrosvenor = ["0:43", "1:03", ...];
```

### Adjust Journey Time

Change the estimated travel time (in minutes):
```javascript
const JOURNEY_TIME = 28; // minutes
```

### Modify Update Frequency
```javascript
setInterval(updateBoard, 1000);         // Bus schedule (1 second)
setInterval(updateBusPosition, 1000);   // Map position (1 second)
```

## Requirements

- **Python 3** (for local testing web server)
- Modern web browser (for testing)
- Kindle device with experimental browser (for production)

## Troubleshooting

### Map Not Displaying

1. Check browser console (F12) for JavaScript errors
2. Ensure SVG is rendering correctly
3. Verify `pathPoints` is being calculated

### Bus Position Wrong

Check the `getCorrectedDate()` function - it assumes a +4 hour timezone offset. Adjust as needed for your timezone.

### Times Not Updating

Verify JavaScript intervals are running and not blocked by browser power-saving features.

## License

MIT
