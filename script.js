let i;
function addJob(){
    let li = document.createElement('li');
    let inputVal = document.getElementById('myInput').value;
    let job = document.createTextNode(inputVal);
    li.appendChild(job);
    if(inputVal === ''){
        alert("please enter a job !");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let myItems = document.getElementsByTagName('li');
    for(i=0; i<myItems.length; i++){
        let closeTag = document.createElement("span");
        let closeBtn = document.createTextNode("x");
        closeTag.className = "close";
        closeTag.appendChild(closeBtn);
        myItems[i].appendChild(closeTag);
    }
    let deleteJob = document.getElementsByClassName("close");
    for(i=0; i<deleteJob.length; i++){
        deleteJob[i].onclick = function(){
        let hide = this.parentElement;
        hide.style.display = "none";
        }
    }   
}
let items = document.querySelector('ul');
items.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
},false);
