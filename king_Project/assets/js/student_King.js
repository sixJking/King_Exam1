angular.module('studentApp', [])
  .controller('StudentController', function($scope) {

    var students = [
      { firstName: "Raj", lastName: "Joseph", address: "1234 Raj Street", city: "Houston", state: "TX", country: "USA" }
    ];

    $scope.addThisStudent = function() {
      $scope.students.push({
        firstName: $scope.newStudent.firstName,
        lastName: $scope.newStudent.lastName,
        address: $scope.newStudent.address,
        city: $scope.newStudent.city,
        state: $scope.newStudent.state,
        country: $scope.newStudent.country
      });
      $scope.newStudent = {}; // Clear the form after adding
    };

    $scope.removeStudent = function(index) {
      $scope.students.splice(index, 1);
    };

    $scope.students = students;

  });
