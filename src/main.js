// Libs
const angular = require('angular');
require('angular-ui-router');
require('angularjs-viewhead');
require('angular-sanitize');
require('angulartics');

// Styles
require('css/main.less');


const ngModule = angular.module('app', [
    'ui.router',
    'viewhead',
    'ngSanitize',
    'angulartics',
    'angulartics.google.analytics'
]);

require('./config')(ngModule);
require('./run')(ngModule);
require('./shared')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});