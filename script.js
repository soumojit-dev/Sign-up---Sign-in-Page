let signinBtn = document.getElementById("signinBtn");  
        let signupBtn = document.getElementById("signupBtn");  
        let nameField = document.getElementById("nameField");  
        let title = document.getElementById("title");  

        signinBtn.onclick = function() {
            nameField.style.maxHeight = "0"; 
            title.innerHTML = "Sign in";

            // Swap colors
            signinBtn.style.backgroundColor = "#3c00a0"; 
            signupBtn.style.backgroundColor = "#ec2f4b"; 

            signupBtn.classList.add("disabled-look");
            signinBtn.classList.remove("disabled-look");
        }

        signupBtn.onclick = function() {
            nameField.style.maxHeight = "65px"; 
            title.innerHTML = "Sign up";

            // Swap colors
            signupBtn.style.backgroundColor = "#3c00a0"; 
            signinBtn.style.backgroundColor = "#ec2f4b"; 

            signinBtn.classList.add("disabled-look");
            signupBtn.classList.remove("disabled-look");
        }