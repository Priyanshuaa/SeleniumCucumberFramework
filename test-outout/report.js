$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberFramework/src/main/java/Features/NewDeals.feature");
formatter.feature({
  "name": "FREE CRM Deals Related Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Deal Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewDealStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login Page is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewDealStepDefination.title_of_login_Page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "Priyanshua",
        "Chetu@123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewDealStepDefination.user_enters_Username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewDealStepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewDealStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New Deals from the Deals Tab",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewDealStepDefination.user_clicks_on_New_Deals_from_the_Deals_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "filling out Title,Company Name,Amount,Probability and Commission from the Add New Deals Screen",
  "rows": [
    {
      "cells": [
        "Mr.",
        "Thermax",
        "250",
        "10",
        "30"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewDealStepDefination.filling_out_Title_Company_Name_Amount_Probability_and_Commission_from_the_Add_New_Deals_Screen(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewDealStepDefination.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then user quits the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewDealStepDefination.then_user_quits_the_browser()"
});
formatter.result({
  "status": "passed"
});
});