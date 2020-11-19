<?php
	function is_image($image_path)
	{
		return endsWith($image_path, '.jpg');
	}