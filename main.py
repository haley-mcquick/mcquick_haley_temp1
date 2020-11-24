while True:
    tempF = input.temperature(TemperatureUnit.FAHRENHEIT)
    tempC = input.temperature(TemperatureUnit.CELSIUS)
    # print("Temperature (F):" + tempF + " - Temperature (C):" + tempC)
    print("Current Room Temperature: " + tempF + "°F - " + tempC + "°C")


light.set_brightness(10)
tempF = input.temperature(TemperatureUnit.FAHRENHEIT)

# if tempF > 60:
#     light.set_pixel_color(5, light.rgb(255, 0, 0))

# if tempF > 70:
#     light.set_pixel_color(5, light.rgb(255, 0, 0))
# elif temp < 70 and tempF > 40:
#     light.set_pixel_color(5, light.rgb(0, 255, 0))
# else:
#     light.set_pixel_color(5, light.rgb(0, 0, 255))
while True:
    if tempF > 90:
        light.set_all(light.rgb(255,0,0))
    elif tempF < 90 and tempF > 30:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb(0,0,255))
    