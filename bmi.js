function convertLength() {
    const inputLength = parseFloat(document.getElementById("inputLength").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    const conversionTable = {
        inches: 1,
        millimeters: 25.4,
        centimeters: 2.54,
        meters: 0.0254
    };

    if (conversionTable.hasOwnProperty(fromUnit) && conversionTable.hasOwnProperty(toUnit)) {
        const result = (inputLength * conversionTable[fromUnit]) / conversionTable[toUnit];
        document.getElementById("result").textContent = `${inputLength} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById("result").textContent = "Invalid units. Please select valid units.";
    }
}
