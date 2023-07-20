function highlight() {
    let boldAll = document.querySelectorAll("strong");
	for(let bold of boldAll) {
		bold.style.color = "green";
	}
}

 
function return_normal() {
    let boldAll = document.querySelectorAll("strong");
	for(let bold of boldAll) {
		bold.style.color = "black";
	}    
} 
