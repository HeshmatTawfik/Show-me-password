// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
 var first=true;
chrome.browserAction.onClicked.addListener(function (tab) {
  if (first) {
    var confirmation=confirm("Attention: Do you want to reveal passwords on this page?");
if(confirmation==true){
      chrome.tabs.executeScript(null, {file: "on.js"});
}
if (confirmation==false) {
  first=false;
  
}
  }
  else{
   
   chrome.tabs.executeScript(null, {file: "off.js"});
  }
    first=!first;
  
});



