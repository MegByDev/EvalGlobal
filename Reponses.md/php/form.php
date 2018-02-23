
    <?php

if(isset($_POST) && isset($_POST['Email']) && isset($_POST['mot_de_pass']))
{		
	extract($_POST);
	if(!empty($Email) && !empty($mot_de_pass)

	)

	{require ("mail.php");
				
	} 
	// fin if Empty

	else { echo "Param Vide !";}
	} 
	else{echo "Param Indefini !";

}

// fin
?>
