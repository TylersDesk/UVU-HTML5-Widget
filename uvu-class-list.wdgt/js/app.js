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

angular.module('uvuCatalog', ['ngAnimate'])

  .run(function() {
  })

  .controller('classCtrl', function($scope){


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
    }


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





    $scope.classes = [
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
      "track"       : "Pre-req",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    },
    {
      "classid"     : "DGM  2110",
      "title"       : "Digital Motion Picture Essentials",
      "crn"         : "4123123",
      "credits"     : "3",
      "track"       : "Digital Audio",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    },
    {
      "classid"     : "DGM  2130",
      "title"       : "Digital Audio Essentials",
      "crn"         : "4234",
      "credits"     : "3",
      "track"       : "Internet",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    },
    {
      "classid"     : "DGM  2210",
      "title"       : "3D Modeling and Animation Essentials",
      "crn"         : "1231412",
      "credits"     : "3",
      "track"       : "Animation",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    },
    {
      "classid"     : "DGM  2250",
      "title"       : "Principles of Digital Design",
      "crn"         : "512432",
      "credits"     : "3",
      "track"       : "Cinema",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    },
    {
      "classid"     : "DGM  2271",
      "title"       : "Principles of Web Design",
      "crn"         : "3141234",
      "credits"     : "3",
      "track"       : "Animation",
      "description" : "Skate ipsum dolor sit amet, shoveit fast plant grind full-cab Shoe Goo griptape 360 nosegrind. Disaster grab rad hurricane shoveit fakie out slam. Heel flip feeble crooked grind boneless masonite launch ramp rails. Steps blunt 180 opposite footed finger flip gnarly fakie. Half-flip tail wheels nollie nosepicker rail axle set. Nose grab bigspin risers wheels drop in camel back Wallows judo air. Flail lipslide casper speed wobbles transition NoMeansNo hanger kingpin. Rip grip kidney locals goofy footed spine skate key nose slide. Acid drop birdie mini ramp rad Japan air hip judo air. G-turn gap Transworld transfer snake fakie out coping hang ten. Acid drop freestyle lipslide steps hang-up fast plant Japan air. Rail slide pressure flip nose slide bank mini ramp transition shinner. Andy Levy switch 900 pump mongo cess slide locals manual.",
      "core"        : true
    }
  ];

  });