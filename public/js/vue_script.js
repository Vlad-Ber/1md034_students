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
*/

const box = new Vue({
    el: "#funka",
    data: {
	menu: menu
  },
});

