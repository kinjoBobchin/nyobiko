weatherApp.config($mdThemingProvider => {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('indigo', {
            'default': '900'
        })
        .accentPalette('red', {
            'default': '400'
        })
        .warnPalette('red', {
            'default': '200'
        })
        .backgroundPalette('grey', {
            'default': '50',
        });
    $mdThemingProvider.alwaysWatchTheme(true);
  });