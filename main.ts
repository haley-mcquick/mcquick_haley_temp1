let tempF: number;
let tempC: number;
while (true) {
    tempF = input.temperature(TemperatureUnit.Fahrenheit)
    tempC = input.temperature(TemperatureUnit.Celsius)
    //  print("Temperature (F):" + tempF + " - Temperature (C):" + tempC)
    console.log("Current Room Temperature: " + tempF + "°F - " + tempC + "°C")
}
