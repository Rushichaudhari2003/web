<php?
$insert = false;
if(isset($_POST ['name'] )){

    // Set connection variables

    $server = "localhost";
    $username = "root";
    $password = "";
    $db_name = "contact"

    // Create a database connection

    $con = mysqli_connect($server, $username, $password, $db_name);

    // Check for connection success

    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }

    // echo "Success connecting to the db" ;
    // Collect post variables
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $msg = $_POST['msg'];
   

  


    $sql = INSERT INTO `data` (`name`, `email`, `subject`, `msg`) 
    VALUES ('Suraj', 'surajjeughale2727@gmail.com', 'Web Development', 'I Want Experience In Web Development.');
    
    // echo $sql;
    // Execute the query

    if($con->query($sql) == true){

        // echo "Successfully inserted"; 
        // Flag for successful insertion
        
        $insert = true;
    }
    else{
      
    }
    // Close the database connection
    }
?>