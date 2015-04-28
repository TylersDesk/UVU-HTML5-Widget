// Class Samples
// 
// Name
// Title
// CRN
// Credits
// Description


var sampleDataJson = {
  "classes" : [
    // Placeholder to copy from
    // { 
    //   "classid"        : "",
    //   "title"       : "",
    //   "crn"         : "",
    //   "credits"     : "",
    //   "description" : ""
    // },
    {
      "classid"     : "COMP  301R",
      "title"       : "Digital Lecture Series",
      "crn"         : "2131",
      "credits"     : "1",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    },
    {
      "classid"     : "DGM  2110",
      "title"       : "Digital Motion Picture Essentials",
      "crn"         : "4123123",
      "credits"     : "3",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    },
    {
      "classid"     : "DGM  2130",
      "title"       : "Digital Audio Essentials",
      "crn"         : "4234",
      "credits"     : "3",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    },
    {
      "classid"     : "DGM  2210",
      "title"       : "3D Modeling and Animation Essentials",
      "crn"         : "1231412",
      "credits"     : "3",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    },
    {
      "classid"     : "DGM  2250",
      "title"       : "Principles of Digital Design",
      "crn"         : "512432",
      "credits"     : "3",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    },
    {
      "classid"     : "DGM  2271",
      "title"       : "Principles of Web Design",
      "crn"         : "3141234",
      "credits"     : "3",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual."
    }
  ]
}

angular.module('uvuCatalog', ['ngAnimate', 'uvuCatalog.services'])

  .run(function() {
  })

  .controller("classCtrl", ['$scope','coursesServices', function($scope, coursesServices){


    //Contains the filter options
    $scope.filterOptions = {
      classes: [
        {id : 2, name : 'Show All'},
        {id : 3, name : 'Cinema'},
        {id : 4, name : 'Animation'},
        {id : 5, name : 'Internet'},
        {id : 6, name : 'Digital Audio'}
      ]
    };

    //Mapped to the model to filter
    $scope.filterItem = {
      classes: $scope.filterOptions.classes[0]
    };


    //Custom filter - filter based on the rating selected
    $scope.customFilter = function (data) {
      if (data.track === $scope.filterItem.classes.name) {
        return true;
      } else if ($scope.filterItem.classes.name === 'Show All') {
        return true;
      } else {
        return false;
      }
    }; 

    $scope.modalData = {};

    $scope.fireMe = function(modalClass) {
      $('#classModal').foundation('reveal', 'open');
      $scope.modalData = modalClass;
    };

        coursesServices.courses().then(function(data) {
            //this will execute when the
            //AJAX call completes.
            $scope.classes = data;
            console.log(data);
        });



     $scope.svgIcons = function(tech) {
         console.log(tech);

         switch(tech) {
             case "Laptop":
                 tech = "images/svgs/laptop.svg";
                 break;
             case "Tablet":
                 tech =  "images/svgs/tablet.svg";
                 break;
             case "Smartphone":
                 tech =  "images/svgs/phone.svg";
                 break;
             case "Storage Drive":
                 tech =  "images/svgs/hardDrive.svg";
                 break;
             case "Cloud Storage":
                 tech =  "images/svgs/cloudStorage.svg";
                 break;
             case "DSLR":
                 tech =  "images/svgs/dslr.svg";
                 break;
             case "Game Controller":
                 tech =  "images/svgs/gameController.svg";
                 break;
             case "Wacom Pen":
                 tech =  "images/svgs/wacomPen.svg";
                 break;
             case "Mic":
                 tech =  "images/svgs/mic.svg";
                 break;
             case "Headphones":
                 tech =  "images/svgs/headphones.svg";
                 break;
             case "Software":
                 tech =  "images/svgs/desktop.svg";
                 break;
             case "Web Hosting":
                 tech =  "images/svgs/hosting.svg";
                 break;
             default: tech = "images/svgs/exit.svg";
                 break;
         }
         $scope.techImage = tech;
         console.log($scope.techImage);
         return $scope.techImage;

      };

        $scope.techImage;

        $scope.coreClass;

        $scope.classStading =function(core){
            if (core == true){
                $scope.coreClass ="Core";
            }else{
                $scope.coreClass ="Elective";
            }
        }




  }]);