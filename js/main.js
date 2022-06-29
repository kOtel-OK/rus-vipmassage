'use strict';

var datePicker = document.querySelector('.datepicker'),
  timePicker = document.querySelector('.timepicker'),
  parallax = document.querySelector('.parallax'),
  parallaxContainer = document.querySelector('.parallax-container'),
  massageTypesHeight = document.querySelector('.types_container').offsetHeight;

parallaxContainer.style.height = massageTypesHeight + 50 + 'px';

window.addEventListener('resize', function () {
  massageTypesHeight = document.querySelector('.types_container').offsetHeight;
  parallaxContainer.style.height = massageTypesHeight + 50 + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
  $('.preloader-background').delay(500).fadeOut('slow');

  $('.preloader-wrapper').delay(500).fadeOut();
});

var datePickerInstance = new M.Datepicker(datePicker),
  timePickerInstance = new M.Timepicker(timePicker),
  parallaxInstance = new M.Parallax(parallax);

var scrollSpy = document.querySelectorAll('.scrollspy'),
  navHeight = document.querySelector('nav').offsetHeight;

var scrollSpyTherapists = new M.ScrollSpy(scrollSpy[0], {
    scrollOffset: navHeight,
  }),
  scrollSpyHowItWorks = new M.ScrollSpy(scrollSpy[1], {
    scrollOffset: navHeight,
  }),
  scrollSpyPricing = new M.ScrollSpy(scrollSpy[2], {
    scrollOffset: navHeight,
  }),
  scrollSpyTypes = new M.ScrollSpy(scrollSpy[3], {
    scrollOffset: navHeight,
  }),
  scrollSpyContact = new M.ScrollSpy(scrollSpy[4], {
    scrollOffset: navHeight,
  });

var sideNav = document.querySelector('.sidenav');
var sideNavInstance = new M.Sidenav(sideNav);
