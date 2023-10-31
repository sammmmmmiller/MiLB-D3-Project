const margin = { top: 40, right: 40, bottom: 60, left: 100 };
const w = 1100 - margin.left - margin.right;
const h = 1100 - margin.top - margin.bottom;

let container1 = d3.select("body").append("div").classed("svg-container", true)

const buttonLabels = Array.from({ length: 31 }, (_, i) => `Button ${i + 1}`);
  
const table = container1.append("table")
const tbody = table.append("tbody");

table.append("td")
      .style("padding", "5px")
      .append("button")
      .classed("circular-button", true)
      .append("img")
      .attr("src", `images/MLB.png`)
      .attr("alt", buttonLabels[0]); 
for (let row = 1; row <= 15; row++) {
  const tr = tbody.append("tr");
  
  for (let col = 1; col <= 2; col++) {
    const index = (row - 1) * 2 + col - 1;
    tr.append("td")
      .style("padding", "5px")
      .append("button")
      .classed("circular-button", true)
      .append("img")
      .attr("src", `images/Team${index + 1}.png`)
      .attr("alt", buttonLabels[index]);
  }
}
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

    svg.append("g")
        .attr("transform", "translate(0," + h + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    svg.append("g")
        .call(d3.axisLeft(y));

    var area = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) // The bottom of the area
        .y1(function (d) { return y(d["avgrev"] * 1000000); });

    svg.append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area(data));

    var area2 = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) 
        .y1(function (d) { return y(d["avgpay"] * 1000000); });

    svg.append("path")
        .datum(data)
        .attr("fill", "orange")
        .attr("d", area2(data));
     var area4 = d3.area()
     .x(function (d) { return x(parseInt(d["year"])); })
     .y0(h) 
     .y1(function (d) { return y(d["avgmlbpay"]); });

 svg.append("path")
     .datum(data)
     .attr("fill", "pink")
     .attr("d", area4(data));
    var area3 = d3.area()
        .x(function (d) { return x(parseInt(d["year"])); })
        .y0(h) 
        .y1(function (d) { return y(d["avgmilbpay"]); });

    svg.append("path")
        .datum(data)
        .attr("fill", "red")
        .attr("d", area3(data));
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgrev"] * 1000000); })
        );

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "orange") 
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgpay"] * 1000000); })
        );

    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "red") 
        .attr("d", d3.line()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y(function (d) { return y(d["avgmilbpay"]); })
        );

    svg.append("text")
        .attr("transform", "translate(" + (w / 2) + " ," + (h + 40) + ")")
        .style("text-anchor", "middle")
        .text("Year");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - 90)
        .attr("x", 0 - (h / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Millions of Dollars");

        const legend = svg.append("g")
        .attr("transform", "translate(20, 20)");

    const legendItems = [
        { label: "Average Revenue", color: "steelblue" },
        { label: "Average Payroll", color: "orange" },
        { label: "Average MiLB Pay", color: "red" },
        {label: "Average MLB Pay", color: "pink"}
    ];

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
    
svg.selectAll(".x-axis text")
.style("font-size", "20px"); 

svg.selectAll(".y-axis text")
.style("font-size", "20px"); 

container1.append("div")
  .style("width", "300px")
  .style("height", "150px")
  .style("background-color", "antiquewhite")
  .style("border", "2px solid navy")
  .style("text-align", "center")
  .style("font-size", "18px")
  .text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa sit amet nunc pretium finibus. Nulla facilisi. Praesent ut mollis orci. Integer sit amet arcu sapien. Integer eget aliquam nibh. Suspendisse non ipsum eget mauris venenatis pulvinar id et velit.");


  svg.append("rect")
  .attr("x", x(2019) - 50) 
  .attr("y", 15-margin.top)
  .attr("width", 100) 
  .attr("height", h+margin.bottom)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "5,5")
  .attr("fill", "none");


  
});
