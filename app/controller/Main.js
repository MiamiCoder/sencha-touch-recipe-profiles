Ext.define("dashboard.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            mainTabletView: "mainTablet",
            mainPhoneView: "mainPhone"
        },
        control: {
            mainTabletView: {
                refreshRequestCmd: "onRefreshRequestCmd"
            },
            mainPhoneView: {
                refreshRequestCmd: "onRefreshRequestCmd"
            }
        }
    },
    onRefreshRequestCmd: function (view) {
        Ext.getStore("HrsAndValueByYear").load();
    }
});