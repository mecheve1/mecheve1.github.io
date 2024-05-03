// script.js
document.addEventListener("DOMContentLoaded", function() {
//$(document).ready(function(){
   fetch("components/header.json", function(data){
   //$.getJSON("components/header.json", function(data){
        // Create header element
        var header = document.createElement('header');

        // Create h1 element
        var h1 = document.createElement('h1');
        h1.textContent = data.title;

        // Create nav elements
        var mainMenu = document.createElement('nav');
        mainMenu.id = 'mainMenu';
        var secondaryMenu = document.createElement('nav');
        secondaryMenu.id = 'secondaryMenu';

        // Append h1 and nav elements to header
        header.appendChild(mainMenu);
        header.appendChild(secondaryMenu);
        header.appendChild(h1);
        
        // Append header to body
        document.body.prepend(header);

        
        // Generate main menu
        var mainMenuHTML = "";
        $.each(data.mainMenu, function(index, item){
        var link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        mainMenu.appendChild(link);

        var clubs = document.createTextNode(' \u2663 ');
        mainMenu.appendChild(clubs);
        });

        // Generate secondary menu
        var secondaryMenuHTML = "";
        $.each(data.secondaryMenu, function(index, item){
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
    })

    // Function to validate HTML
    function validateHTML() {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
    }

    // Function to validate CSS
    function validateCSS() {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
    }

    // Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
    function validateAIM() {
        const currentURL = encodeURIComponent(window.location.href);
        // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
        window.open("https://webaim.org/search/?q=${currenURL}", "_blank");
    }
})
/*     // Fetch JSON data for Main Menu
        fetch("components/mainmenu.json")
            .then(response => response.json())
            .then(data => {
                // Process JSON data
                const menuContainer = document.getElementById("menu-container");
                data.forEach(item => {
                    // Create menu item link element
                    const menuItem = document.createElement("a");
                    menuItem.classList.add("menu-item");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON

                    // Append menu item to the container
                    menuContainer.appendChild(menuItem);
                });
            })

            .catch(error => console.error("Error fetching menu:", error));

        // Fetch JSON data for secondary Menu
        fetch("components/secondary.json")
            .then(response => response.json())
            .then(data => {
                // Process JSON data
                const secondaryContainer = document.getElementById("secondary-container");
                data.forEach(item => {
                    // Create menu item link element
                    const menuItem2 = document.createElement("a");
                    menuItem2.classList.add("menu-item");
                    menuItem2.textContent = item.name;
                    menuItem2.href = item.url; // Assuming each menu item has a 'url' property in JSON

                    // Append menu item to the container
                    secondaryContainer.appendChild(menuItem2);
                });
            })
            .catch(error => console.error("Error fetching menu:", error));
        

        // Fetch JSON data for footer Menu
        fetch("components/footer.json")
            .then(response => response.json())
            .then(data => {
                // Process JSON data
                const footerContainer = document.getElementById("footer-container");
                data.forEach(item => {
                    // Create menu item link element
                    const menuItem3 = document.createElement("a");
                    menuItem3.classList.add("menu-item");
                    menuItem3.textContent = item.name;
                    menuItem3.href = item.url; // Assuming each menu item has a 'url' property in JSON

                    // Append menu item to the container
                    footerContainer.appendChild(menuItem3);
                });
            })
            
            .catch(error => console.error("Error fetching menu:", error));

        // Fetch JSON data for credit Menu
        fetch("components/credits.json")
            .then(response => response.json())
            .then(data => {
                // Process JSON data
                const creditsContainer = document.getElementById("credits-container");
                data.forEach(item => {
                    // Create menu item link element
                    const menuItem4 = document.createElement("a");
                    menuItem4.classList.add("menu-item");
                    menuItem4.textContent = item.name;
                    menuItem4.href = item.url; // Assuming each menu item has a 'url' property in JSON

                    // Append menu item to the container
                    creditsContainer.appendChild(menuItem4);
                });
            })
            .catch(error => console.error("Error fetching menu:", error));
*/
