$(document).ready(function () {
    $.get("/api/reservations", function (data) {
        if (data) {
            reservationTable = $('tbody#current-reservations')
            waitlistTable = $('tbody#waiting-list')
            reservationTable.empty()
            waitlistTable.empty()
            for (i = 0; i < data.length; i++) {
                th0 = $('<th>').attr('scope', 'row').text(data[i].uniqueId)
                td1 = $('<td>').text(data[i].name)
                td2 = $('<td>').text(data[i].phone)
                td3 = $('<td>').text(data[i].email)
                tr0 = $('<tr>').append(th0, td1, td2, td3)
                if (i < 5) {
                    reservationTable.append(tr0)
                }
                else {
                    waitlistTable.append(tr0)
                }
            }
        }
    })
})