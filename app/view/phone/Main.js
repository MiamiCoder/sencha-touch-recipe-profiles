Ext.define("dashboard.view.phone.Main", {
    extend: "Ext.Container",
    requires: [
        "Ext.TitleBar"
    ],
    alias: "widget.mainPhone",
    config: {
        layout: {
            type:"fit"
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
                xtype: "tabpanel",
                tabBarPosition: "bottom",
                items: [
                    {
                        title: 'Hours',
                        iconCls: 'time',
                        layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Hours Worked vs. Hours Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "hrschart"
                            }
                        ]
                    },
                    {
                        title: "Value",
                        iconCls: "star",
                        layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Value Worked vs. Value Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "valuechart"
                            }
                        ]
                    }
                ]
            }
        ]
    }
});