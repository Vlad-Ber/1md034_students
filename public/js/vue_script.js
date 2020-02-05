const box = new Vue({
    el: "#funka",
    data: {
	food: food,
	checkBurg: []
    },
});

const vm = new Vue({
    el: "#submitB",
    data: {
	name: "",
	mail: "",
	street: "",
	house: "",
	gender: "",
	pay: "",
	output: ""
    },
    methods: {
	markDone: function(){
	    this.output = this.name + ', ' + this.mail + ', ' + this.street + ', ' + this.house + ', ' + this.gender + ', ' + this.pay + ' YOUR ORDER: ' + box.checkBurg 
	}
    }
});
