'use strict';

angular.module('mytodoApp')
  .controller('author', function ($scope,$location,dataservice) {
  

  	$scope.author = function () {


	     
	      dataservice.author().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

    $scope.rating = function () {
    	var ao = {};
	    ao.transname = $scope.authorname;
	    ao.rating= $scope.star;
	    ao.trans_from= $scope.trans_from;
	    ao.trans_to= $scope.trans_to;


	     if (ao) {
	      dataservice.rating(ao).then(
	        function (userData) {
	        	if (userData.status== 'voted')
	        	{
	        		alert("voted");
					
	        	}
	        	if (userData.status== 'notvote')
	        	{
	        		alert("already voted");
					
	        	}
	        }

	        );
	  }
	  };

          
	  
});