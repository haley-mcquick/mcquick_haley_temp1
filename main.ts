//  while True:
//      tempF = input.temperature(TemperatureUnit.FAHRENHEIT)
//      tempC = input.temperature(TemperatureUnit.CELSIUS)
//      # print("Temperature (F):" + tempF + " - Temperature (C):" + tempC)
//      print("Current Room Temperature: " + tempF + "°F - " + tempC + "°C")
light.setBrightness(10)
let tempF = input.temperature(TemperatureUnit.Fahrenheit)
//  if tempF > 60:
//      light.set_pixel_color(5, light.rgb(255, 0, 0))
//  if tempF > 70:
//      light.set_pixel_color(5, light.rgb(255, 0, 0))
//  elif temp < 70 and tempF > 40:
//      light.set_pixel_color(5, light.rgb(0, 255, 0))
//  else:
//      light.set_pixel_color(5, light.rgb(0, 0, 255))
if (tempF > 70) {
    light.setAll(light.rgb(255, 0, 0))
} else if (tempF < 70 && tempF > 40) {
    light.setAll(light.rgb(0, 255, 0))
} else {
    light.setAll(light.rgb(0, 0, 255))
}

