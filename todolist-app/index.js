document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('input-box');
    const listCont = document.getElementById('listcont');
    const button=document.getElementById('butt');
    
    function addThis() {
        const inputValue = inputBox.value;
        if (inputValue.trim() === "") {
            alert("Please add some text");
            return;
        }
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        listCont.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";  
        li.appendChild(span);
        
        inputBox.value = ''; 

        saveData();
        
    }
    
   
    inputBox.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addThis();
        }
    });
    
    button.addEventListener('click',addThis);
    
    // Add event listener for list item clicks
    listCont.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("wrong");
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData(){
        localStorage.setItem("data",listCont.innerHTML);
    }
    function showData(){
        listCont.innerHTML=localStorage.getItem("data");
    }

    showData();
});
