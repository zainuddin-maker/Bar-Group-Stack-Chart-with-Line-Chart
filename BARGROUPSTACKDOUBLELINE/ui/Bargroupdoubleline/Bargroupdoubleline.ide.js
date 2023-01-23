TW.IDE.Widgets.Bargroupdoubleline = function () {
    // this.widgetIconUrl = function () {
    //     return "http://localhost:8015/Thingworx/Common/thingworx/widgets/mashup/mashup.ide.png";
    // };

    this.widgetProperties = function () {
        var properties = {
            name: "Bargroupdoubleline",
            description: "Bargroupdoubleline Chart",
            category: ["Common"],
            isExtension: true,
            supportsAutoResize: true,
            properties: {
                WidthChart: {
                    baseType: "NUMBER",
                    defaultValue: 800,
                    isBindingTarget: true,
                },
                HeightChart: {
                    baseType: "NUMBER",
                    defaultValue: 800,
                    isBindingTarget: true,
                },

                PaddingLeft: {
                    baseType: "NUMBER",
                    defaultValue: 40,
                },
                PaddingRight: {
                    baseType: "NUMBER",
                    defaultValue: 40,
                },
                PadingBottom: {
                    baseType: "NUMBER",
                    defaultValue: 9,
                },
                PadingTop: {
                    baseType: "NUMBER",
                    defaultValue: 40,
                },
                Threshold: {
                    baseType: "NUMBER",
                    isBindingTarget: true,
                    defaultValue: 0,
                },
                WidhtPerBar: {
                    baseType: "NUMBER",
                    isBindingTarget: true,
                    defaultValue: 50,
                },
                DropdownType: {
                    baseType: "STRING",
                    isBindingTarget: true,
                    isBindingSource: true,
                    defaultValue: "yAxisLeft_noLegend",
                    selectOptions: [
                        {
                            value: "yAxisLeft_noLegend",
                            text: "yAxisLeft_noLegend",
                        },
                        {
                            value: "yAxisLeft_Legend",
                            text: "yAxisLeft_Legend",
                        },
                        {
                            value: "yAxisLeft_Legendinright",
                            text: "yAxisLeft_Legendinright",
                        },
                        {
                            value: "doubleYaxis_noLegend",
                            text: "doubleYaxis_noLegend",
                        },
                        {
                            value: "doubleYaxis_Legend",
                            text: "doubleYaxis_Legend",
                        },
                        {
                            value: "yAxisLeft_noLegend_threshold",
                            text: "yAxisLeft_noLegend_threshold",
                        },
                    ],
                },
       
                ConfigurationYaxis: {
                    baseType: "INFOTABLE",
                    isBindingTarget: true,
                },
                ConfigurationTooltipAndData: {
                    baseType: "INFOTABLE",
                    isBindingTarget: true,
                },
                ConfigurationListStack: {
                    baseType: "INFOTABLE",
                    isBindingTarget: true,
                },
                DataStackGroupandLine: {
                    baseType: "INFOTABLE",
                    isBindingTarget: true,
                },

                StyleTooltip: {
                    baseType: "STYLEDEFINITION",
                    defaultValue: "DefaultTooltipStyle",
                },


                BooleanExchangeYaxis :{
                    baseType: "BOOLEAN",
                    defaultValue: false,
                },

                BooleanShowMarker :{
                    baseType: "BOOLEAN",
                    defaultValue: true,
                },

                DataTooltipCustom: {
                    baseType: "INFOTABLE",
                    isBindingTarget: true,
                },
                BooleanUsingTooltipCustom :{
                    baseType: "BOOLEAN",
                    defaultValue: false,
                    isBindingTarget: true,
                },
                // StyleXaxis: {
                //     baseType: "STYLEDEFINITION",
                //     defaultValue: "DefaultChartStyle1",
                // },
                // StyleYaxis: {
                //     baseType: "STYLEDEFINITION",
                //     defaultValue: "DefaultChartStyle10",
                // },
            },
        };

        return properties;
    };

    // The function is called before any property is updated in the ThingWorx Composer. You can perform validations on the new property value before it is committed. If the validation fails, you can return a message string to inform the user about the invalid input. The new property value is not be committed. If nothing is returned during the validation, then the value is assumed valid.
    //  this.beforeSetProperty = function (name, value) {
    //     // Validate Input Properties

    // };

    this.afterSetProperty = function (name, value) {
        this.updatedProperties();
        return true;
    };

    this.afterLoad = function () {};

    this.renderHtml = function () {
        return '<div class="widget-content widget-Bargroupdoubleline"></div>';
    };

    // this.afterRender = function () {
    //     // NOTE: this.jqElement is the jquery reference to your html dom element
    //     // 		 that was returned in renderHtml()

    //     // get a reference to the value element
    //     valueElem = this.jqElement.find(".HelloWorld-property");
    //     // update that DOM element based on the property value that the user set
    //     // in the mashup bHelloWorldlder
    //     valueElem.text(this.getProperty("Name"));
    // };

    this.afterRender = function () {
        this.setupWidget();
    };

    this.setupWidget = function () {
        var widgetID = this.jqElementId;

        d3v4.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.allWidgetProperties().properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            console.log("widgetProps idle bar group stack double line chart");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        var w = 800,
    h = 846,
    padding_left = 40,
    padding_right = 40,
    padding_bottom = 20;
    padding_top = 40 ;

// var tick_range = 100;
// var miny = 0;
// var maxy = 1000;

var configuration_y_axis = [

];

var configuration_tooltip_and_data = [
 
];

var configurationliststack = [
 

]

var datastackgroup = [

];

//tooltip

var fontsizetooltipstring = "2xl";
var backgroundcolortooltip = "#0f0";
let textcolortooltip = "#00f";
// let showTooltip = true;

// batas input

var listlinechart =  configuration_tooltip_and_data.filter((data)=> data.type == "line")
var listbarchart =  configuration_tooltip_and_data.filter((data)=> data.type == "bar")


configurationliststack.forEach((data,i)=>{

    var list_color = ""

    data.list_type.split(",").forEach((dataj,j)=>{
      var temp =  configuration_tooltip_and_data.find((datak)=>datak.indata == dataj )

      if(temp){
        list_color+= temp.color +","
      }else {
        list_color+= ","
      }

    })
    configurationliststack[i].list_color = list_color
  
})

var configuratin_data_temp = configurationliststack






var araayofarrayline =[]

listlinechart.forEach((datak)=>{

    var datal = []

    datastackgroup.forEach((datadata,j)=>{
      
        datal.push({
            date : datadata.Category,
            line : datadata[datak.indata] ? datadata[datak.indata]  :0,
            color : datak.color,
            intooltip : datak.intooltip
        })
    })


     araayofarrayline.push(datal)

})

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
var makemy_dataviz = d3v4
    .select(`#${widgetID}`)
    .append("div")
    .attr("id", "my_dataviz")
    .style("background-color","#000")
    .style("width", w + "px")
    // .style("height", height + (margin.top + margin.bottom) + "px");

    var first_legend = makemy_dataviz.append("div").attr("class","first_legend")
    console.log(listbarchart)
    console.log(listlinechart)

    listlinechart.forEach((data,i)=>{
        var child_first_legend = first_legend.append("div").attr("class","child_first_legend").style("margin-right","60px")
        child_first_legend.append("div").attr("class","box_child_first_legend").style("background-color",data.color)
        child_first_legend.append("div").attr("class","text_child_first_legend").text(data.intooltip)
    })

    var first_legend = makemy_dataviz.append("div").attr("class","first_legend")
    listbarchart.forEach((data,i)=>{
        var child_first_legend = first_legend.append("div").attr("class","child_first_legend").style("margin-right","20px")
        child_first_legend.append("div").attr("class","box_child_first_legend").style("background-color",data.color)
        child_first_legend.append("div").attr("class","text_child_first_legend").text(data.intooltip)
    })


var svg = d3v4.select("#my_dataviz").append("svg").attr("width", w).attr("height", h);

var tooltipdiv = d3v4
    .select("#my_dataviz")
    .append("div")
    .attr("id", "tooltipstackgroupandline");

tooltipdiv.append("p").attr("id", "name");
tooltipdiv.append("p").attr("id", "value");






// var stack = d3v4.stack().keys(["type1", "type2", "type3", "type4"]);

var datasets = [];

var accent = [];

configuratin_data.forEach((dataconfig, i) => {
    datasets.push(d3v4.stack().keys(dataconfig.list_type)(datastackgroup));
    accent.push(d3v4.scaleOrdinal(dataconfig.list_color));
});

var num_groups = datasets.length;

var xlabels = datastackgroup.map(function (d) {
    return d["Category"];
});

var xscale = d3v4
    .scaleBand()
    .domain(xlabels)
    .range([padding_left, w - padding_right])
    //   .paddingInner(0.1)
    .padding(0.2);

// var ydomain_min = d3v4.min(
//     datasets.flat().map(function (row) {
//         return d3v4.min(
//             row.map(function (d) {
//                 return d[1];
//             })
//         );
//     })
// );
// var ydomain_max = d3v4.max(
//     datasets.flat().map(function (row) {
//         return d3v4.max(
//             row.map(function (d) {
//                 return d[1];
//             })
//         );
//     })
// );


var xaxis = d3v4.axisBottom(xscale);
var dataleft = configuration_y_axis.find(
    (configuration) => configuration.orientation == "left"
);



if (!dataleft){
    dataleft =    {
        tick_range: 10,
        miny: 0,
        maxy: 100,
        orientation: "left",
        text: "",
    }
}
var yscale = d3v4
    .scaleLinear()
    .domain([dataleft.miny, dataleft.maxy])

    .range([h - padding_bottom, padding_top]);
var yaxis = d3v4
    .axisLeft(yscale)
    .tickValues(d3v4.range(dataleft.miny, dataleft.maxy + 1, dataleft.tick_range));

var dataright = configuration_y_axis.find(
    (configuration) => configuration.orientation == "right"
);


if (!dataright){
    dataright =   {
        tick_range: 10,
        miny: 0,
        maxy: 100,
        orientation: "right",
        text: "",
    }
}
var yscaleright = d3v4
    .scaleLinear()
    .domain([dataright.miny, dataright.maxy])

    .range([h - padding_bottom, padding_top]);
var yaxisright = d3v4
    .axisRight(yscaleright)
    .tickValues(d3v4.range(dataright.miny, dataright.maxy + 1, dataright.tick_range));



d3v4.range(num_groups).forEach(function (gnum) {
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
        .attr("y", (d) => yscaleright(d[1]))

        .attr("width", xscale.bandwidth() / num_groups)
        .attr("height", (d) => yscaleright(d[0]) - yscaleright(d[1]))
        .on("mouseenter", function (d, i) {
       
            var element = d3v4.select('#my_dataviz').node();
         var heighmydataviz =   element.getBoundingClientRect().height;

           

            var BreakException = {};

            var sum = 0;
            var type = "";

            try {
                configuratin_data[gnum].list_type.forEach(function (el) {
                    if (d.data[el]) {
                        sum += d.data[el];
                    }
                    if (sum === d[1]) {
                        type = el;
                        throw BreakException;
                    }
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }

            tooltipdiv.style("left", d3v4.event.offsetX + 10 + "px");
            tooltipdiv.style("top", d3v4.event.offsetY  + (heighmydataviz - h) - 15 + "px");


            tooltipdiv
                .style("display", function (e) {
                    // if (showTooltip && !isNaN(newobj[d.data.key])) {
                    return "inline-block";
                    // } else
                    // {
                    //     return "none";
                    // }
                })
                .style("font-size", convertFontSize(fontsizetooltipstring))
                .style("background-color", backgroundcolortooltip)
                .style("color", textcolortooltip);

            tooltipdiv.html( configuration_tooltip_and_data.find((ctd)=> ctd.indata == type).intooltip   + "    :" + (d[1] - d[0]));
        })
        .on("mousemove", function (d) {
            // console.log(d.data);
            //
            var element = d3v4.select('#my_dataviz').node();
            var heighmydataviz =   element.getBoundingClientRect().height;

            console.log(heighmydataviz - h)
            var BreakException = {};

            var sum = 0;
            var type = "";

            try {
                configuratin_data[gnum].list_type.forEach(function (el) {
                    if (d.data[el]) {
                        sum += d.data[el];
                    }
                    if (sum === d[1]) {
                        type = el;
                        throw BreakException;
                    }
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }

            tooltipdiv.style("left", d3v4.event.offsetX + 10 + "px");
            tooltipdiv.style("top", d3v4.event.offsetY  + (heighmydataviz - h) - 15 + "px");

            tooltipdiv
                .style("display", function (e) {
                    // if (showTooltip && !isNaN(newobj[d.data.key])) {
                    return "inline-block";
                    // } else
                    // {
                    //     return "none";
                    // }
                })
                .style("font-size", convertFontSize(fontsizetooltipstring))
                .style("background-color", backgroundcolortooltip)
                .style("color", textcolortooltip);

            tooltipdiv.html(configuration_tooltip_and_data.find((ctd)=> ctd.indata == type).intooltip  + "    :" + (d[1] - d[0]));
        })
        .on("mouseleave", function (d, i) {
            // console.log("d")
            // console.log(i)
            // if (d){
            //   tooltipdiv.style("display", "inline-block")
            // }else {
            tooltipdiv.style("display", "none");
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

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h - padding_bottom) + ")")
    .style("font-weight", function (c) {
        return boolean_bold_x ? "bold" : "normal";
    })
    .call(xaxis);

    svg.select(".x.axis").selectAll("text").style("fill", fontcolorlinechartx);
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
    .attr("y",15 + (padding_top - 40))
    // .attr("x", 20)
    .attr("dy", 0)
    //  .attr("dy", "-5.1em")
    .attr("text-anchor", "middle")
    .style("fill", "#000000");

// .text("Active Energy (MWh)");


dataleft.text.split('-').forEach((data,i)=>{

    if (i == 0){
        textleft.append("tspan").attr("x", 0).attr("dy", 0).text(data);

    }else {
         textleft.append("tspan").attr("x", 0).attr("dy",10).text(data);

    }
})



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
var tickright = svg.append("g")
.attr("class", "y1 axis")
.style("font-weight", function (c) {
    return boolean_bold_y ? "bold" : "normal";
})
.attr("transform", "translate(" + (w - padding_right) + ",0)")

tickright.call(yaxisright)

var textright = tickright

    .append("text")
    //  .attr("transform", "rotate(-90)")
    .attr("y", 15 + (padding_top - 40))
    .attr("x", 0)
    //  .attr("dy", "-5.1em")
     .attr("text-anchor", "middle")
    .style("fill", "#000000")

    // .text("Boxes");

    dataright.text.split('-').forEach((data,i)=>{

        if (i == 0){
            textright.append("tspan").attr("x", 0).attr("dy", 0).text(data);
    
        }else {
             textright.append("tspan").attr("x", 0).attr("dy",10).text(data);
    
        }
    })

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
svg.select(".y1.axis").selectAll("text").style("fill", fontcolorlinecharty1);
// End ticks



var linenew = d3v4
    .line()
    .x(function (d, i ,j ,k) {

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
    .attr("d", function (b ) {
        return linenew(b);
    })
    .attr("style", "fill: none;stroke-width:3px")
    .attr("stroke", function (b,i) {
    
        return b[0].color
    } )
    .transition()
    .duration(1500);

    araayofarrayline.forEach((dataline,i)=>{


        svg.selectAll("myCircles")
        .data(dataline)
        .enter()
        .append("circle")
        .attr("fill", function (d ,i) {
            
         
            return d.color
        })
        .attr("stroke", "#fff")
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
        .attr("r", 3)
        .on("mouseenter", function (d) {

            var element = d3v4.select('#my_dataviz').node();
            var heighmydataviz =   element.getBoundingClientRect().height;
           
             
            tooltipdiv.style("left", d3v4.event.offsetX + 10 + "px");
         

            tooltipdiv.style("top", d3v4.event.offsetY  +(heighmydataviz  - h) - 15 + "px");

    
            tooltipdiv
                .style("display", function (e) {
                    // if (showTooltip && !isNaN(newobj[d.data.key])) {
                    return "inline-block";
                    // } else
                    // {
                    //     return "none";
                    // }
                })
                .style("font-size", convertFontSize(fontsizetooltipstring))
                .style("background-color", backgroundcolortooltip)
                .style("color", textcolortooltip);
    
               tooltipdiv.html( d.intooltip   + "    :" + d.line);
        })
    
        .on("mouseleave", (d) => {
       
            tooltipdiv.style("display", "none");
        }
            
        );
    })

   

        
    };

    // this.widgetEvents = function () {
    //     return {
    //         DoubleClicked: {
    //             description:
    //                 "Event triggered when a row has been double clicked",
    //         },
    //         Clicked: {
    //             description: "Event triggered when a row has been clicked",
    //         },
    //     };
    // };
};
