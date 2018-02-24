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

const app = () => {
  return {
    template: require('./app.pug'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.prebootUrl = 'https://github.com/preboot/angular-webpack';
    this.materialUrl = 'https://github.com/angular/material';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngMaterial','ngMessages'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;