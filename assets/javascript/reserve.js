$("#make-reservation").on("click", function (event) {
    event.preventDefault()
    var newReservation = {
        uniqueId: $("#uniqueId").val().trim(),
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim()
    }
    $.post("/api/reservation", newReservation).then(function () { 
        window.location = "tables" 
    })
})