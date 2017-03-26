
angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
  	{name: 'Item', featured: true, published: new Date('1/12/2017')},
  	{name: 'Item', featured: true, published: new Date('3/29/2017')},
  	{name: 'Item', featured: false, published: new Date('1/1/2017')},
  	{name: 'Item', featured: false, published: new Date('2/9/2017')},
  	{name: 'Item', featured: false, published: new Date('1/1/2017')},
  	{name: 'Item', featured: false, published: new Date('2/17/2017')},
  	{name: 'Item', featured: true, published: new Date('1/3/2017')},
  	{name: 'Item', featured: true, published: new Date('2/28/2017')},
  	{name: 'Item', featured: true, published: new Date('1/1/2017')},
  	{name: 'Item', featured: true, published: new Date('2/9/2017')},
  	{name: 'Item', featured: true, published: new Date('1/21/2017')},
  	{name: 'Item', featured: true, published: new Date('2/10/2017')},
  	{name: 'Item', featured: true, published: new Date('1/1/2017')},
  	{name: 'Item', featured: true, published: new Date('3/9/2017')},
  	{name: 'Item', featured: false, published: new Date('1/11/2017')},
  	{name: 'Item', featured: false, published: new Date('2/10/2017')}
  ];
});