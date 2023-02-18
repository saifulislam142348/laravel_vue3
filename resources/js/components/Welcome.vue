<template>
 

	<div class="signup-container">
		<h2>Sign Up</h2>
		<form>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required>

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>

			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required>

			<label for="confirm-password">Confirm Password:</label>
			<input type="password" id="confirm-password" name="confirm-password" required>

			<input type="submit" value="Sign Up">
		</form>
	</div>



</template>
<script>
export default {
    
    data(){
        return{
          
        }
    }
}
</script>
<style>

.signup-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

input[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
}

input[type="submit"]:hover {
  background-color: #3e8e41;
}

</style>