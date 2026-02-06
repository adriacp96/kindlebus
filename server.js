const express = require("express");

const app = express();
const PORT = process.env.PORT || 8787;

const ICAL_URL =
  "https://p108-caldav.icloud.com/published/2/MTUxMDYwNTYxNDE1MTA2MOcLt9DeC6aDOBzlZCUDejDdugx2IBT9HDhJA6jGIXwDHsR2_c0JH71EnIqBSkhBPTX-OE44UuANI0LecwDIOcg";

app.get("/calendar.ics", async (req, res) => {
  try {
    const r = await fetch(ICAL_URL, {
      headers: {
        // Some endpoints behave better with a normal UA
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/calendar,*/*"
      }
    });

    if (!r.ok) {
      res.status(r.status).send(`Upstream error: HTTP ${r.status}`);
      return;
    }

    const text = await r.text();

    res.setHeader("Content-Type", "text/calendar; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=60");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(text);
  } catch (e) {
    res.status(500).send("Relay error: " + e.message);
  }
});

app.listen(PORT, () => console.log("ICS relay on port", PORT));
