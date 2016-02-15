var ngpo = require('ngpo');

module.exports = {
  makeUiSelectPo: makeUiSelectPo,
  makeUiSelectMultiPo: makeUiSelectMultiPo,
  makePos: ngpo.makePos
};

function makeUiSelectPo(elOrLoc) {
  var el = ngpo.makeDefaultPo(elOrLoc);

  el.enterValue = function(value) {
    //http://stackoverflow.com/questions/31055349/testing-with-protractor-using-ui-select
    //https://github.com/angular-ui/ui-select/issues/270
    el.click();
    return el
      .element(by.css('.ui-select-search'))
      .sendKeys(value)
      .sendKeys(protractor.Key.TAB);
  };

  el.getValue = function() {
    return el.element(by.className('ui-select-match-text')).getText();
  };

  el.clear = function() {
    el.element(by.className('glyphicon-remove')).click();
  };

  return el; 

}

function makeUiSelectMultiPo(elOrLoc) {
  var el = ngpo.makeDefaultPo(elOrLoc);

  el.enterValue = function(value) {
    //http://stackoverflow.com/questions/31055349/testing-with-protractor-using-ui-select
    //https://github.com/angular-ui/ui-select/issues/270
    // el.click();  // no click before
    return el
      .element(by.css('.ui-select-search'))
      .sendKeys(value)
      .sendKeys(protractor.Key.TAB);
  };

  el.getValue = function() {
    return el.getText();
  }; 

  el.clear = function () {
    el.all(by.className('ui-select-match-close')).each(function(cb) {
      cb.click(); 
    }); 
  }; 


  return el; 

}
