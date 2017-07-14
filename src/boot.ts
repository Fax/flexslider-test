import * as angular from 'angular';
require('../css/style.scss');
angular
.module('fax-app',[])
.component('mycomponent',{
  template: `<div>Hell yeah!</div>`
})
.run(runApp);

function runApp(){
  console.log('hell yeah!');
}