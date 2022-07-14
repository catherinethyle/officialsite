

var reconnectTimeout = 2000;
var host="cha-cweb-dma.sjsu.edu";
var port=9001;
var username = "test";
var passwd = "HarveyDent";

function MQTTconnect(cname) {
console.log("connecting to "+ host +" "+ port);
console.log(cname);
mqtt = new Paho.MQTT.Client(host,port,cname);
var options = {
  userName: username,
  password: passwd,
  timeout: 3,
  onSuccess: onConnect,
  onFailure: onFailure
   };

mqtt.onMessageArrived = onMessageArrived;
  mqtt.connect(options); //connect
}

function onConnect() {
// Once a connection has been made, make a subscription and send a message.
console.log("Connected ");
mqtt.subscribe(mainTopicName + "/#");

makeRandomColor();
playState = true;
AfterDialogClient();

}

function onFailure(message) {
  console.log("Connection Attempt to Host "+host+"Failed");
  setTimeout(MQTTconnect, reconnectTimeout);
}
