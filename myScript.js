var i = false;
function moveButton1(){ // Функция замены содержимого кнопки 1 на содержимое 2 и наоборот
	if(!i){
		document.getElementById('button1').innerHTML = "<img id='img2' src='picture2.jpg' alt='Подмигивающий смайл' width=30 high=30 style='vertical-align: middle'>Кнопка с рисунком ;-)";
		document.getElementById('button2').innerHTML = "<img id='img1' src='picture1.jpg' width=30 high=30 alt='Улыбающийся смайл' style='vertical-align: middle'> Кнопка с рисунком :)";
	} else{
		document.getElementById('button1').innerHTML = "<img id='img1' src='picture1.jpg' width=30 high=30 alt='Улыбающийся смайл' style='vertical-align: middle'> Кнопка с рисунком :)";
		document.getElementById('button2').innerHTML = "<img id='img2' src='picture2.jpg' alt='Подмигивающий смайл' width=30 high=30 style='vertical-align: middle'>Кнопка с рисунком ;-)";
	}
	i = !i;
	console.log(i);
};
function moveButton2(){ // Функция замены содержимого кнопки 2 на содержимое 1 и наоборот
		if(!i){
		document.getElementById('button1').innerHTML = "<img id='img2' src='picture2.jpg' alt='Подмигивающий смайл' width=30 high=30 style='vertical-align: middle'>Кнопка с рисунком ;-)";
		document.getElementById('button2').innerHTML = "<img id='img1' src='picture1.jpg' width=30 high=30 alt='Улыбающийся смайл' style='vertical-align: middle'> Кнопка с рисунком :)";
		} else{
		document.getElementById('button1').innerHTML = "<img id='img1' src='picture1.jpg' width=30 high=30 alt='Улыбающийся смайл' style='vertical-align: middle'> Кнопка с рисунком :)";
		document.getElementById('button2').innerHTML = "<img id='img2' src='picture2.jpg' alt='Подмигивающий смайл' width=30 high=30 style='vertical-align: middle'>Кнопка с рисунком ;-)";
		}
	i = !i;
};
function hideImg(){
	document.getElementById('img3').style.display = 'none';
	setTimeout(function(){
		document.getElementById('td3').innerHTML = "<img id='img3' src='picture3.jpg' alt='Языкастый смайл' class='size'>";
				}, 5000);
};
function shad1(){
	document.getElementsByClassName('titleShadow')[0].style.textShadow="1px 1px 2px black, 0 0 1em red, 0 0 2em blue";
};
function shad2(){
	document.getElementsByClassName('titleShadow')[0].style.textShadow="1px 1px 2px black";
};
let arr = [
{
		name: "Иван",
		surname: "Петрович"
},
{
		name: "Петр",
		surname: "Иванович"	
},
{
		name: "Ивант",
		surname: "Иванович"
},
{
		name: "Игорь",
		surname: "Петрович"
}
];
/*function aa(element){
	console.log(element)
	let p = document.createElement("h1");
	p.innerHTML = element.name + " " + element.surname;
	console.log(p);
	document.body.append("<h1>djg;lsdk;ld</h1>");
	//document.body.appendChild(p);
};*/
//arr.forEach(aa);
//document.getElementById('dd').innerHTML = "<h1>Сегодняшняя дата: " + d +"</h1>";