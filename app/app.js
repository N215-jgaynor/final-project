import * as MODEL from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageName = hashTag.replace("#", "");
  let pageContent = pageName + "Content";

  if (pageName == "") {
    pageContent = "homeContent";
  }

  MODEL.modelPageName(pageContent);

  //   I don't know why this isn't working but it isn't working
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
});
