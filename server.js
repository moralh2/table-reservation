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
  }
]

var waitlist = [
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
    }
  ]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  })

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations)
})

// Displays all waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist)
})

// Create Reservation - takes in JSON input
app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  newReservation.uniqueId = newReservation.uniqueId.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  if (reservations.length <= 5) {
    reservations.push(newReservation);
    res.json(reservations)

  } else {
    waitlist.push(newReservation);
    res.json(waitlist)
  }

})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})
