var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http)
    {
    // Search for a specified string.
    $scope.searchVideo = function() {
        var url = "https://pixabay.com/api/?key=6766253-c5676f36b0a8e73817e60de84&q=";
        url += $scope.image;
        $http.get(url).
            then(function(response) {
                console.log(response);
        });
        console.log(request);

        request.execute(function(response) {
            var str = JSON.stringify(response.result);
            $('#search-container').html('<pre>' + str + '</pre>');
            });
        }
    })

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}


