Ext.define('dashboard.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        views: ['Main']
    },
    isActive: function () {
        return Ext.os.deviceType === 'Phone';
    },
    launch: function () {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('dashboard.view.phone.Main'));
    }
});