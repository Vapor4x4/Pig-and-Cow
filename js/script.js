// const $ = selector => document.querySelector(selector);

// const pollOptions = document.querySelectorAll('.TRX6J');

// pollOptions.forEach(option => {
//   option.addEventListener('click', () => {
//     const totalVotes = parseInt($('.SqYOv').textContent);
//     const selectedOption = option.querySelector('.VVJno').textContent;
//     const optionVotes = parseInt(option.parentNode.querySelector('.KP6XX').textContent);
//     const percentage = (optionVotes / totalVotes) * 100;
    
//     alert(`${selectedOption} - ${percentage.toFixed(2)}%`);
//   });
// });



// jQuery(document).ready(function() {
//   jQuery('.option').on('click', function() {
//     var votes = parseInt(jQuery(this).data('votes')) + 1; // add 1 to the clicked option
//     var totalVotes = parseInt(jQuery('.total-votes').text()) + 1; // add 1 to the total votes
//     var optionName = jQuery(this).text();
//     var percentage = (votes / totalVotes) * 100;

//     jQuery(this).data('votes', votes);
//     jQuery('.total-votes').text(totalVotes);
//     jQuery('.option').prop('disabled', true); // disable all options
//     jQuery(this).addClass('selected');
//     jQuery(this).siblings().removeClass('selected');

//     jQuery('.poll-results').show();
//     jQuery('.poll-results ul').append('<li><span class="option-name">' + optionName + '</span><span class="option-percentage">' + percentage.toFixed(2) + '%</span><div class="option-bar" style="width: ' + percentage.toFixed(2) + '%;"></div></li>');
//   });
// });


const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", ()=>{
    for (let j = 0; j < options.length; j++) {
      if(options[j].classList.contains("selected")){
        options[j].classList.remove("selected");
      }
    }

    options[i].classList.add("selected");
    for (let k = 0; k < options.length; k++) {
      options[k].classList.add("selectall");
    }

    let forVal = options[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options.length; l++) {
      if(options[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options.length; m++) {
        options[m].removeAttribute("class");
      }
    }
  });
}