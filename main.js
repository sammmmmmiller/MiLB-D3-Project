const mlbTeams = [
    {
        team: 'Diamondbacks',
        colors: ['#A71930', '#E3D4AD']
    },
    {
        team: 'Braves',
        colors: ['#CE1141', '#13274F']
    },
    {
        team: 'Orioles',
        colors: ['#DF4601', '#000000']
    },
    {
        team: 'RedSox',
        colors: ['#BD3039', '#0D2D5E']
    },
    {
        team: 'WhiteSox',
        colors: ['#000000', '#C4CED4']
    },
    {
        team: 'Cubs',
        colors: ['#0E3386', '#CC3433']
    },
    {
        team: 'Reds',
        colors: ['#C6011F', '#000000']
    },
    {
        team: 'Guardians',
        colors: ['#E31937', '#134A8E']
    },
    {
        team: 'Rockies',
        colors: ['#333366', '#FF5733']
    },
    {
        team: 'Tigers',
        colors: ['#0C2C56', '#FA4616']
    },
    {
        team: 'Astros',
        colors: ['#EB6E1F', '#002D62']
    },
    {
        team: 'Royals',
        colors: ['#004687', '#BD9B60']
    },
    {
        team: 'Angels',
        colors: ['#BA0021', '#003263']
    },
    {
        team: 'Dodgers',
        colors: ['#005A9C', '#002F6C']
    },
    {
        team: 'Marlins',
        colors: ['#00A3E0', '#FF6600']
    },
    {
        team: 'Brewers',
        colors: ['#FFC52F', '#0A2351']
    },
    {
        team: 'Twins',
        colors: ['#002B5C', '#D31145']
    },
    {
        team: 'Yankees',
        colors: ['#003087', '#E4002B']
    },
    {
        team: 'Mets',
        colors: ['#FF5910', '#002D72']
    },
    {
        team: 'Athletics',
        colors: ['#003366', '#FFD100']
    },
    {
        team: 'Phillies',
        colors: ['#E81828', '#002d72']
    },
    {
        team: 'Pirates',
        colors: ['#FDB827', '#000000']
    },
    {
        team: 'Padres',
        colors: ['#2F241D', '#FFC425']
    },
    {
        team: 'Giants',
        colors: ['#FD5A1E', '#000000']
    },
    {
        team: 'Mariners',
        colors: ['#0C2C56', '#005C5C']
    },
    {
        team: 'Cardinals',
        colors: ['#C41E3A', '#0C2340']
    },
    {
        team: 'Rays',
        colors: ['#092C5C', '#8FBCE6']
    },
    {
        team: 'Rangers',
        colors: ['#003278', '#C0111F']
    },
    {
        team: 'BlueJays',
        colors: ['#134A8E', '#1D2D5C']
    },
    {
        team: 'Nationals',
        colors: ['#AB0003', '#11225B']
    }
];
const keyframes = [
    {
        year: 2013,
        blurb: 'In 2013, minor league baseball players are paid monthly, without overtime, and only during the baseball season. They are often forced to work 2-3 seasonal jobs to sustain their career aspirations.'
    },
    {
        year: 2014,
        blurb: 'A class action lawsuit is filed on behalf of minor league baseball players against the MLB, alleging violations of minimum wage and overtime laws. '
    }, {
        year: 2015,
        blurb: "A new major league record is set as the average salary of major league players reaches an astonishing 4 million dollars. A new record in revenue for the entire league is set as well, at 9.5 billion."
    }, {
        year: 2016,
        blurb: "A new collective bargaining agreement is reached to avoid a lockout, establishing higher minimum salaries for major league players but not affecting minor leaguers."
    }, {
        year: 2017,
        blurb: ""
    }, {
        year: 2018,
        blurb: "The 'Save America's Pastime Act is passed exempting minor league players from minimum wage laws and deeming them 'seasonal workers'."
    }, {
        year: 2019,
        blurb: "League comissioner Rob Manfred shuts down 42 minor league teams, 26% of the entire minor league system, citing 'inadequate facilities' and 'poor pay'. ",
    }, {
        year: 2020,
        blurb: "The minor league season is cancelled due to COVID-19, and 5000+ players were put out of work.",
    }, {
        year: 2021,
        blurb: "Manfred organizes an owner's strike and MLB lockout due to the expiration of the previous collective bargaining agreement. Treatment of minor leaguers becomes a focal point of the issues raised by the player's union."
    }, {
        year: 2022,
        blurb: "Minor leaguers successfully unionize and join the MLBPA, and see their salaries more than double at every level of play. The new collective bargaining agreement closes the loophole of treating minor league players as 'seasonal workers'."
    }, {
        year: 2023,
        blurb: "Minor league baseball players begin their new season with increased pay, guaranteed housing, smoother transportation, access to better medical and retirement benefits, and other various quality-of-life improvements."
    },
]
keyframeIndex = 0;
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
    .attr("alt", buttonLabels[0])
    .on("click", function () {
        d3.selectAll(".circular-button").classed("no-click", function (d) { return !d; });
        d3.select(this.parentNode).classed("no-click", false)
        
        d3.select("body")
            .style("background-color", "#BD1021")
        d3.select("footer")
            .style("background-color", "#002D72")
    })
var tr;
mlbTeams.forEach((team, index) => {
    if (index % 2 === 0) {
        tr = tbody.append("tr");
    }
    tr.append("td")
        .style("padding", "5px")
        .append("button")
        .classed("circular-button", true)
        .append("img")
        .attr("id", `${team.team}-button`)
        // .attr("class", "team-img")
        .attr("src", `images/${team.team}.png`) 
        .attr("alt", buttonLabels[index])
        .on("click", function () {
            d3.selectAll(".circular-button").classed("no-click", function (d) { return !d; });
            d3.select(this.parentNode).classed("no-click", false)
            console.log(d3.select(this).attr("id"))
            d3.select("body")
                .style("background-color", team.colors[0])
            d3.select("footer")
                .style("background-color", team.colors[1])
        })
});



let svg = container1.append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .style("background-color", "antiquewhite")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv('data/average_both.csv').then(function (data) {
    renderChart(keyframes[keyframeIndex].year);
    document.getElementById("forward-button").addEventListener("click", forwardClicked);
    document.getElementById("backward-button").addEventListener("click", backwardClicked);
    function forwardClicked() {
        console.log("adada")
        if (keyframeIndex < keyframes.length - 1) {
            keyframeIndex++;
            renderChart(keyframes[keyframeIndex].year);
            updateBlurb()
        }
    }

    function backwardClicked() {
        if (keyframeIndex > 0) {
            keyframeIndex--;
            renderChart(keyframes[keyframeIndex].year);
            updateBlurb();
        }
    }

    function updateBlurb() {
        const currentKeyframe = keyframes[keyframeIndex];
        const blurbText = currentKeyframe.blurb || "No information available for this year.";
        
        // Select the blurb div and update its text content
        const blurbDiv = container1.select(".blurb-text");
        blurbDiv.text(blurbText);
    }

    function renderChart(selectedYear) {
        const filteredData = data.filter(d => parseInt(d["year"]) <= selectedYear);
        svg.selectAll(".x-axis, .y-axis").remove();
        svg.selectAll(".area-path").remove();
        svg.selectAll(".circle").remove();
        var uniqueYears = [...new Set(filteredData.map(function (d) { return parseInt(d["year"]); }))];
        console.log(uniqueYears)
        var x = d3.scaleLinear()
            // .domain([d3.min(filteredData, function (d) { return parseInt(d["year"]); }), d3.max(filteredData, function (d) { return parseInt(d["year"]); })])
            //.domain(filteredData.map(function (d) { return d["year"]; }))
            .domain([d3.min(uniqueYears), d3.max(uniqueYears)])
            .range([w/20, w])
        console.log(uniqueYears.length);
        x.ticks(uniqueYears.length)
        var y = d3.scaleLinear()
            .domain([0, d3.max(filteredData, function (d) { return Math.max(d["avgrev"] * 1000000, d["avgpay"] * 1000000, d["avgmilbpay"]); })])
            .range([h, 0]);

            svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + h + ")")
            .call(d3.axisBottom(x).tickValues(uniqueYears).tickFormat(d3.format("d")));
    
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", "translate(" + w/20 + ",0)")
            .call(d3.axisLeft(y));

        var area = d3.area()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y0(h)
            .y1(function (d) { return y(d["avgrev"] * 1000000); });

        svg.append("path")
            .datum(filteredData)
            .attr("class", "area-path")
            .attr("fill", "steelblue")
            .attr("d", area(filteredData));
       
        var area2 = d3.area()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y0(h)
            .y1(function (d) { return y(d["avgpay"] * 1000000); });

        svg.append("path")
            .datum(filteredData)
            .attr("class", "area-path")
            .attr("fill", "orange")
            .transition()
            .duration(1000)
            .attr("d", area2(filteredData));
        var area4 = d3.area()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y0(h)
            .y1(function (d) { return y(d["avgmlbpay"]); });
        
        svg.append("path")
            .datum(filteredData)
            .attr("class", "area-path")
            .attr("fill", "pink")
            .transition()
            .duration(1000)
            .attr("d", area4(filteredData));
        var area3 = d3.area()
            .x(function (d) { return x(parseInt(d["year"])); })
            .y0(h)
            .y1(function (d) { return y(d["avgmilbpay"]); });
        
        svg.append("path")
            .datum(filteredData)
            .attr("class", "area-path")
            .attr("fill", "red")
            .transition()
            .duration(1000)
            .attr("d", area3(filteredData));

            svg.selectAll(".circle-mlbpay")
            .data(filteredData)
            .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function (d) { return x(parseInt(d["year"])); })
            .attr("cy", function (d) { return y(d["avgmlbpay"]); })
            .attr("r", 5) // Adjust the radius of the circles
            .attr("fill", "pink"); 

            svg.selectAll(".circle-milbpay")
            .data(filteredData)
            .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function (d) { return x(parseInt(d["year"])); })
            .attr("cy", function (d) { return y(d["avgmilbpay"]); })
            .attr("r", 5) // Adjust the radius of the circles
            .attr("fill", "red"); 

            svg.selectAll(".circle-pay")
            .data(filteredData)
            .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function (d) { return x(parseInt(d["year"])); })
            .attr("cy", function (d) { return y(d["avgpay"]*1000000); })
            .attr("r", 5) // Adjust the radius of the circles
            .attr("fill", "orange"); 

            svg.selectAll(".circle-rev")
    .data(filteredData)
    .enter().append("circle")
    .attr("class", "circle")
    .attr("cx", function (d) { return x(parseInt(d["year"])); })
    .attr("cy", function (d) { return y(d["avgrev"] * 1000000); })
    .attr("r", 5) // Adjust the radius of the circles
    .attr("fill", "steelblue")
    // .attr("opacity", 0) // Start with opacity 0 for a fade-in effect
    // .transition() // Add a transition for the "cx" and "cy" attributes
    // .duration(1000) // Transition duration in milliseconds
    // .attr("cx", function (d) { return x(parseInt(d["year"])); })
    // .attr("cy", function (d) { return y(d["avgrev"] * 1000000); })
    // .attr("opacity", 1); // Transition opacity to 1 for a fade-in effect

           

     

        svg.selectAll(".x-axis text")
            .style("font-size", "15px");

        svg.selectAll(".y-axis text")
            .style("font-size", "15px");

         
    }

    const legend = svg.append("g")
            .attr("transform", "translate(20, 20)");

        const legendItems = [
            { label: "Average Revenue", color: "steelblue" },
            { label: "Average Payroll", color: "orange" },
            { label: "Average MiLB Pay", color: "red" },
            { label: "Average MLB Pay", color: "pink" }
        ];

        legend.selectAll("rect")
            .data(legendItems)
            .enter().append("rect")
            .attr("x", w/20)
            .attr("y", function (d, i) { return i * 20; })
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", function (d) { return d.color; });

        legend.selectAll("text")
            .data(legendItems)
            .enter().append("text")
            .attr("x", 20 + w/20)
            .attr("y", function (d, i) { return i * 20 + 10; })
            .text(function (d) { return d.label; })
            .attr("alignment-baseline", "middle");

            container1.append("div")
            .classed("blurb-text", true)
            .style("width", "300px")
            .style("height", "150px")
            .style("background-color", "antiquewhite")
            .style("border", "2px solid navy")
            .style("text-align", "center")
            .style("font-size", "18px")
            .text("In 2013, minor league baseball players are paid monthly, without overtime, and only during the baseball season. They are often forced to work 2-3 seasonal jobs to sustain their career aspirations.");

            svg.append("text")
            .attr("transform", "translate(" + (10.5*w / 20) + " ," + (h + 40) + ")")
            .style("text-anchor", "middle")
            .style("font-size", "20px")
            .text("Year");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 90)
            .attr("x", 0 - (h / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-size", "20px")
            .text("Millions of Dollars");

        
});
