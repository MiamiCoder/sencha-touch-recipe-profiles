Ext.define("dashboard.view.tablet.Main", {
    extend: "Ext.Container",
    requires: [
        "Ext.TitleBar"
    ],
    alias: "widget.mainTablet",
    config: {
        layout: {
            type:"vbox"
        },
        items: [
            {
                xtype: "titlebar",
                docked: "top",
                title: "Executive Dashboard",
                items: [
                    {
                        iconCls: "refresh",
                        align: "right",
                        handler: function () {
                            var parent = this.up("titlebar").getParent();
                            parent.fireEvent("refreshRequestCmd", parent);
                        }
                    }
                ]
            },            
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        items:[
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Hours Worked vs. Hours Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                html: "Hours Worked vs. Hours Billed chart goes here"
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Value Worked vs. Value Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                html: "Value Worked vs. Value Billed chart goes here",
                            }
                        ]
                    }
                ]
            }                
        ]
    }
});