Ext.define("dashboard.view.ValueChart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.valuechart",
    config: {
        flex: 1,
        xtype: "chart",
        store: "HrsAndValueByYear",
        cls: "chart",
        innerPadding: 20,
        animate: true,
        series: [
            {
                type: "line",
                xField: "year",
                yField: "valuebilled",
                title: "Value Billed",
                style: {
                    stroke: "#789700",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#789700",
                    radius: 5,
                    lineWidth: 3
                },
                label: {
                    field: "valuebilled",
                    color: "#000",
                    display: "over",
                    font: "10px Helvetica"
                }
            },
            {
                type: "line",
                xField: "year",
                yField: "valueworked",
                title: "Value Worked",
                style: {
                    stroke: "#9d5d00",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#9d5d00",
                    radius: 5,
                    lineWidth: 3
                },
                label: {
                    field: "valueworked",
                    color: "#000",
                    display: "over",
                    font: "10px Helvetica"
                }
            }
        ],
        axes: [
            {
                type: "numeric",
                position: "left",
                title: {
                    fontSize: 15,
                    text: "Value"
                },
                minimum: 250000,
                maximum: 500000,
                grid: {
                    even: {
                        fill: "#f9f9f9"
                    }
                }
            },
            {
                type: "category",
                position: "bottom"
            }
        ]
    }
});