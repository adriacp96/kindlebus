#!/bin/bash

echo "🚀 Starting Kindle Bus servers..."
echo ""

# Start calendar proxy
echo "📅 Starting calendar proxy on port 3001..."
node calendar-proxy.js &
PROXY_PID=$!

# Wait a bit for proxy to start
sleep 1

# Start web server
echo "🌐 Starting web server on port 8000..."
python3 -m http.server 8000 &
WEB_PID=$!

echo ""
echo "✅ Servers running!"
echo "   Calendar Proxy: http://localhost:3001/calendar"
echo "   Web App:        http://localhost:8000/index.html"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for Ctrl+C
trap "echo ''; echo '🛑 Stopping servers...'; kill $PROXY_PID $WEB_PID 2>/dev/null; exit" INT
wait
