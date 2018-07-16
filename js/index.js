// Loading images on page-load
    function preloader() {
        const imagesList = [
           "./img/solar-panels.jpg",
           "./img/wind-turbine.jpg",
           "./img/geothermal.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    

    const btns = document.querySelectorAll("button");

    const resources = {
        solar: {
            headingContent: "Solar Energy",
            imgUrl: "./img/solar-panels.jpg",
            imgAlt: "solar panels",
            bodyText: "Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas. When fossil fuels are burned to produce electricity, they emit harmful gases that are the primary cause of air pollution and global climate change. Not only are fossil fuels bad for the environment, but they are also a finite resource. Because of this, the price is constantly fluctuating and can increase in a short period of time. Renewable energy also improves public health. Coal and natural gas plants produce air and water pollution that is harmful to human health. But replacing fossil fuels with renewable energy sources, such as solar power, can reduce premature mortality as well as overall health care costs. Although fossil fuel production requires significant water resources and causes water pollution, solar energy requires little to no water to operate. So, not only does solar power not pollute water resources, it also doesn’t put a strain on the world’s water supply.",
            
        },

        wind: {
            headingContent: "Wind Energy",
            imgUrl: "./img/wind-turbine.jpg",
            imgAlt: "small wind turbine",
            bodyText: "Generating electricity from small or distributed wind energy sources typically involves smaller wind turbines found at homes, farms, businesses and public facilities, which off-set all or a portion of on-site energy consumption. Small wind turbines are very different than large wind turbines. Large turbines, often grouped in wind farms, are widely used by utilities across Canada to provide electrical energy to electricity grids. Although small wind turbines may look like miniature versions of large turbines, there are important differences in technology, purchase decisions, application requirements and value of generated electricity.",
        },
        geo: {
            headingContent: "Geothermal Energy",
            imgUrl: "./img/geothermal.jpg",
            imgAlt: "geothermal energy",
            bodyText: "The advantages of geothermal systems boil down to efficiency advantages, reliability and safety advantages, flexibility and convenience, renewable energy advantages, and financial advantages. Let’s look at each in more detail.Efficiency advantages of geothermal systems: (1) Geothermal heating systems can extract up to six times the heat energy they use in electrical energy. In other words, compared to electrical heating, they are at least three and up to six times more efficient. (2) Geothermal heating systems use far less electricity than traditional electric heating systems – as little as one sixth as much. (3) Savings in heating mode can be up to 3/4 of the cost of electrical heating, and savings in cooling mode can be up to 1/4 to 1/2 of the costs of running a traditional air conditioner. When you factor in virtually free hot water, the overall efficiency can be even higher. (4) A 1500 square foot house equipped with a geothermal heating and cooling system costs $30 to $50 per month to heat or cool in most US climates.",
        }
    };

     const title = document.getElementById("title");
     const img = document.getElementById("img");
     const content = document.getElementById("content");
    
 function handleSelection(e) {
     
     for (let i = 0; i < btns.length; i++) {
         if (btns[i].hasAttribute("id")) {
             btns[i].removeAttribute("id");
         }
     }

     let currentButton = e.target;

     if (currentButton.textContent === "Solar Energy") {
         currentButton.setAttribute("id", "active-button");
     }
     if (currentButton.textContent === "Wind Energy") {
         currentButton.setAttribute("id", "active-button");

     }
     if (currentButton.textContent === "Geothermal Energy") {
         currentButton.setAttribute("id", "active-button");

     }

     if (currentButton.textContent === "Solar Energy") {
         title.innerHTML = `${resources.solar.headingContent}`;
         img.innerHTML = `<img src="${resources.solar.imgUrl} "alt="${resources.solar.imgAlt}">`;
         content.innerHTML = `${resources.solar.bodyText}`
     } else if (currentButton.textContent === "Wind Energy") {
         title.innerHTML = `${resources.wind.headingContent}`;
         img.innerHTML = `<img src="${resources.wind.imgUrl} "alt="${resources.wind.imgAlt}">`;
         content.innerHTML = `${resources.wind.bodyText}`
     } else {
         title.innerHTML = `${resources.geo.headingContent}`;
         img.innerHTML = `<img src="${resources.geo.imgUrl} "alt="${resources.geo.imgAlt}">`;
         content.innerHTML = `${resources.geo.bodyText}`
     }
 }
        
    
     for (i = 0; i < btns.length; i++) {   
            btns[i].addEventListener("click", handleSelection);
        }
