<php

$array=['Лена','Настя','Влад','Виталий'];
/*создадим ассоциативный массив*/
$assoc_array=[
	'name' => $array,
	'string' => 'строка',
	'char' => 'символ'
	];
var_dump($assoc_array); /* выводит текущее значение указанной переменной*/
/*foreach ($array as $name)/* перебор по значениям*/
{
		echo $name, '<br>';
}		*/
/*foreach ($array as $key => $name)/* перебор по ключ+значениям*/
{
		echo ($key+1),'. ',$name, '<br>'; 
}*/
foreach ($array as $key => $name)/* перебор по ассоциативному массиву*/
{
		echo $key,'. ',$name, '<br>'; 
}
/*for ($i=0; $i<10; $i++)
{
	echo
}*/
$name=$GET['name'];
$lastname=$get['lastname'];

echo 'Вас зовут: $name $lastname!';