$(document).ready(function() {
  // Getting a reference to the input field where user adds a new item
  var newOrderInput = $("input.new-item");
  // Our new todos will go inside the todoContainer
  var itemContainer = $(".item-container");
  var devourContainer = $(".devour-container");
  // Adding event listeners for devouring and deleting
  $(document).on("click", "button.devour", moveDevour);
  $(document).on("click", "button.delete", deleteItem);
  
  // Our initial items array
  var items;
  var itemsDevoured;

  // Getting todos from database when page loads
  // getItems();
  // getItemsDevoured();

  // This function resets the item displayed with new todos from the database
  function initializeRows() {
    itemContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < items.length; i++) {
      rowsToAdd.push(createNewRow(items[i]));
    }
    itemContainer.prepend(rowsToAdd);
  }

  // This function resets the item displayed with new todos from the database
  function initializeDevouredRows() {
    devourContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < itemsDevoured.length; i++) {
      rowsToAdd.push(createNewDevourRow(itemsDevoured[i]));
    }
    devourContainer.prepend(rowsToAdd);
  }


  // This function grabs items from the database and updates the view
  function getItems() {
    $.get("/api/items/0", function(data) {
      console.log("burgers", data);
      items = data;
      initializeRows();
    });
  }

  // This function grabs all devoured items from the database and updates the view
  function getItemsDevoured() {
    console.log("Devour: " + data)
    // $.get("/api/items/1", function(data) {
    //   console.log("burgers", data);
    //   itemsDevoured = data;
    //   initializeDevouredRows();
    // });
  }

  // This function deletes a item when the user clicks the delete button
  function deleteItem() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/items/" + id
    })
    .done(function() {
      //getItems();
      getItemsDevoured();
    });
  }

  // This function sets a item as devoured attribute to the opposite of what it is
  // and then runs the updateTodo function
  function moveDevour() {
    var item = $(this)
      .parent()
      .data("item");

    //item.devoured = !item.devoured;
    console.log("Devour: " + item);
    //updateItem(item);
  }

  // This function updates a item in our database
  function updateItem(item) {
    $.ajax({
      method: "PUT",
      url: "/api/items",
      data: item
    })
    .done(function() {
      getItems();
      getItemsDevoured();
    });
  }

  // This function constructs a item row
  function createNewRow(item) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item item-item");
    var newItemSpan = $("<span>");
    newItemSpan.text(item.burger_name);
    newInputRow.append(newItemSpan);
    var newItemInput = $("<input>");
    newItemInput.attr("type", "text");
    newItemInput.addClass("edit");
    newItemInput.css("display", "none");
    newInputRow.append(newItemInput);
    // var newDeleteBtn = $("<button>");
    // newDeleteBtn.addClass("delete btn btn-default");
    // newDeleteBtn.text("x");
    // newDeleteBtn.data("id", item.id);
    var newDevourBtn = $("<button>");
    newDevourBtn.addClass("devour btn btn-default");
    newDevourBtn.text("Devour");
    //newInputRow.append(newDeleteBtn);
    newInputRow.append(newDevourBtn);
    newInputRow.data("item", item);
    if (item.complete) {
      newItemSpan.css("text-decoration", "line-through");
    }
    return newInputRow;
  }

    // This function constructs a item row
  function createNewDevourRow(item) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item item-item");
    var newItemSpan = $("<span>");
    newItemSpan.text(item.burger_name);
    newInputRow.append(newItemSpan);
    var newItemInput = $("<input>");
    newItemInput.attr("type", "text");
    newItemInput.addClass("edit");
    newItemInput.css("display", "none");
    newInputRow.append(newItemInput);
    var newDeleteBtn = $("<button>");
    newDeleteBtn.addClass("delete btn btn-default");
    newDeleteBtn.text("x");
    newDeleteBtn.data("id", item.id);
    // var newDevourBtn = $("<button>");
    // newDevourBtn.addClass("devour btn btn-default");
    // newDevourBtn.text("Devour");
    newInputRow.append(newDeleteBtn);
    //newInputRow.append(newDevourBtn);
    newInputRow.data("item", item);
    if (item.complete) {
      newItemSpan.css("text-decoration", "line-through");
    }
    return newInputRow;
  }

});
