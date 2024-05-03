$(document).ready(function(){
    // Fetch data from JSON file
    $.getJSON("components/header.json", function(data){
      // Create header element
      var header = document.createElement('header');

      // Create h1 element
      var h1 = document.createElement('h1');
      h1.textContent = data.title;

      // Create nav elements
      var menuNav = document.createElement('nav');
      menuNav.id = 'menu';
      var additionalMenuNav = document.createElement('nav');
      additionalMenuNav.id = 'additional-menu';

      // Append h1 and nav elements to header
      header.appendChild(h1);
      header.appendChild(menuNav);
      header.appendChild(additionalMenuNav);
      
      // Append header to body
      document.body.prepend(header);
      // Generate main menu
      var menuHTML = "";
      $.each(data.menuItems, function(index, item){
        var link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        menuNav.appendChild(link);

        var clubs = document.createTextNode(' \u2663 ');
        menuNav.appendChild(clubs);
      });

    // Generate additional menu
      var additionalMenuHTML = "";
      $.each(data.additionalMenuItems, function(index, item){
        var menuItem;
        if(item.onclick) {
          menuItem = document.createElement('button');
          menuItem.type = 'button';
          menuItem.textContent = item.text;
          menuItem.onclick = function() {
            eval(item.onclick); // Note: Using eval is generally not recommended, but for demonstration purposes here
          };
        } else {
          menuItem = document.createElement('a');
          menuItem.href = item.url;
          menuItem.textContent = item.text;
        }

        additionalMenuNav.appendChild(menuItem);

        var clubs = document.createTextNode(' \u2663 ');
        additionalMenuNav.appendChild(clubs);
      });
    });
});