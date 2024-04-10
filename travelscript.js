$(function() {
    $("#date").datepicker({
        dateFormat: "yy-mm-dd"
    });
});

function showBuses() {
    var route = document.getElementById("route").value;
    var date = document.getElementById("date").value;
    var busList = document.getElementById("busList");

    // Clear previous bus listings
    busList.innerHTML = "";

    // Fetch bus timings and prices from server (dummy data for demonstration)
    var busesData = getBusesData(route, date);

    // Display bus timings, prices, and time taken
    busesData.forEach(function(bus) {
        var busDiv = document.createElement("div");
        busDiv.classList.add("bus");
        var busInfo = "<p>Bus Name: " + bus.name + "</p>" +
                      "<p>Departure Time: " + bus.departureTime + "</p>" +
                      "<p>Time Taken: " + bus.timeTaken + "</p>" +
                      "<p>Price: \u20B9" + bus.price + "</p>";
        busDiv.innerHTML = busInfo;
        busList.appendChild(busDiv);
    });
}

// Dummy data for demonstration
function getBusesData(route, date) {
    // Dummy data for demonstration
    if (route === "indore") {
        return [
            { name: "Local Bus", departureTime: "08:00 AM", timeTaken: "3 hours", price: 150 },
            { name: "Chartered Bus", departureTime: "10:00 AM", timeTaken: "2.5 hours", price: 350 },
            { name: "Express Bus", departureTime: "12:00 PM", timeTaken: "2 hours", price: 200 }
        ];
    } else if (route === "bhopal") {
        return [
            { name: "Local Bus", departureTime: "07:30 AM", timeTaken: "1.5 hours", price: 120 },
            { name: "Chartered Bus", departureTime: "09:30 AM", timeTaken: "1 hour", price: 200 },
            { name: "Express Bus", departureTime: "11:30 AM", timeTaken: "45 minutes", price: 180 }
        ];
    } else if (route === "indore_reverse") {
        return [
            { name: "Local Bus (Reverse)", departureTime: "05:00 PM", timeTaken: "3 hours", price: 150 },
            { name: "Chartered Bus (Reverse)", departureTime: "06:30 PM", timeTaken: "2.5 hours", price: 350 },
            { name: "Express Bus (Reverse)", departureTime: "08:00 PM", timeTaken: "2 hours", price: 200 }
        ];
    } else if (route === "bhopal_reverse") {
        return [
            { name: "Local Bus (Reverse)", departureTime: "04:00 PM", timeTaken: "1.5 hours", price: 120 },
            { name: "Chartered Bus (Reverse)", departureTime: "05:30 PM", timeTaken: "1 hour", price: 200 },
            { name: "Express Bus (Reverse)", departureTime: "07:00 PM", timeTaken: "45 minutes", price: 180 }
        ];
    }
}
