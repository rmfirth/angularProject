var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
// Search for a specified string.
    $scope.images = [
        "https://i.ytimg.com/vi/1ZYbU82GVz4/maxresdefault.jpg",
        "https://i.ytimg.com/vi/77ZozI0rw7w/maxresdefault.jpg",
        "https://i.ytimg.com/vi/gbU2QQpOa70/maxresdefault.jpg",
        "https://wallpapercave.com/wp/VrmXlXD.jpg",
        "https://i.ytimg.com/vi/xwQ5YpcCDHk/maxresdefault.jpg",
        "https://delilahhelton.com/wp-content/uploads/2017/06/beach-sunset-pictures-hd-wallpaper-of-beach-hdwallpaper2013-com_.jpg",
        "http://avante.biz/wp-content/uploads/Ocean-Life-Backgrounds/Ocean-Life-Backgrounds-002.jpg",
        "http://www.xsjjys.com/data/out/101/WHDQ-512445056.jpg",
        "http://eskipaper.com/images/awesome-beach-background-1.jpg",
        "https://i.ytimg.com/vi/KUgrBTNbSe4/maxresdefault.jpg",
        "http://eskipaper.com/images/california-beach-2.jpg",
        "http://deskbg.com/s3/wpp/10/10197/relaxing-railay-beach-thailand-desktop-background.jpg",



    ];

    $scope.imageIndex = 0;
    $scope.imageSrc = $scope.images[$scope.imageIndex];
    $scope.nextImage = function() {
        $scope.imageIndex = ($scope.imageIndex + 1) % $scope.images.length;
        $scope.imageSrc = $scope.images[$scope.imageIndex];
        $scope.backgroundStuff["background"] = ("url(" + $scope.imageSrc + ")");
    }

    $scope.backgroundStuff = {
        "background" : ("url(" + $scope.imageSrc + ")"),
        "background-repeat" : "no-repeat"
    }

    $scope.prevImage = function() {
        $scope.imageIndex = ($scope.imageIndex + $scope.images.length - 1) % $scope.images.length;
        $scope.imageSrc = $scope.images[$scope.imageIndex];
        $scope.backgroundStuff["background"] = ("url(" + $scope.imageSrc + ")");
    }
});



