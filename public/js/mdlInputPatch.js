//  this is a fix for mdl inputs that are reguired so they do not show as invalid 
//  before interacting with the form fields

$(function() {
  componentHandler.registerUpgradedCallback('MaterialTextfield', function(textfield) {
    var input = $(textfield).find('.mdl-textfield__input');
    if (input.data('required') != null) input.attr('required', true);
  });
});