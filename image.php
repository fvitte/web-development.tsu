<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Изображение</title>
	</head>
	<body>
	<p><?=htmlspecialchars('<?php ?>')</p>
	<code>какой-то код</code>
	<?php
		//echo "Hello World";
		//$image_paths = ['/images/picture2.jpg', '/images/picture3.jpg', '/images/picture4.jpg']
		/*Проверяли работу scandir()
		echo "<pre>";
		var_damp(scandir("./images"));
		
		echo "</pre>";*/
		$image_filenames = scandir("./images");
		var_damp($image_paths);
		function endsWith($string, $suffix) {
			$lengs = strlen($suffix);
			if(!length) {
				return true;
			}
			return substr($string, -$length) === $suffix;
		}
		function is_image($image_path)
		{
			return endsWith($image_path, '.jpg');
		}
		
		foreach($image_filenames as $image_filename):
	?>
		<code><?=$image_filename?></code>
	<?php
		endforeach;
		
		foreach($image_filenames as $image_filename)
		{
			//TODO: Проверить, является ли картинкой
			
			//Вывести картинку
			if (!is_image($image_filename))
				continue;
			$image_path = "/images/$image_filename";
				// Выводим картинку
			
			//var_damp($image_path);
			//echo '<img src="' .$image_path . '" />';
			
			//echo "<img src='$image_path' />";
			echo "<img src=\"$image_path\" />";
		}
		
	?>
	
			<!--
			<img src="<?php $image_path?>"/>
			-->
			<img src="<?=$image_path?>"/>
	
	<?php
	
	
	?>
	
	</body>
</html>	