/*

function menuItem(bName, i1, i2, i3, i4, img){
    this.name = bName;
    this.info1 = i1;
    this.info2 = i2;
    this.info3 = i3;
    this.info4 = i4;
    this.image = img;
    this.kcal = function(){
	return this.name + ' ' + this.info2;
    };
};

let b1 = new menuItem('Double Bacon', 'Loaded with Crispy bacon', '2000 kcal', 'Contains meat', 'Contains lactose', 'https://www.max.se/contentassets/96a590c660f54c8b83bc5080b036fecf/product_gdl-umami-bacon-burger2.jpg');

let b2 = new menuItem('Chili cheese', 'Hot', '1500 kcal', 'Gluten', 'Lactose', 'http://epiqstore.com/wp-content/uploads/2019/10/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg');


let b3 = new menuItem('Original', 'Child Friendly', '750 kcal', 'Very Tasty', 'Gluten Free', 'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650');

let b4 = new menuItem('Chili cheese (Veg)', 'Hot', '1500 kcal', 'Gluten', 'Lactose', 'http://epiqstore.com/wp-content/uploads/2019/10/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg');


let b5 = new menuItem('Original (Veg)', 'Child Friendly', '750 kcal', 'Very Tasty', 'Gluten Free', 'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650');

var menu = [b1, b2, b3, b4, b5];

var ids = ["l1", "l2", "l3", "l4", "l5"];

var idS = ["Double", "Chili", "Original", "chiliVeg", "origVeg"];*/

/*
for (var x = 0; x < 5; x++)
{
    let id = document.getElementById(idS[x]);
    //NAMN
    let btn = document.createElement('h3');
    let hText = document.createTextNode(menu[x].name);
    btn.appendChild(hText);
    id.appendChild(btn);
    //BILD
    let img = document.createElement("IMG");
    img.src = menu[x].image;
    img.width = 350;
    img.height = 200;
    id.appendChild(img);
    
    //UL
    let ul = document.createElement("UL");
    id.appendChild(ul);
    //INFO 1
    
    let li1 = document.createElement("LI");
    let info1 = document.createTextNode(menu[x].info1);
    li1.appendChild(info1);
    id.appendChild(li1);
    //INFO 2
    let li2 = document.createElement("LI");
    let i2 = document.createTextNode(menu[x].info2);
    li2.appendChild(i2);
    id.appendChild(li2);
    //INFO 3
    let li3 = document.createElement("LI");
    let i3 = document.createTextNode(menu[x].info3);
    li3.appendChild(i3);
    id.appendChild(li3);
    //INFO 4
    let li4 = document.createElement("LI");
    let i4 = document.createTextNode(menu[x].info4);
    li4.appendChild(i4);
    id.appendChild(li4);

}
*/


