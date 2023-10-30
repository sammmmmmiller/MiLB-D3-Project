const margin = { top: 40, right: 40, bottom: 60, left: 100 };
const w = 1500 - margin.left - margin.right;
const h = 1500 - margin.top - margin.bottom;

let container1 = d3.select("body").append("div").classed("svg-container", true)
let svg = container1.append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .style("background-color", "antiquewhite")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv('data/average_both.csv').then(function (data) {
    var x = d3.scaleLinear()
        .domain([d3.min(data, function (d) { return parseInt(d["year"]); }), d3.max(data, function (d) { return parseInt(d["year"]); })])
        .range([0, w]);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return Math.max(d["avgrev"] * 1000000, d["avgpay"] * 1000000, d["avgmilbpay"]); })])
        .range([h, 0]);

    // Create the X axis with ticks
    svg.append("g")
        .attr("transform", "translate(0," + h + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Create the Y axis with ticks
    svg.append("g")
        .call(d3.axisLeft(y));

    // Create the "avgrev" area below the line
    var area = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) // The bottom of the area
        .y1(function (d) { return y(d["avgrev"] * 1000000); });

    // Create the "avgrev" area chart
    svg.append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area(data));

    // Create the "avgpay" area below the line
    var area2 = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) // The bottom of the area
        .y1(function (d) { return y(d["avgpay"] * 1000000); });

    // Create the "avgpay" area chart
    svg.append("path")
        .datum(data)
        .attr("fill", "orange")
        .attr("d", area2(data));
     // Create the "avgmilbpay" area below the line
     var area4 = d3.area()
     .x(function (d) { return x(parseInt(d["year"])); })
     .y0(h) // The bottom of the area
     .y1(function (d) { return y(d["avgmlbpay"]); });

 // Create the "avgmilbpay" area chart
 svg.append("path")
     .datum(data)
     .attr("fill", "pink")
     .attr("d", area4(data));
    // Create the "avgmilbpay" area below the line
    var area3 = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) // The bottom of the area
        .y1(function (d) { return y(d["avgmilbpay"]); });

    // Create the "avgmilbpay" area chart
    svg.append("path")
        .datum(data)
        .attr("fill", "red")
        .attr("d", area3(data));
    


    // Create the "avgrev" line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgrev"] * 1000000); })
        );

    // Create the "avgpay" line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "orange") // Change the color to distinguish from "avgrev"
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgpay"] * 1000000); })
        );

    // Create the "avgmilbpay" line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "red") // Change the color to distinguish from "avgrev"
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgmilbpay"]); })
        );

    // // Create circles for "avgrev" data points
    // svg.selectAll(".circle")
    //     .data(data)
    //     .enter().append("circle")
    //     .attr("class", "circle")
    //     .attr("cx", function (d) { return x(parseInt(d["year"])); })
    //     .attr("cy", function (d) { return y(d["avgrev"] * 1000000); })
    //     .attr("r", 5) // Adjust the radius of the circles
    //     .attr("fill", "steelblue");

    // // Create circles for "avgpay" data points
    // svg.selectAll(".circle-avgpay")
    //     .data(data)
    //     .enter().append("circle")
    //     .attr("class", "circle-avgpay")
    //     .attr("cx", function (d) { return x(parseInt(d["year"])); })
    //     .attr("cy", function (d) { return y(d["avgpay"] * 1000000); })
    //     .attr("r", 5) // Adjust the radius of the circles
    //     .attr("fill", "orange");

    // // Create circles for "avgmilbpay" data points
    // svg.selectAll(".circle-avgmilbpay")
    //     .data(data)
    //     .enter().append("circle")
    //     .attr("class", "circle-avgmilbpay")
    //     .attr("cx", function (d) { return x(parseInt(d["year"])); })
    //     .attr("cy", function (d) { return y(d["avgmilbpay"]); })
    //     .attr("r", 5) // Adjust the radius of the circles
    //     .attr("fill", "red");

    // Add X-axis label
    svg.append("text")
        .attr("transform", "translate(" + (w / 2) + " ," + (h + 40) + ")")
        .style("text-anchor", "middle")
        .text("Year");

    // Add Y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - 20)
        .attr("x", 0 - (h / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Millions of Dollars");

        // Create a legend
        const legend = svg.append("g")
        .attr("transform", "translate(20, 20)");

    // Legend items
    const legendItems = [
        { label: "Average Revenue", color: "steelblue" },
        { label: "Average Payroll", color: "orange" },
        { label: "Average MiLB Pay", color: "red" },
        {label: "Average MLB Pay", color: "pink"}
    ];

    // Add legend items
    legend.selectAll("rect")
        .data(legendItems)
        .enter().append("rect")
        .attr("x", 0)
        .attr("y", function (d, i) { return i * 20; })
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", function (d) { return d.color; });

    legend.selectAll("text")
        .data(legendItems)
        .enter().append("text")
        .attr("x", 20)
        .attr("y", function (d, i) { return i * 20 + 10; })
        .text(function (d) { return d.label; })
        .attr("alignment-baseline", "middle");
    
        // Increase the font size of x-axis ticks
svg.selectAll(".x-axis text")
.style("font-size", "14px"); // Adjust the font size as needed

// Increase the font size of y-axis ticks
svg.selectAll(".y-axis text")
.style("font-size", "14px"); // Adjust the font size as needed

const buttonLabels = Array.from({ length: 31 }, (_, i) => `Button ${i + 1}`);
// const container = d3.select("body").append("div")
//   .style("text-align", "center"); // Center its content

// container1.append("button")
//   .classed("circular-button", true)
//   .append("img")
//   .attr("src", `assets/images/MLB.png`) // Adjust the image path
//   .attr("alt", buttonLabels[30]); // Set alt text for accessibility
  
const table = container1.append("table")
  .style("margin", "auto"); // Center the table on the page

const tbody = table.append("tbody");



for (let row = 0; row <= 15; row++) {
  const tr = tbody.append("tr");
  if (row == 0) {
    tr.append("td")
    tr.append("td")
      .style("padding", "5px")
      .append("button")
      .classed("circular-button", true)
      .append("img")
      .attr("src", `assets/images/MLB.png`) // Adjust the image path
      .attr("alt", buttonLabels[0]); // Set alt text for accessibility
    continue;
  }
  for (let col = 1; col <= 2; col++) {
    const index = (row - 1) * 2 + col - 1;
    tr.append("td")
      .style("padding", "5px")
      .append("button")
      .classed("circular-button", true)
      .append("img")
      .attr("src", `assets/images/Team${index + 1}.png`) // Adjust the image path
      .attr("alt", buttonLabels[index]); // Set alt text for accessibility
  }
}

// Create a div element as a rectangle in container1
container1.append("div")
  .style("width", "300px")
  .style("height", "150px")
  .style("background-color", "antiquewhite")
  .style("border", "2px solid navy")
//   .
  .style("text-align", "center")
  .style("font-size", "18px")
  .text("Your text goes here");

});
