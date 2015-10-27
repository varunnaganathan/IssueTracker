var App=angular.module('IssueTracker',['ui.router',]);
//.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider)
//{
//	$routeProvider.when('/index.html',{
//		templateUrl:'index.html',
//		controller:'IndexCtrl'
//	});
//}]);

App.config([
	'$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
	$stateProvider.state('index',
	{
		url: '/index',
		templateUrl: '/index.html',
		controller: 'IndexCtrl'
	});
	$stateProvider
	.state('projectlist',{
		url: '/projectlist',
		templateUrl: 'projectlist.html',
		controller: 'ProjectListCtrl'
	});
	$stateProvider
	.state('issues',{
		url:'/issues/{id}',
		templateUrl:'issue.html',
		controller:'IssueCtrl'
	});
	$stateProvider
	.state('newproject',{
		url:'/newproject',
		templateUrl:'newproject.html',
		controller:'NewProjectCtrl'
	});
	$urlRouterProvider.otherwise('/index');
}]);
App.factory('projects',[function(){
	var p = {
		projects:[{project_name:"varun",start_date:"23-23-1994",target_end_date:"34-43-4344",created_by:"varn",modified_on:"23-23-2344",modified_by:"varun"}]
	};
	return p;
}])
App.controller('IndexCtrl', ['$scope','projects',function($scope,projects){
		$scope.projects=projects.projects;
		console.log("in index");
		//[{project_name:"varun",start_date:"23-23-1994",target_end_date:"34-43-4344",created_by:"varn",modified_on:"23-23-2344",modified_by:"varun"}]
}])
App.controller('ProjectListCtrl',[
	'$scope','projects',function($scope,projects){
		$scope.projects=projects.projects;
		console.log("in PROjlist");


		}])
//.controller('IndexCtrl',[
//	'$scope','projects',function($scope,projects){
//		$scope.projects=[{project_name:"varun",start_date:"23-23-1994",target_end_date:"34-43-4344",created_by:"varn",modified_on:"23-23-2344",modified_by:"varun"}]
//	}])
App.controller('IssueCtrl',[
	'$scope','projects','$stateParams',function($scope,projects,$stateParams){
		$scope.issues=issues.issues[$stateParams.id];
		console.log("in issues");
	}]);