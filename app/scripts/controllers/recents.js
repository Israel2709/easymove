'use strict';

/**
 * @ngdoc function
 * @name easyMoveApp.controller:RecentsCtrl
 * @description
 * # RecentsCtrl
 * Controller of the easyMoveApp
 */
angular.module('easyMoveApp')
  .controller('RecentsCtrl', function ($scope,$window,$http,$location) {
    $scope.Model = $scope.Model || {Name : "xxx"};
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.serviceUrlRoot = "http://jsonstub.com/"

    $scope.currentView = "statesList"

    $scope.stateList = [];
    $scope.selectedState = {};
    $scope.selectedEstate = {};
    $scope.estatesList = [];

    $http({
        url: $scope.serviceUrlRoot+"states",
        method: 'GET',
        dataType: 'json',
        data: '',
        headers: {
            'Content-Type': 'application/json',
            'JsonStub-User-Key': '4954baf8-cbe5-4f9a-8b55-0e69f36a79d6',
            'JsonStub-Project-Key': '91d78447-999d-4a30-9592-b7b4caf3b9fc'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log(JSON.stringify(response.data, null, 4));
        $scope.stateList = response.data.states
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $http.get('/scripts/dummy/states.json').success(function (data){
         $scope.stateList = data.states
    });
  });

    $scope.stateDetail = function(selectedState) {
        /*console.log(selectedState)
         */
        $scope.currentView = "estatesList"
        $scope.selectedState = $scope.stateList[selectedState];
        console.log($scope.selectedState)
        $http({
            url: $scope.serviceUrlRoot + "estates/_id",
            method: 'GET',
            dataType: 'json',
            data: '',
            headers: {
                'Content-Type': 'application/json',
                'JsonStub-User-Key': '4954baf8-cbe5-4f9a-8b55-0e69f36a79d6',
                'JsonStub-Project-Key': '91d78447-999d-4a30-9592-b7b4caf3b9fc'
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.estatesList = response.data.estates
            console.log($scope.estatesList)
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("ERROR > "+JSON.stringify(response));
            $http.get('/scripts/dummy/estates.json').success(function (data){
                 $scope.estatesList = data.estates
            });
          });
    }

    $scope.estateDetail = function(selectedEstate){
      $scope.currentView = "estateDetail";
      $scope.selectedEstate = $scope.estatesList[selectedEstate];
      console.log($scope.selectedEstate)
    }

    $scope.goTo = function(destiny){
      $scope.currentView = destiny
    }

    $scope.toggleActive= function(selection, $event){
      //console.log(selectedIco)
      $event.stopPropagation();
      console.log(selection)
      if(!selection.starred){
        selection.starred = true
      } else {
        selection.starred = false
      }
    }

    /*$scope.scrollPos = 0;
    $scope.lastScroll = 0;
    $window.onscroll = function() {
        $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
        if ($scope.scrollPos > $scope.lastScroll){
            console.log("down")
            console.log($scope.scrollPos)
            $scope.bckgndPos = $(".navigation-card img").css('margin-top')
            $scope.newPos = parseInt($scope.bckgndPos) - ($scope.scrollPos * .01)
            console.log($scope.newPos)
            console.log($scope.bckgndPos)
            $(".navigation-card img").css({
              "margin-top":$scope.newPos
            })
        } else {
            console.log("up")
            console.log($scope.scrollPos)
            $scope.bckgndPos = $(".navigation-card img").css('margin-top')
            $scope.newPos = parseInt($scope.bckgndPos) + ($scope.scrollPos * .01)
            console.log($scope.newPos)
            console.log($scope.bckgndPos)
            $(".navigation-card img").css({
                "margin-top": $scope.newPos
            })
        }

        $scope.lastScroll = $scope.scrollPos
        $scope.$apply();
    };*/
  });
