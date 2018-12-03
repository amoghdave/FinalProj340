'use strict';

$('.calendar').calendar();

$('.calendar').calendar({
      // shows calendar headers
      showHeaders: true,
 
      // start year
      startYear: currentDate.getFullYear(),
  
      // max/min year
      maxYear: null,
      maxDay: null,
      maxMonth: null,
      maxDayMessage: 'You can not choose day from future',
      minYear: null,
      minDay: null,
      minMonth: null,
      minDayMessage: 'You can not choose day from past',
     
      // Bootstrap version
      boostrapVersion: 4,

      // for custom layout
      cols: 12,
      colsSm: 6,
      colsMd: 4,
      colsLg: 3,
      colsXl: 3,
    
      // max days to choose
      maxDaysToChoose: false,
      maxDaysToChooseMessage: 'Maximum days to choose is: ',
     
      // classic or rangepicker
      mode: 'classic',
     
      // adds class to day on click
      addUniqueClassOnClick: false,
    });

    $('.calendar').calendar({
      i10n: {
        jan: "January",
        feb: "February",
        mar: "March",
        apr: "April",
        may: "May",
        jun: "June",
        jul: "July",
        aug: "Augst",
        sep: "September",
        oct: "October",
        nov: "November",
        dec: "December",
        mn: "Mn",
        tu: "Tu",
        we: 'We',
        th: 'TH',
        fr: 'Fr',
        sa: 'Sa',
        su: 'Su'
      }
    });

    //Event Handlers
    $('.calendar').on('jqyc.changeYearToPrevious', function (event) {
      // tiggered when year is chaned to previous
    });
         
    $('.calendar').on('jqyc.changeYearToNext', function (event) {
      // tiggered when year is chaned to next
    });

    $('.calendar').on('jqyc.changeYear', function (event) {
      // tiggered when year is changed
    });
     
    $('.calendar').on('jqyc.dayChoose', function (event) {
      // tiggered when day is clicked
    });
     
    $('.calendar').on('jqyc.notMinDayChoose', function (event) {
      // tiggered when day out of range is choosen
    });

    $('.calendar').on('jqyc.notMaxDayChoose', function (event) {
      // tiggered when day out of range is choosen
    });