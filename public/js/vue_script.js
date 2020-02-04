/* HTML
 <div id ="myID">
  <div v-for = "(x,index) in menu">
   <h4> {{ x.name }}</h4>
   <ul>
   <li> {{ x.info3}} </li>
   <li> {{ x.info1 }} </li>
   <li> {{ x.info2 }} </li>
   </ul>
  </div>
 </div>

/




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
}

let b1 = new menuItem('Double Bacon', 'Loaded with Crispy bacon', '2000 kcal', 'Contains meat', 'Contains lactose', 'https://www.max.se/contentassets/96a590c660f54c8b83bc5080b036fecf/product_gdl-umami-bacon-burger2.jpg');

let b2 = new menuItem('Chili cheese', 'Hot', '1500 kcal', 'Gluten', 'Lactose', 'http://epiqstore.com/wp-content/uploads/2019/10/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg');


let b3 = new menuItem('Original', 'Child Friendly', '750 kcal', 'Very Tasty', 'Gluten Free', 'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650');

let b4 = new menuItem('Chili cheese (Veg)', 'Hot', '1500 kcal', 'Gluten', 'Lactose', 'http://epiqstore.com/wp-content/uploads/2019/10/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg');


let b5 = new menuItem('Original (Veg)', 'Child Friendly', '750 kcal', 'Very Tasty', 'Gluten Free', 'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650');

let menu = [b1, b2, b3, b4, b5];

const mat = new Vue({
	el: '#myID',
  data: {
  menu: menu
  },
})*/
