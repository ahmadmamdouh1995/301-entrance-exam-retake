'use stric';

var myForm = document.getElementById('myForm');
var outTable = document.getElementById('outTable');

var foodList = [];

function KindFood (kind , qunt){
    this.kind = kind ;
    this.qunt = qunt ;

    foodList.push(this);
   
}

function update(){
    var stringFood = JSON.stringify(foodList);
    localStorage.setItem('list',stringFood);

}
// update();


function getList(){
    var stringFood = localStorage.getItem('list');
    if(stringFood){
        foodList = JSON.parse(stringFood) ;

        renderList();
    }
}


myForm.addEventListener('submit',handleSumit);

function handleSumit(event){
    event.preventDefault();

    var kind = event.target.kind.value;
    var qunt = event.target.qunt.value;

    new KindFood(kind , qunt);

    update();
    getList();
}

var tableMain = document.createElement('table')
outTable.appendChild(tableMain);
var row1 = document.createElement('tr');
tableMain.appendChild(row1);
var thE1 = document.createElement('th');
row1.appendChild(thE1);
var thE2 = document.createElement('th');
row1.appendChild(thE2);
thE1.textContent = `Item`;
thE2.textContent = `Quntity`;
var total = 0 ;
function renderList(){
    for(var i= 0 ; i<foodList.length ; i++ ){

        var row2 = document.createElement('tr');
        tableMain.appendChild(row2);
        var tdE1 = document.createElement('td');
        row2.appendChild(tdE1);
        var tdE2 = document.createElement('td');
        row2.appendChild(tdE2);
        
        tdE1.textContent = `${foodList[i].kind}`;
        tdE2.textContent = `${foodList[i].qunt}`;

        total = total + parseInt(foodList[i].qunt);
    

    }
    console.log(total);

    // update();

}

var row3 = document.createElement('tr');
tableMain.appendChild(row3);
var tdE3 = document.createElement('td');
row3.appendChild(tdE3);
var tdE4 = document.createElement('td');
row3.appendChild(tdE4);

tdE3.textContent = `Total Quntity`;
tdE4.textContent = `${total}`;
getList();