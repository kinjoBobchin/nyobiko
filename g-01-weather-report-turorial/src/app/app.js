// 依存パッケージ
import angular from 'angular';
import uiRouter   from 'angular-ui-router';
import ngAnimate  from 'angular-animate';
import ngAria     from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

// CSS
import 'angular-material/angular-material.css';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.pug'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngMaterial','ngMessages'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;