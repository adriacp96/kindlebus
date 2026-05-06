<div align="center">

 # 🚌 Bus-Man 🟡

**A minimalist, single-page web app designed to display crew bus schedules on the Kindle Paperwhite's Experimental Browser.**

![Bus-Man App Preview](https://via.placeholder.com/600x800.png?text=Kindle+App+Screenshot)

</div>

---

## ✨ Core Features

This app is built from the ground up with the unique constraints of e-ink displays in mind.

-   **Kindle Optimized:** High-contrast, single-screen layout that fits perfectly on a Kindle Paperwhite, eliminating the need for scrolling and reducing screen flash.
-   **Live Countdown:** A large, clear countdown timer shows exactly when the next bus is due, down to the second.
-   **Dynamic Schedule View:** The interface automatically syncs with the device's time to show the 2 most recent departures, the upcoming bus, and the next 2 scheduled buses.
-   **Gamified Progress Bar:** A "Bus-Man" (Pac-Man) eats pellets around the screen border, with his position indicating the progress towards the next departure.
-   **Simple Stop Selection:** Easily toggle between your most frequent stops (e.g., HQ and Sarab 4) with a single tap.
-   **Animation Toggle:** A Pac-Man-themed toggle allows you to enable or disable the border animation to save battery.
-   **Game Over Sequence:** A classic, block-filling animation appears on screen for the final 3 seconds of the countdown.

---

## 🚀 How to Use

1.  Open the **Experimental Browser** on your Kindle.
2.  Navigate to **http://kindle.crewbus.online/**
3.  Bookmark the page for easy access!

---

## 🔧 Customization

All schedule data is stored directly in the `index.html` file.

-   **To change the schedule:** Open `index.html` and find the `routeData` variable inside the `<script>` tag. You can edit the `dataStr` with the new pipe-and-comma-separated timings.
-   **To change the stops:** Modify the `stops` array within the `routeData` object. Remember to update the `onclick="setStop(index)"` values on the toggle buttons to match the new array indices.

```javascript
var routeData = {
    name: "Route 5",
    stops: ['HQ (Dep)', 'Sarab 1', 'Safa Twr', 'Sarab 5', 'Sarab 3', 'Sarab 2', 'Sarab 4', 'HQ (Arr)'],
    dataStr: "00:05,00:30,..." // <-- EDIT THIS
};
```
