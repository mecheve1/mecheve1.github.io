document.addEventListener("DOMContentLoaded", function(event) {
    console.log(event);
    // -----  Create Functions ----
    // Function to create menu items
    function createMenu(menuData, menuId) {
      var menu = document.getElementById(menuId);
      menu.innerHTML = ''; // Clear existing menu items
      
      menuData.forEach(function(item) {
          var menuItem = document.createElement('li');
          var link = document.createElement('a');
          link.textContent = item.title;
          if (item.url) {
            link.setAttribute('href', item.url);
          }
          if (item.onclick) {
            link.setAttribute('onclick', item.onclick);
          }
          menuItem.appendChild(link);
          menu.appendChild(menuItem);
        });
      }
    const header = document.getElementsByTagName('header')[0];
    //const footer = document.getElementsByTagName('footer')[2];
    const h1 = document.createElement('h1');
    h1.innerText = `Mateo Echeverry's Masterful Eagles 🦅 ITIS 3135`;
    const nav1 = document.createElement('nav');
    const nav2 = document.createElement('nav');
    nav1.id = 'nav1';
    nav2.id = 'nav2';
    header.append(h1);
    
    // Fetch the JSON data
    fetch('components/headfoot.json')
    .then(response => response.json())
    .then(data => {
      // Get the appropriate set of links based on navKey
      const navLinksData = data[navKey];
      console.log(navLinksData,data,navKey);
      if (!navLinksData) {
        console.error('Invalid navKey:', navKey);
        return;
      }
      // Load navigation links for both navs
      createMenu(data.main, 'nav1');
      createMenu(data.secondary, 'nav2');
    });

    header.append(nav1);
    header.append(nav2);

    // Function to validate HTML
    createMenu('footer', 'footer');
    const tagline = document.createElement('p');
    const certfied = document.createElement('p');
    certfied.innerHTML = `<p class="center-all">Page built by <a href="mateoecheverry.com/">Echeverry Enterprises</a>, Certified in <a href="https://www.freecodecamp.org/certification/meceheve1/responsive-web-design">RWD</a> & <a href="https://www.freecodecamp.org/certification/mecheve1/javascript-algorithms-and-data-structures-v8">JS </a>&copy;2024</p>`
    tagline.innerHTML = `<i>Elevate to New Heights</i>`;
    document.getElementsByTagName('footer')[0].appendChild(certfied);
    document.getElementsByTagName('footer')[0].appendChild(tagline);


    function validateHTML() {
      const currentURL = encodeURIComponent(window.location.href);
      window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
    }
   
    try{
      document.getElementById('html_val').addEventListener('click', validateHTML());
    }catch(e){
      console.log(e);
    }
    
    
    // Function to validate CSS
    function validateCSS() {
      const currentURL = encodeURIComponent(window.location.href);
      window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
    }
    try{
      document.getElementById('css_val').addEventListener('click', validateCSS());
    }catch(e){
      console.log(e);
    }

    
    // Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
    function validateAIM() {
      window.open("https://wave.webaim.org/report#/" + location.href, "_blank");
    }

    try{
      document.getElementById('aim_val').addEventListener('click', validateAIM());
    }catch(e){
      console.log(e);
    }
  })

    /*
    // Function to load navigation links
    function loadNavigationLinks(containerId, navKey) {
      // Fetch the JSON data
      fetch('components/headfoot.json')
        .then(response => response.json())
        .then(data => {
          // Get the appropriate set of links based on navKey
          const navLinksData = data[navKey];
          console.log(navLinksData,data,navKey);
          if (!navLinksData) {
            console.error('Invalid navKey:', navKey);
            return;
          }
    
          // Parse JSON data and generate HTML
          
          navLinksData.forEach((link, index) => {
            const navLinksContainer = document.getElementById(containerId);
            const a = document.createElement('a');
            console.log(a)
            //a.classList.add("link_space");
            //a.classList.add('special-nav');
            a.href = link.url;
            a.textContent = link.title;
            navLinksContainer.appendChild(a);
    
            // Add divider if not the last link
            if (index !== navLinksData.length - 1) {
              const divider = document.createElement('span');
              divider.textContent = ' ♣️ '; // You can adjust the divider as needed
              navLinksContainer.appendChild(divider);
            }
          });
        })
        .catch(error => {
          console.error('Error fetching JSON:', error);
        });*/