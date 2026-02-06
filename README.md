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

**Route 2A** follows the actual Google Maps route in Dubai:

- **EGHQ** (Emirates Group Headquarters): 25.2417°N, 55.3660°E  
- **Pink Building** (Trade Center First - waypoint): 25.2098°N, 55.2731°E
- **Grosvenor** (Final destination): 25.2232°N, 55.2802°E

**Total distance:** 14.9 km  
**Journey time:** ~28 minutes  
**Main highway:** E11 (Sheikh Zayed Road)

The route follows:
- **D89** - From EGHQ/Airport area
- **E11 (Sheikh Zayed Road)** - Main highway southwest through Dubai
- **Financial Centre Road** - Final approach to destination

**Key waypoints:**
- Airport Exit
- Al Quoz
- Business Bay
- DIFC (Dubai International Financial Centre)
- Pink Building (Trade Center First)
- Emirates Towers area
- Grosvenor House

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
The map displays the actual Google Maps route:
- **Real GPS coordinates** from Google Maps directions API
- **Exact highway path** following D89 and E11 (Sheikh Zayed Road)
- **Three-point route** - EGHQ → Pink Building (waypoint) → Grosvenor
- **Live bus position** calculated from departure times and 28-minute journey
- **8 major stops** along the 14.9km route with clear markers
- **Landmark indicators** (Trade Centre, DIFC, Business Bay, Pink Building)
- **Status updates** showing if bus is "En route" or "At station"
- **E-ink optimized** black and white styling inspired by Google Maps

The route accurately shows the loop pattern: southwest on E11 to Pink Building, then back northeast to Grosvenor.

## Kindle Deployment

For deployment to actual Kindle devices:

1. Transfer `index.html` to your Kindle
2. Open it with the Kindle's experimental browser
3. The app works entirely offline (no server needed on Kindle)
4. Schedule updates in real-time based on local device time

## Customization

### Change Bus Route Stops

Edit the `routeStops` array in index.html:
```javascript
const routeStops = [
    { name: 'EGHQ', position: 0, coords: EGHQ_COORDS, marker: 'A' },
    { name: 'Airport Exit', position: 0.08, coords: {...}, marker: '' },
    { name: 'Pink Building', position: 0.85, coords: PINK_BUILDING_COORDS, marker: 'Via' },
    { name: 'Grosvenor', position: 1.0, coords: GROSVENOR_COORDS, marker: 'B' }
    // Add or modify stops...
];
```

### Update Street Names

Edit the `routeStreets` array to show different road names:
```javascript
const routeStreets = [
    { segment: 0.05, name: 'D89' },
    { segment: 0.50, name: 'E11 - Sheikh Zayed Rd' },
    { segment: 0.88, name: 'Financial Centre Rd' }
];
```

### Update GPS Coordinates

The real coordinates are defined at the top of the map section:
```javascript
const EGHQ_COORDS = { lat: 25.2417461, lng: 55.3659608 };
const PINK_BUILDING_COORDS = { lat: 25.2097705, lng: 55.2731029 };
const GROSVENOR_COORDS = { lat: 25.2231508, lng: 55.2801991 };
```

### Change Bus Schedules

Edit the schedule arrays:
```javascript
const scheduleEGHQ = ["0:15", "0:35", ...];
const scheduleGrosvenor = ["0:43", "1:03", ...];
```

### Adjust Journey Time

Change the travel time based on actual conditions:
```javascript
const JOURNEY_TIME = 28; // minutes (Google Maps: 14.9 km via E11)
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
