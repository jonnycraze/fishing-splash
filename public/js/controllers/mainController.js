myApp.controller('mainController', ['$scope', '$route', '$timeout', 'RegisterService', function ($scope, $route, $timeout, RegisterService) {
	var vm = this;
	// ------------------------------------------------------------------------------------------------------------
	// Scope General App Content
	// ------------------------------------------------------------------------------------------------------------
    vm.appTitle = "Fishing Clash";
    vm.appDescription = "This is the description for the Fishing Clash website";
    vm.appKeywords = "Fishing, Tournament, Lake, Boat";
    vm.appAuthor = "Jon Ryan && Jon Best";
    // ------------------------------------------------------------------------------------------------------------
    // Slider
    // ------------------------------------------------------------------------------------------------------------
    vm.slides = [
        {image: "img/slide1.png", desc: "Slide one image desc"},
        {image: "img/slide2.png", desc: "Slide two image desc"},
        {image: "img/slide3.png", desc: "Slide three image desc"},
        {image: "img/slide4.png", desc: "Slide four image desc"}

    ];
	// ------------------------------------------------------------------------------------------------------------
    // List of lakes
    // ------------------------------------------------------------------------------------------------------------
    vm.lakes = [
    	{ lakename: "mille lacs" },
    	{ lakename: "vermilion" },
    	{ lakename: "leech" },
    	{ lakename: "minnetonka" },
    	{ lakename: "independence" },
    	{ lakename: "forest" },
    	{ lakename: "bald" },
    	{ lakename: "eagle" },
    	{ lakename: "waconia" },
    	{ lakename: "calhoun" },
    	{ lakename: "sugar" },
    	{ lakename: "white bear" }
    ];

    // ------------------------------------------------------------------------------------------------------------
    // Registration Form	
    // ------------------------------------------------------------------------------------------------------------
    vm.registerModel = {};

    // rgistration form sumit function
    vm.register = function (user) {
    	// do magic
    	RegisterService.register(user).then(function (data) {
    		vm.formErrMsg = false;
    		vm.registerModel = {};
    		vm.registerForm.$setPristine();
    		vm.successMessage = true;
    		$timeout(function () {
    			vm.successMessage = false;
    		}, 8000);
    	}, function(err) {
    		vm.formErrMsg = true;
    		vm.formErr = err;
    		vm.registerForm.email.$setValidity('email', false);
    		vm.successMessage = false;
    	});
    };
}]);

// (function () {
            
//     var vidElem = document.getElementById("heroVid");
//     // set playback rate 
//     vidElem.playbackRate = 0.5; 
    
// })();

$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#carousel ul").animate({marginLeft:-194},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});