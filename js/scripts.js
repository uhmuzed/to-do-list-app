function newItem() {
  //1. adding new item to List
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(document.createTextNode(inputValue));


  if (!inputValue) { //if inputValue is falsy
    alert("You must write something");
  } else {
    $("#list").append(li);
    console.log(`${"Added "} "${inputValue}"`); //adding responsive feedback
  }

  //1a. clear list for new inputValue
  $("input").val("");

  //2. crossing out item from List
  li.on('dblclick', function (e) {
        li.toggleClass('strike');
        console.log(`${"Completed "} "${inputValue}"`); //feedback in console
  });

  //3a. adding the delete button
  let crossOutButton = $("<crossOutButton>X</crossOutButton>");
  li.append(crossOutButton);

  //3b. add class delete
  crossOutButton.on("click", function() {
    li.addClass("delete");
    console.log(`${"Deleted "} "${inputValue}"`); //feedback in console
  });

  //4. reordering List
  $("#list").sortable();

}
