Ext.define('dashboard.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        views: ['Main']
    },
    isActive: function () {
        return Ext.os.deviceType !== 'Phone';
    },
    launch: function () {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('dashboard.view.tablet.Main'));
    }
});