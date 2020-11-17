while True:
    tempF = input.temperature(TemperatureUnit.FAHRENHEIT)
    tempC = input.temperature(TemperatureUnit.CELSIUS)
    # print("Temperature (F):" + tempF + " - Temperature (C):" + tempC)
    print("Current Room Temperature: " + tempF + "°F - " + tempC + "°C")