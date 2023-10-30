const w = 1000;
const h = 1000;
const cellpadding = 20;

let svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "antiquewhite");

console.log(d3)
d3.csv('data/Teams_Revenue_Average.csv').then(function (data) {

    console.log(data)
    var x = d3.scaleLinear()
        .domain([d3.min(data, function (d) {
            console.log()
            return parseInt(d[""].substring(4));
        }), d3.max(data, function (d) {
            console.log()
            return parseInt(d[""].substring(4));
        })])
        .range([0, w]);
    svg.append("g")
        .attr("transform", "translate(0," + h + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { 
            console.log(d)
            return d["Average MLB Team Revenue"]; })])
        .range([h, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d[""].substring(4))) })
            .y(function (d) { return y(d["Average MLB Team Revenue"]) })
        )

})


