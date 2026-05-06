<div align="center">

 # 🚌 Kindle Bus 🟡

**A minimalist web app for bus schedules, reimagined as a retro arcade game for the Kindle Paperwhite's Experimental Browser.**

![Kindle Bus App Screenshot](https://via.placeholder.com/600x800.png?text=Kindle+Bus+Screenshot)

</div>

---

> "Waka-waka-wait for the next bus!"

This app transforms a simple bus schedule into a fun, high-contrast interface, designed from the ground up for the unique constraints of e-ink displays.

## ✨ Features

-   **Kindle Optimized:** High-contrast, single-screen layout that fits perfectly on a Kindle Paperwhite, eliminating the need for scrolling and reducing screen flash.
-   **Live Countdown:** A large, clear countdown timer shows exactly when the next bus is due, down to the second.
-   **Timezone-Aware:** Automatically calculates timings based on the schedule's timezone (UTC+4), not the device's, ensuring accuracy anywhere in the world.
-   **Gamified Progress:** A "Bus-Man" (Pac-Man) eats pellets around the screen border, with his position indicating the real-time progress towards the next departure.
-   **Dynamic Schedule:** The view automatically centers on the next bus, showing the two previous and two upcoming times for quick reference.
-   **Simple Stop Selection:** Instantly toggle between your most frequent stops with large, easy-to-tap buttons.
-   **Battery-Saving Toggle:** A custom, ghost-themed toggle lets you disable the animation to conserve your Kindle's battery life.

---

## 🚀 How to Use

1.  Open the **Experimental Browser** on your Kindle.
2.  Navigate to **http://kindle.crewbus.online/**
3.  Bookmark the page for easy access!

---

## 🔧 Customization

All schedule data is self-contained within `index.html`. This makes it easy to fork and adapt for any route.

-   **To change the schedule:** Open `index.html` and find the `routeData` variable inside the `<script>` tag. You can edit the `dataStr` with the new pipe-and-comma-separated timings.
-   **To change the stops:** Modify the `stops` array within the `routeData` object. Remember to update the `onclick="setStop(index)"` values on the toggle buttons to match the new array indices.

```javascript
var routeData = {
    name: "Route 5",
    stops: ['HQ (Dep)', 'Sarab 1', 'Safa Twr', 'Sarab 5', 'Sarab 3', 'Sarab 2', 'Sarab 4', 'HQ (Arr)'],
    dataStr: "00:05,00:30,..." // <-- EDIT THIS
};
```
