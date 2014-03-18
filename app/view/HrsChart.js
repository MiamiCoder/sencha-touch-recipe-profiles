Ext.define("dashboard.view.HrsChart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.hrschart",
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
                yField: "hrsworked",
                title: "Hours Worked",
                style: {
                    stroke: "#003366",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#003366",
                    radius: 5,
                    lineWidth: 3
                },
                label: {
                    field: "hrsworked",
                    color: "#000",
                    display: "over",
                    font:"10px Helvetica"
                }
            },
            {
                type: "line",
                xField: "year",
                yField: "hrsbilled",
                title: "Hours Billed",
                style: {
                    stroke: "#6d0060",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#6d0060",
                    radius: 5,
                    lineWidth: 3
                },
                label: {
                    field: "hrsbilled",
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
                    text: "Hrs"
                },
                minimum: 130000,
                maximum: 180000,
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