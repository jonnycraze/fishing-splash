myApp.controller('mainController', ['$scope', '$route', '$timeout', 'RegisterService', 
    function ($scope, $route, $timeout, RegisterService) {
	var vm = this;

    $timeout(function() {
        if(!(typeof(componentHandler) == 'undefined')){
            componentHandler.upgradeAllRegistered();
        }
    }, 500);
	// ------------------------------------------------------------------------------------------------------------
	// Scope General App Content
	// ------------------------------------------------------------------------------------------------------------
    vm.appTitle = "Fishing Clash";
    vm.appDescription = "This is the description for the Fishing Clash website";
    vm.appKeywords = "Fishing, Tournament, Lake, Boat";
    vm.appAuthor = "Jon Ryan && Jon Best";
    // ------------------------------------------------------------------------------------------------------------
    // Hero Slider
    // ------------------------------------------------------------------------------------------------------------
    vm.slides = [
        {image: "img/slides/slide1.png", desc: "Slide one image desc"},
        {image: "img/slides/slide2.png", desc: "Slide two image desc"},
        {image: "img/slides/slide3.png", desc: "Slide three image desc"},
        {image: "img/slides/slide4.png", desc: "Slide four image desc"}

    ];
	// ------------------------------------------------------------------------------------------------------------
    // List of lakes
    // ------------------------------------------------------------------------------------------------------------
    vm.lakes = [
    	{ lakename: "mille lacs", image: "img/lakes/mille-lacs.jpg", desc: "Mille Lacs Lake" },
    	{ lakename: "vermilion", image: "img/lakes/vermilion.jpg", desc: "Vermilion Lake" },
    	{ lakename: "leech", image: "img/lakes/leech.jpg", desc: "Leech Lake" },
    	{ lakename: "minnetonka", image: "img/lakes/tonka.jpg", desc: "Lake Minnetonka" },
    	{ lakename: "independence", image: "img/lakes/indie.jpg", desc: "Lake Indie" },
    	{ lakename: "forest", image: "img/lakes/forrest.jpg", desc: "Forest Lake" },
    	{ lakename: "bald eagle", image: "img/lakes/bald-eagle.jpg", desc: "Bald Eagle Lake" },
    	{ lakename: "bemidji", image: "img/lakes/bemidji.jpg", desc: "Bemidji Lake" },
    	{ lakename: "waconia", image: "img/lakes/waconia.jpg", desc: "Lake Waconia" },
    	{ lakename: "calhoun", image: "img/lakes/calhoun.jpg", desc: "Lake Calhoun" },
    	{ lakename: "sugar", image: "img/lakes/sugar.png", desc: "Sugar Lake" },
    	{ lakename: "white bear", image: "img/lakes/white-bear-lake.jpg", desc: "White Bear Lake" }
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
    },8000);
});