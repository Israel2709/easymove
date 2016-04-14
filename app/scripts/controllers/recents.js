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

    $scope.stateList = [];
    $scope.stateSelected = false;
    $scope.selectedState = {};
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
    }).success(function(data, status, headers, config) {
        console.log(JSON.stringify(data, null, 4));
        $scope.stateList = data.states
    });

    $scope.stateDetail = function(selectedState) {
        /*console.log(selectedState)
         */
        $scope.stateSelected = true;
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
        }).success(function(data, status, headers, config) {
            //console.log(JSON.stringify(data, null, 4));
            $scope.estatesList = data.estates
            console.log($scope.estatesList)
        });
    }

    $scope.munDetail = function(selectedMun){
      /*console.log(selectedState)
      */
      $scope.munSelected = true;
      $scope.selectedMun = $scope.selectedState.municipalities;
      console.log($scope.selectedMun)
    }

    $scope.returnTo = function(destiny){
      $location.path(destiny)
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
 
      /*if(!$(selectedIco).hasClass("active")){
        $(selectedIco).addClass("active")
        console.log("inactive")
        console.log(selectedIco)
      } 

      if($(selectedIco).hasClass("active")){
        $(selectedIco).removeClass("active")
        console.log("active")
        console.log(selectedIco)
      }*/
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
