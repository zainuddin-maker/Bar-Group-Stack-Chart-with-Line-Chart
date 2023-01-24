var booleanchangeyaxis = false;
var booleanshowmarker = true;
var widht = 800;
var heigt = 900;

var w = widht,
    h = heigt,
    padding_left = 40,
    padding_right = 40,
    padding_bottom = 9;
padding_top = 40;

var widhtperbar = 50;
var threshold = 80;
var dropdowntype = "doubleYaxis_Legend";

var configuration_y_axis = [
    {
        tick_range: 100,
        miny: 0,
        maxy: 1000,
        orientation: "left",
        text: "Active Energy-MWh",
    },
    {
        tick_range: 100,
        miny: 0,
        maxy: 1500,
        orientation: "right",
        text: "Boxes-xMWh",
    },
    {
        tick_range: 0,
        miny: 0,
        maxy: 0,
        orientation: "bottom",
        text: "Bottom(m/h)",
    },
];

var configuration_tooltip_and_data = [
    {
        indata: "type3",
        intooltip: "Type 3",
        color: "#003800",
        type: "bar",
        inlegend: "Legend Type 3",
    },

    {
        indata: "type2",
        intooltip: "Type 2",
        color: "#f6db0f",
        type: "bar",
        inlegend: "Legend Type 2",
    },

    {
        indata: "type1",
        intooltip: "Type 1",
        color: "#f6682e",
        type: "bar",
        inlegend: "Legend Type 1",
    },
    {
        indata: "line1",
        intooltip: "Line 1",
        color: "#00ff00",
        type: "line",
        inlegend: "Legend Line 1",
    },
    {
        indata: "line2",
        intooltip: "Line 2",
        color: "#00eaea",
        type: "line",
        inlegend: "Legend Line 2",
    },
    {
        indata: "line3",
        intooltip: "Discharge",
        color: "#00eaff",
        type: "line",
        inlegend: "Legend Discharge",
    },
];

var configurationliststack = [
    {
        list_type: "type3",
    },
    {
        list_type: "type1,type3,type2",
    },
    {
        list_type: "type2,type1",
    },
];

var datastackgroup = [
    {
        Category: "Waiting for internal trucs",
        type2: 450,
        type8: 300,
        type3: 120,
        line1: 300,
        line2: 160,
        line3: 360,
    },
    {
        Category: "P2",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 400,
        line2: 20,
        line3: 36,
    },
    {
        Category: "P3",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 200,
        line2: 320,
        line3: 60,
    },
    {
        Category: "P4",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 100,
        line2: 220,
        line3: 260,
    },
    {
        Category: "P5",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 500,
        line2: 120,
        line3: 560,
    },
    {
        Category: "P54",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 500,
        line2: 120,
        line3: 560,
    },
    {
        Category: "P53",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 500,
        line2: 120,
        line3: 560,
    },
    {
        Category: "P52",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 500,
        line2: 120,
        line3: 560,
    },
    {
        Category: "P51",
        type1: 400,
        type2: 100,
        type3: 200,
        line1: 500,
        line2: 120,
        line3: 560,
    },
];

var datatooltipcustom = [
    {
        Category: "Waiting for internal trucs",

        type2: "type2 Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );;Full: 11,000;(0 OVD, 0 BB , 0 Transhipment )",
        type8: "type8Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        type3: "type3Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line1: "line1Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line2: "line2Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line3: "line3Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
    },
    {
        Category: "P2",
        type1: "type1 Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );;Full: 11,000;(0 OVD, 0 BB , 0 Transhipment )",
        type2: "type2 Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );;Full: 11,000;(0 OVD, 0 BB , 0 Transhipment )",
        type3: "type3Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line1: "line1Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line2: "line2Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
        line3: "line3Full: 10,000;(0 OVD, 0 BB , 0 Transhipment );Full: 10,000;(0 OVD, 0 BB , 0 Transhipment )",
    },
];

var booleanusingtooltipcustom = false;

//tooltip

var fontsizetooltipstring = "normal";
var backgroundcolortooltip = "#fff";
let textcolortooltip = "#000";
// let showTooltip = true;

// batas input

// var booleanleftyaxis = true
var booleanrightyaxis = true;
var booleanlegend = true;
var booleanthreshold = true;
var booleanrightlegend = false;

if (!booleanusingtooltipcustom) {
    datatooltipcustom = [];
}

if (dropdowntype == "yAxisLeft_noLegend") {
    booleanrightyaxis = false;
    booleanlegend = false;
    booleanthreshold = false;
}

if (dropdowntype == "yAxisLeft_Legend") {
    booleanrightyaxis = false;
    booleanlegend = true;
    booleanthreshold = false;
}

if (dropdowntype == "yAxisLeft_Legendinright") {
    booleanrightyaxis = false;
    booleanlegend = true;
    booleanthreshold = false;
    booleanrightlegend = true;
}

if (dropdowntype == "doubleYaxis_noLegend") {
    booleanrightyaxis = true;
    booleanlegend = false;
    booleanthreshold = false;
}
if (dropdowntype == "doubleYaxis_Legend") {
    booleanrightyaxis = true;
    booleanlegend = true;
    booleanthreshold = false;
}
if (dropdowntype == "yAxisLeft_noLegend_threshold") {
    booleanrightyaxis = false;
    booleanlegend = false;
    booleanthreshold = true;
}

var listlinechart = configuration_tooltip_and_data.filter(
    (data) => data.type == "line"
);
var listbarchart = configuration_tooltip_and_data.filter(
    (data) => data.type == "bar"
);

configurationliststack.forEach((data, i) => {
    var list_color = "";

    data.list_type.split(",").forEach((dataj, j) => {
        var temp = configuration_tooltip_and_data.find(
            (datak) => datak.indata == dataj
        );

        if (temp) {
            list_color += temp.color + ",";
        } else {
            list_color += ",";
        }
    });
    configurationliststack[i].list_color = list_color;
});

var configuratin_data_temp = configurationliststack;

var araayofarrayline = [];

listlinechart.forEach((datak) => {
    var datal = [];

    datastackgroup.forEach((datadata, j) => {
        datal.push({
            date: datadata.Category,
            line: datadata[datak.indata] ? datadata[datak.indata] : 0,
            color: datak.color,
            intooltip: datak.intooltip,
            data: datadata,
        });
    });

    araayofarrayline.push(datal);
});

// console.log(araayofarrayline)

//x axis

var colorlinechartx = "#fff";
var fontcolorlinechartx = "#fff";
var fontsizexaxis = "2xl";

// y0 axis
var colorlinecharty0 = "#fff";
let fontcolorlinecharty0 = "#fff";

// y1 axis
var colorlinecharty1 = "#fff";
let fontcolorlinecharty1 = "#fff";

var boolean_bold_y = true;
var boolean_bold_x = true;

// batas input

const convertFontSize = (textSize) => {
    var result = textSize;
    switch (textSize) {
        case "xsmall":
            result = "9px";
            break;
        case "small":
            result = "10px";
            break;
        case "normal":
            result = "11px";
            break;
        case "large":
            result = "12px";
            break;
        case "xlarge":
            result = "14px";
            break;
        case "xxl":
            result = "16px";
            break;
        case "2xl":
            result = "18px";
            break;
        case "3xl":
            result = "22px";
            break;
        default:
            result = "22px";
    }

    return result;
};

var configuratin_data_new = [];

configuratin_data_temp.forEach((data, i) => {
    configuratin_data_new.push({
        list_type: data.list_type.split(","),
        list_color: data.list_color.split(","),
    });
});

var configuratin_data = configuratin_data_new;
var makemy_dataviz = d3
    .select("body")
    .append("div")
    .attr("id", "my_dataviz")
    .style("background-color", "#000")
    .style("width", w + "px");
// .style("height", height + (margin.top + margin.bottom) + "px");

// var first_legend = makemy_dataviz.append("div").attr("class","first_legend")
// console.log(listbarchart)
// console.log(listlinechart)

// listlinechart.forEach((data,i)=>{
//     var child_first_legend = first_legend.append("div").attr("class","child_first_legend").style("margin-right","60px")
//     child_first_legend.append("div").attr("class","box_child_first_legend").style("background-color",data.color)
//     child_first_legend.append("div").attr("class","text_child_first_legend").text(data.intooltip)
// })

if (booleanlegend) {
    var first_legend = makemy_dataviz
        .append("div")
        .attr("class", "first_legend")
        .style("padding-left", padding_left + "px");

    if (booleanrightlegend) {
        first_legend
            .style("flex-direction", "column")
            .style("align-items", "end");
    }

    configuration_tooltip_and_data.forEach((data, i) => {
        var child_first_legend = first_legend
            .append("div")
            .attr("class", "child_first_legend")
            .style("margin-right", "20px");
        child_first_legend
            .append("div")
            .attr("class", "box_child_first_legend")
            .style("background-color", data.color);
        var text_child_first_legend = child_first_legend
            .append("div")
            .attr("class", "text_child_first_legend")

            .text(data.inlegend);
        if (booleanrightlegend) {
            text_child_first_legend.style("width", "80px");
        }
    });
}
var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

// var tooltipdiv = d3
//     .select("#my_dataviz")
//     .append("div")
//     .attr("id", "tooltipstackgroupandline");

// tooltipdiv.append("p").attr("id", "name");
// tooltipdiv.append("p").attr("id", "value");

// var stack = d3.stack().keys(["type1", "type2", "type3", "type4"]);

var tooltipdivlist = d3
    .select("#my_dataviz")
    .append("div")
    .attr("id", "tooltipbarstackgorupdoubley")
    .attr("class", "tooltipbarstackgorupdoubley hidden");
// .attr("class", "hidden");

configuration_tooltip_and_data.forEach((datatool, i) => {
    var tooltipdivp1 = tooltipdivlist.append("p");

    tooltipdivp1
        .append("span")
        .attr("id", "strong_" + datatool.indata)
        .style("margin-right", "5px")
        .text(datatool.intooltip + ":");
    tooltipdivp1.append("span").attr("id", datatool.indata);
});

var tooltipcustomtext = d3
    .select("#my_dataviz")
    .append("div")
    .attr("id", "tooltipnumberseven")
    .attr("class", "tooltipnumberseven hidden");

var datasets = [];

var accent = [];

configuratin_data.forEach((dataconfig, i) => {
    datasets.push(d3.stack().keys(dataconfig.list_type)(datastackgroup));
    accent.push(d3.scaleOrdinal(dataconfig.list_color));
});

var num_groups = datasets.length;

var xlabels = datastackgroup.map(function (d) {
    return d["Category"];
});

var paddingbar = 0.7;

if (configurationliststack.length > 2) {
    paddingbar = 1 - configurationliststack.length * 0.15;

    if (paddingbar < 0) {
        paddingbar = 0.1;
    }
}

var xscale = d3
    .scaleBand()
    .domain(xlabels)
    .range([padding_left, w - padding_right])
    //   .paddingInner(0.1)
    .padding(1 - widhtperbar / 100);

// var ydomain_min = d3.min(
//     datasets.flat().map(function (row) {
//         return d3.min(
//             row.map(function (d) {
//                 return d[1];
//             })
//         );
//     })
// );
// var ydomain_max = d3.max(
//     datasets.flat().map(function (row) {
//         return d3.max(
//             row.map(function (d) {
//                 return d[1];
//             })
//         );
//     })
// );

var xaxis = d3.axisBottom(xscale).tickSize(0);
var dataleft = configuration_y_axis.find(
    (configuration) => configuration.orientation == "left"
);

if (!dataleft) {
    dataleft = {
        tick_range: 10,
        miny: 0,
        maxy: 100,
        orientation: "left",
        text: "",
    };
}
var yscale = d3
    .scaleLinear()
    .domain([dataleft.miny, dataleft.maxy])

    .range([h - padding_bottom, padding_top]);
var yaxis = d3
    .axisLeft(yscale)
    .tickSize(0)
    .tickValues(
        d3.range(dataleft.miny, dataleft.maxy + 1, dataleft.tick_range)
    );

var dataright = configuration_y_axis.find(
    (configuration) => configuration.orientation == "right"
);

if (!dataright) {
    dataright = {
        tick_range: 10,
        miny: 0,
        maxy: 100,
        orientation: "right",
        text: "",
    };
}
var yscaleright = d3
    .scaleLinear()
    .domain([dataright.miny, dataright.maxy])

    .range([h - padding_bottom, padding_top]);
var yaxisright = d3
    .axisRight(yscaleright)
    .tickSize(0)
    .tickValues(
        d3.range(dataright.miny, dataright.maxy + 1, dataright.tick_range)
    );

if (!booleanrightyaxis) {
    yscaleright = yscale;
    yaxisright = yaxis;
} else {
    if (booleanchangeyaxis) {
        temp = yscaleright;
        yscaleright = yscale;
        yscale = temp;
    }
}

d3.range(num_groups).forEach(function (gnum) {
    svg.selectAll("g.group" + gnum)
        .data(datasets[gnum])
        .enter()
        .append("g")
        .attr("fill", accent[gnum])
        .attr("class", "group" + gnum)
        .selectAll("rect")

        .data((d) => d)
        .enter()
        .append("rect")
        .attr(
            "x",
            (d, i) =>
                xscale(xlabels[i]) + (xscale.bandwidth() / num_groups) * gnum
        )
        .attr("y", function (d, i, k) {
            return yscaleright(d[1]);
        })

        .attr("width", xscale.bandwidth() / num_groups)
        .attr("height", (d) => yscaleright(d[0]) - yscaleright(d[1]))
        .on("mouseenter", function (d, i) {})
        .on("mousemove", function (d, i) {
            // console.log(d, i);
            // console.log("datatooltipcustom");
            // console.log(datatooltipcustom[i]);
            // console.log("")

            if (datatooltipcustom[i]) {
                var BreakException = {};

                var sum = 0;
                var type = "";

                try {
                    configuratin_data[gnum].list_type.forEach(function (el) {
                        //  console.log(d.data[el])
                        if (Number(d.data[el])) {
                            sum += Number(d.data[el]);
                        }
                        if (sum === Number(d[1])) {
                            type = el;
                            throw BreakException;
                        }
                    });
                } catch (e) {
                    if (e !== BreakException) throw e;
                }
                // console.log("type");
                // console.log(type);

                if (datatooltipcustom[i][type]) {
                    let allelement = document.getElementsByClassName(
                        "childoftooltipcustomtext"
                    );
                    console.log("allelement");

                    console.log(allelement);
                    if (
                        document.getElementsByClassName(
                            "childoftooltipcustomtext"
                        )
                    ) {
                        for (
                            let index = 0;
                            index < allelement.length;
                            index++
                        ) {
                            allelement[index].innerHTML = "";
                        }
                        while (allelement.length > 0) {
                            allelement[0].parentNode.removeChild(allelement[0]);
                        }
                        // document.getElementById("childoftooltipcustomtext").remove()
                    }

                    datatooltipcustom[i][type].split(";").forEach((element) => {
                        if (element) {
                            tooltipcustomtext
                                .append("div")
                                .attr("class", "childoftooltipcustomtext")
                                .style("opacity", 1)
                                .text(element);
                        } else {
                            tooltipcustomtext
                                .append("div")
                                .attr("class", "childoftooltipcustomtext")
                                .style("opacity", 0)
                                .text("element");
                        }
                    });

                    tooltipcustomtext
                        .style("display", function (e) {
                            // if (showTooltip && !isNaN(newobj[d.data.key])) {
                            return "block";
                            // } else
                            // {
                            //     return "none";
                            // }
                        })
                        .style(
                            "font-size",
                            convertFontSize(fontsizetooltipstring)
                        )
                        .style("background-color", backgroundcolortooltip)
                        .style("color", textcolortooltip);

                    var elementtooltip = d3
                        .select("#tooltipnumberseven")
                        .node();
                    var heighttooltip =
                        elementtooltip.getBoundingClientRect().height;
                    var element = d3.select("#my_dataviz").node();
                    var heighmydataviz = element.getBoundingClientRect().height;

                    var elementbottom = d3.select("#divbottom").node();
                    var heighdivbottom =
                        elementbottom.getBoundingClientRect().height;

                    var toptooltip =
                        d3.event.offsetY +
                        (heighmydataviz - heighdivbottom - h);

                    if (
                        d3.event.offsetY +
                            (heighmydataviz - heighdivbottom - h) +
                            heighttooltip >
                        heighmydataviz
                    ) {
                        toptooltip = heighmydataviz - heighttooltip;
                    }

                    tooltipcustomtext.style(
                        "left",
                        d3.event.offsetX + 10 + "px"
                    );
                    tooltipcustomtext.style("top", toptooltip + "px");
                }
            } else {
                configuration_tooltip_and_data.forEach((datacontool, ic) => {
                    if (d.data[datacontool.indata]) {
                        tooltipdivlist
                            .select("#" + datacontool.indata)
                            .text(d.data[datacontool.indata]);
                    } else {
                        tooltipdivlist.select("#" + datacontool.indata).text(0);
                    }
                });

                tooltipdivlist
                    .style("display", function (e) {
                        // if (showTooltip && !isNaN(newobj[d.data.key])) {
                        return "block";
                        // } else
                        // {
                        //     return "none";
                        // }
                    })
                    .style("font-size", convertFontSize(fontsizetooltipstring))
                    .style("background-color", backgroundcolortooltip)
                    .style("color", textcolortooltip);

                var elementtooltip = d3
                    .select("#tooltipbarstackgorupdoubley")
                    .node();
                var heighttooltip =
                    elementtooltip.getBoundingClientRect().height;
                var element = d3.select("#my_dataviz").node();
                var heighmydataviz = element.getBoundingClientRect().height;

                var elementbottom = d3.select("#divbottom").node();
                var heighdivbottom =
                    elementbottom.getBoundingClientRect().height;

                var toptooltip =
                    d3.event.offsetY + (heighmydataviz - heighdivbottom - h);

                if (
                    d3.event.offsetY +
                        (heighmydataviz - heighdivbottom - h) +
                        heighttooltip >
                    heighmydataviz
                ) {
                    toptooltip = heighmydataviz - heighttooltip;
                }

                tooltipdivlist.style("left", d3.event.offsetX + 10 + "px");
                tooltipdivlist.style("top", toptooltip + "px");
            }
        })
        .on("mouseleave", function (d, i) {
            // console.log("d")
            // console.log(i)
            // if (d){
            //   tooltipdiv.style("display", "inline-block")
            // }else {
            tooltipdivlist.style("display", "none");
            tooltipcustomtext.style("display", "none");
            // }
        });

    // svg.selectAll("g.text" + gnum)
    // .data(datasets[gnum])
    // .enter()
    // .append("g")
    // // .attr("display","none")
    // // .attr("fill", accent[gnum])
    // // .attr("class", "text" + gnum)
    // .selectAll("text")

    // .data((d) => d)
    // .enter()
    // .append("text")
    // .attr("text-anchor", "middle")
    // .text(function (d ,i) {
    //     console.log("d")
    //     console.log(d)

    //     return (d[1] - d[0])
    // } )
    // .attr(
    //     "x",
    //     (d, i) =>
    //         xscale(xlabels[i]) + (xscale.bandwidth() / num_groups) * gnum +  (xscale.bandwidth() / num_groups/2)
    // )
    // .attr("y", (d) => yscale(d[1]) - 10)
});

var tickbottom = svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h - padding_bottom) + ")")
    .style("font-weight", function (c) {
        return boolean_bold_x ? "bold" : "normal";
    })
    .call(xaxis);

svg.select(".x.axis")
    .selectAll("text")
    .style("fill", fontcolorlinechartx)
    .text("");
svg.select(".x.axis")
    .selectAll("path")
    .style("fill", "none")
    .style("stroke", colorlinechartx)
    .style("shape-rendering", "crispEdges");
svg.select(".x.axis")
    .selectAll("line")
    .style("fill", "none")
    .style("stroke", colorlinechartx)
    .style("shape-rendering", "crispEdges");

var databottom = configuration_y_axis.find(
    (configuration) => configuration.orientation == "bottom"
);

if (!databottom) {
    databottom = {
        tick_range: 0,
        miny: 0,
        maxy: 0,
        orientation: "bottom",
        text: "",
    };
}

// var textbottom = tickbottom

//     .append("text")
//     //  .attr("transform", "rotate(-90)")
//     .attr("y", padding_bottom - 5)
//     .attr("x", w / 2)
//     //  .attr("dy", "-5.1em")
//     .attr("text-anchor", "middle")
//     .style("fill", "#fff")
//     .text(databottom.text);

if (booleanthreshold) {
    var median = svg
        .append("line")
        .attr("x1", padding_left)
        .attr("y1", yscale(threshold))
        .attr("x2", w - padding_right)
        .attr("y2", yscale(threshold))
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", 5.5)
        .attr("stroke", "#002f34");
}

var tickleft = svg
    .append("g")
    .attr("class", "y0 axis")
    .style("font-weight", function (c) {
        return boolean_bold_y ? "bold" : "normal";
    })
    .attr("transform", "translate(" + padding_left + ",0)");

tickleft.call(yaxis);
var textleft = tickleft
    .append("text")
    //  .attr("transform", "rotate(-90)")
    .attr("y", 15 + (padding_top - 40))
    // .attr("x", 20)
    .attr("dy", 0)
    //  .attr("dy", "-5.1em")
    .attr("text-anchor", "middle")
    .style("fill", "#000000");

// .text("Active Energy (MWh)");

dataleft.text.split("-").forEach((data, i) => {
    if (i == 0) {
        textleft.append("tspan").attr("x", 0).attr("dy", 0).text(data);
    } else {
        textleft.append("tspan").attr("x", 0).attr("dy", 10).text(data);
    }
});

svg.select(".y0.axis")
    .selectAll("path")
    .style("fill", "none")
    .style("stroke", colorlinecharty0)
    .style("shape-rendering", "crispEdges");
svg.select(".y0.axis")
    .selectAll("line")
    .style("fill", "none")
    .style("stroke", colorlinecharty0)
    .style("shape-rendering", "crispEdges");
svg.select(".y0.axis").selectAll("text").style("fill", fontcolorlinecharty0);

// textleft.append("tspan").attr("x", 0).attr("dy", "1.2em").text("xMWh");

if (booleanrightyaxis) {
    var tickright = svg
        .append("g")
        .attr("class", "y1 axis")
        .style("font-weight", function (c) {
            return boolean_bold_y ? "bold" : "normal";
        })
        .attr("transform", "translate(" + (w - padding_right) + ",0)");

    tickright.call(yaxisright);

    var textright = tickright

        .append("text")
        //  .attr("transform", "rotate(-90)")
        .attr("y", 15 + (padding_top - 40))
        .attr("x", 0)
        //  .attr("dy", "-5.1em")
        .attr("text-anchor", "middle")
        .style("fill", "#000000");

    // .text("Boxes");

    dataright.text.split("-").forEach((data, i) => {
        if (i == 0) {
            textright.append("tspan").attr("x", 0).attr("dy", 0).text(data);
        } else {
            textright.append("tspan").attr("x", 0).attr("dy", 10).text(data);
        }
    });

    svg.select(".y1.axis")
        .selectAll("path")
        .style("fill", "none")
        .style("stroke", colorlinecharty1)
        .style("shape-rendering", "crispEdges");
    svg.select(".y1.axis")
        .selectAll("line")
        .style("fill", "none")
        .style("stroke", colorlinecharty1)
        .style("shape-rendering", "crispEdges");
    svg.select(".y1.axis")
        .selectAll("text")
        .style("fill", fontcolorlinecharty1);
    // End ticks
}

var linenew = d3
    .line()
    .x(function (d, i, j, k) {
        return xscale(d.date) + xscale.bandwidth() / 2;
    })
    .y(function (d, i) {
        return yscale(d.line);
    });

svg.selectAll(".lines")
    .data(araayofarrayline)
    .enter()
    .append("g")
    .attr("class", "line")

    .append("path")
    .attr("d", function (b) {
        return linenew(b);
    })
    .attr("style", "fill: none;stroke-width:3px")
    .attr("stroke", function (b, i) {
        return b[0].color;
    })
    .transition()
    .duration(1500);

araayofarrayline.forEach((dataline, i) => {
    svg.selectAll("myCircles")
        .data(dataline)
        .enter()
        .append("circle")
        .attr("fill", function (d, i) {
            return d.color;
        })
        .attr("stroke", function (d, i) {
            return d.color;
        })
        .attr("cx", function (d, i) {
            // if (i % 2 === 1) {
            return xscale(d.date) + xscale.bandwidth() / 2;
            // } else {
            //     return x1("");
            // }
        })
        .attr("cy", function (d, i) {
            // if (i % 2 === 1) {

            return yscale(d.line);
            // }

            // return y(0);
        })
        .attr("r", function (d) {
            if (booleanshowmarker) {
                return 3;
            } else {
                return 1;
            }
        })
        .on("mouseenter", function (d) {
            configuration_tooltip_and_data.forEach((datacontool, ic) => {
                if (d.data[datacontool.indata]) {
                    tooltipdivlist
                        .select("#" + datacontool.indata)
                        .text(d.data[datacontool.indata]);
                } else {
                    tooltipdivlist.select("#" + datacontool.indata).text(0);
                }
            });

            tooltipdivlist
                .style("display", function (e) {
                    // if (showTooltip && !isNaN(newobj[d.data.key])) {
                    return "block";
                    // } else
                    // {
                    //     return "none";
                    // }
                })
                .style("font-size", convertFontSize(fontsizetooltipstring))
                .style("background-color", backgroundcolortooltip)
                .style("color", textcolortooltip);

            var elementtooltip = d3
                .select("#tooltipbarstackgorupdoubley")
                .node();
            var heighttooltip = elementtooltip.getBoundingClientRect().height;
            var element = d3.select("#my_dataviz").node();
            var heighmydataviz = element.getBoundingClientRect().height;

            var elementbottom = d3.select("#divbottom").node();
            var heighdivbottom = elementbottom.getBoundingClientRect().height;

            var toptooltip =
                d3.event.offsetY + (heighmydataviz - heighdivbottom - h);

            if (
                d3.event.offsetY +
                    (heighmydataviz - heighdivbottom - h) +
                    heighttooltip >
                heighmydataviz
            ) {
                toptooltip = heighmydataviz - heighttooltip;
            }

            tooltipdivlist.style("left", d3.event.offsetX + 10 + "px");
            tooltipdivlist.style("top", toptooltip + "px");
        })

        .on("mouseleave", (d) => {
            tooltipdivlist.style("display", "none");
        });
});

var divbottom = makemy_dataviz.append("div").attr("id", "divbottom");

var labeltickxaxix = divbottom
    .append("div")
    .style("padding-left", padding_left + "px")
    .style("display", "flex");

var paddingleftright = 0;

datastackgroup.forEach((datas, i) => {
    if (i == 0) {
        var length1 =
            xscale(datastackgroup[0].Category) + xscale.bandwidth() / 2;
        paddingleftright = length1 - padding_left - xscale.bandwidth() / 2;
        //    console.log(paddingleftright)
    }

    if (i == 0) {
        labeltickxaxix
            .append("div")
            .attr("class", "x-axis-label")
            .style("width", xscale.bandwidth() + paddingleftright + "px")
            .style("margin-left", paddingleftright / 2 + "px")
            .text(datas.Category);
    } else {
        labeltickxaxix
            .append("div")
            .attr("class", "x-axis-label")
            .style("width", xscale.bandwidth() + paddingleftright + "px")
            .style("margin-left", 0 + "px")
            .text(datas.Category);
    }
});

var labelxaxix = divbottom
    .append("div")
    .style("padding-left", padding_left + "px")
    .style("display", "flex");
labelxaxix
    .append("div")
    .attr("class", "x-axis-label")
    .style("width", w - padding_left - padding_right + "px")
    .style("padding", "5px")
    .text(databottom.text);
