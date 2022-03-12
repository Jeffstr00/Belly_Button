// uses d3.selectAll() method to create an event listener
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // uses d3.selectAll() to select dropdown menu, which has an id of selectOption
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // id of dropdown menu, selectOption, is assigned the variable dropdownMenuID
  var dropdownMenuID = dropdownMenu.id;
  // when dropdown menu is selected, value is assigned the variable selectedOption
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};