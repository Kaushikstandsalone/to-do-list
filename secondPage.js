document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("button").addEventListener("click", function() {
        
        let form = document.createElement("form");

        
      

        
        let input = document.createElement("input");
        input.setAttribute("id", "task");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Write your task");
        input.style.borderRadius = "10px";
        input.style.height = "30px";
        input.style.marginBottom = "20px";

        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove task";

        
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "container");

        
        let date = document.createElement("input");
        date.setAttribute("type", "date");

        
        let time = document.createElement("input");
        time.setAttribute("type", "time");

        
      
        form.appendChild(input);
        form.appendChild(checkbox);
        form.appendChild(removeButton);
        form.appendChild(date);
        form.appendChild(time);

        
        removeButton.style.marginLeft = "10px";
        date.style.marginLeft = "10px";
        time.style.marginLeft = "10px";

        
        document.body.appendChild(form);

        
        removeButton.addEventListener("click", function(event) {
            event.preventDefault(); 
            input.remove();
            checkbox.remove();
            removeButton.remove();
            
            date.remove();
            time.remove();
            
            localStorage.removeItem("input");
            localStorage.removeItem("date");
            localStorage.removeItem("time");
        });

        
        input.addEventListener("input", function() {
            localStorage.setItem("input", input.value);
        });
        date.addEventListener("change", function() {
            localStorage.setItem("date", date.value);
        });
        time.addEventListener("change", function() {
            localStorage.setItem("time", time.value);
        });
    });

   
    let storedInput = localStorage.getItem("input");
    let storedDate = localStorage.getItem("date");
    let storedTime = localStorage.getItem("time");

    if (storedInput || storedDate || storedTime) {
     
        let form = document.createElement("form");

        let input = document.createElement("input");
        input.setAttribute("id", "task");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Write your task");
        input.value = storedInput || ""; 

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove task";

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
       

        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.value = storedDate || ""; 

        let time = document.createElement("input");
        time.setAttribute("type", "time");
        time.value = storedTime || ""; 

        
        form.appendChild(input);
        form.appendChild(checkbox);
        form.appendChild(removeButton);
        form.appendChild(date);
        form.appendChild(time);

        removeButton.style.marginLeft = "10px";
        date.style.marginLeft = "10px";
        time.style.marginLeft = "10px";

        document.body.appendChild(form);

        removeButton.addEventListener("click", function(event) {
            event.preventDefault();
            input.remove();
            checkbox.remove();
            removeButton.remove();
          
            date.remove();
            time.remove();
            localStorage.removeItem("input");
            localStorage.removeItem("date");
            localStorage.removeItem("time");
        });
    }
});
