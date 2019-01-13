// Dependencies
// =============================================================
var express = require("express")
var path = require("path")

// Sets up the Express App
// =============================================================
var app = express()
// Allow Heroku to set port
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Test Data (DATA)
// =============================================================

var reservations = [
    {
        uniqueId: "122",
        name: "Paco",
        phone: "129-999-8888",
        email: "@wepa"
    },
    {
        uniqueId: "123",
        name: "Paca",
        phone: "129-929-8888",
        email: "@wepe"
    },
    {
        uniqueId: "124",
        name: "Anna",
        phone: "120-999-8888",
        email: "@wep2"
    },
    {
        uniqueId: "125",
        name: "Onno",
        phone: "129-229-8888",
        email: "@wep5"
    },
    {
        uniqueId: "126",
        name: "Eddie",
        phone: "120-999-8888",
        email: "@wep3"
    },
    {
        uniqueId: "127",
        name: "Ellen",
        phone: "129-229-8888",
        email: "@wep6"
    }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

// VIEWS
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

// ASSETS - JS
app.get("/tables.js", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/javascript/tables.js"));
})

app.get("/reserve.js", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/javascript/reserve.js"));
})

// API

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
})

// Create Reservation - takes in JSON input
app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    newReservation.uniqueId = newReservation.uniqueId.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    // Push to just on var; control 5+ logic in script
    reservations.push(newReservation);
    res.json(reservations)

})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
