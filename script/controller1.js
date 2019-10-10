var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var broker = "wss://test.mosquitto.org:8081/mqtt";

client = mqtt.connect(broker)
client.subscribe("yorong/device/status")

client.on("connect", function () {
  console.log("Successfully connected");
})


function on(){
    client.publish("yorong/device/status", "Turned on: "+dateTime )
    document.getElementById("status").innerHTML = "The device is on!";
    client.on("message", function (topic, payload) {
      console.log([topic, payload].join(": "));
    })
}

function off(){
  client.publish("yorong/device/status", "Turned off: "+dateTime )
  document.getElementById("status").innerHTML = "The device is off!";
}

