/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

chart.data = [
    {
        name: "Front-End",
        children: [
            {
                name: "CSS",
                children: [
                    { name: "Bootstrap", value: 100 },
                    { name: "Tailwind", value: 60 }
                ]
            },
            {
                name: "JS-Frameworks",
                children: [
                    {
                        name: "React-Js",
                        value: 280
                    },
                    {
                        name: 'NextJs',
                        value: 100
                    },
                    {
                        name: "JS",
                        children: [
                            { name: "Bootstrap", value: 185 },
                            { name: "Slick", value: 198 }
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Backend-End",
        children: [
            {
                name: "Frameworks",
                children: [
                    { name: "Node Js", value: 200 },
                    { name: "Express JS", value: 160 },
                    { name: "PHP", value: 260 }
                ]
            },
            {
                name: "Database",
                children: [
                    { name: "MongoDB", value: 235 },
                    { name: "My-SQL", value: 128 }
                ]
            },
        ]
    }
];

networkSeries.dataFields.value = "value";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.children = "children";
networkSeries.nodes.template.tooltipText = "{name}:{value}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 10;

networkSeries.links.template.strokeWidth = 1;

var hoverState = networkSeries.links.template.states.create("hover");
hoverState.properties.strokeWidth = 3;
hoverState.properties.strokeOpacity = 1;

networkSeries.nodes.template.events.on("over", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
    if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = true;
    }

})

networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
    if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = false;
    }
})