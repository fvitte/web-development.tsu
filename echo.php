<php

$array=['Лена','Настя','Влад','Виталий'];
/*foreach ($array as $name)/* перебор по значениям*/
{
		echo $name, '<br>'; */
foreach ($array as $key => $name)/* перебор по ключ+значениям*/
{
		echo ($key+1),'. ',$name, '<br>'; */}

/*for ($i=0; $i<10; $i++)
{
	echo
}*/
$name=$GET['name'];
$lastname=$get['lastname'];

echo 'Вас зовут: $name $lastname!';