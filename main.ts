let tempF: number;
let tempC: number;
while (true) {
    tempF = input.temperature(TemperatureUnit.Fahrenheit)
    tempC = input.temperature(TemperatureUnit.Celsius)
    //  print("Temperature (F):" + tempF + " - Temperature (C):" + tempC)
    console.log("Current Room Temperature: " + tempF + "°F - " + tempC + "°C")
}
light.setBrightness(10)
tempF = input.temperature(TemperatureUnit.Fahrenheit)
//  if tempF > 60:
//      light.set_pixel_color(5, light.rgb(255, 0, 0))
//  if tempF > 70:
//      light.set_pixel_color(5, light.rgb(255, 0, 0))
//  elif temp < 70 and tempF > 40:
//      light.set_pixel_color(5, light.rgb(0, 255, 0))
//  else:
//      light.set_pixel_color(5, light.rgb(0, 0, 255))
while (true) {
    if (tempF > 90) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (tempF < 90 && tempF > 30) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
