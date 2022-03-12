// sort cities by growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// TOP 5 CITIES

// select top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// create arrays for city names and corresponding population growths
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// TOP 7 CITIES

// select top 7 cities by population growth
var topSevenCities = sortedCities.slice(0,7);

// create arrays for city names and corresponding population growths
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);