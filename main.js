const emailvalidation_form = document.getElementById("emailvalidation-form");
const emailvalidation_responsebox = document.querySelector(".emailvalidation-responsebox");
const email_validator_inputfield = document.getElementById("email-validator-inputfield");
let response_headline = document.querySelector(".response-headline");
emailvalidation_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // =============================================== before we fetch and print the api data show this loading gif to the dom ===============================================
  emailvalidation_responsebox.innerHTML = `<img src="loading.svg" alt="loading file" class="loading-svg">`;
  console.log("please wait sometime for api response");
  // =============================================== demo data for the testing the api locally due to limited amount of requests ===============================================

  // const apidata = {
  //             "tag": "",
  //             "free": true,
  //             "role": false,
  //             "user": "demouser",
  //             "email": "demouser@xyz.com",
  //             "score": 0.64,
  //             "state": "deliverable",
  //             "domain": "gmail.com",
  //             "reason": "valid_mailbox",
  //             "mx_found": true,
  //             "catch_all": null,
  //             "disposable": false,
  //             "smtp_check": true,
  //             "did_you_mean": "",
  //             "format_valid": true,
  //     }

  const apikey = `your api key`;
  const apiurl = `your api urlapikey=your api key&email=your emailid`;
  const api_response = await fetch(apiurl);
  const apidata = await api_response.json();
  let empty_str = "";
  for (let key of Object.keys(apidata)) {
    console.log(apidata[key]);
    if (apidata[key] !== "") {
      empty_str += `<div>${key}: ${apidata[key]}</div>`;
    }
  }
  emailvalidation_responsebox.innerHTML = empty_str;
  response_headline.innerHTML = "Response";
});
