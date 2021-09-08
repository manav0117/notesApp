console.log("My script is working");
showNotes(); 
// If you want to add a note, Add it to the localStorage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e)
{
// event check
//console.log("Checked");
 let addTxt=document.getElementById('addTxt');
 let notes=localStorage.getItem("notes");
 let notesObj=[];
 if(notes==null)
 {
     notesObj=[];
 }
 else
 {
     notesObj=JSON.parse(notes);
 }
 notesObj.push(addTxt.value);
 localStorage.setItem("notes",JSON.stringify(notesObj));
 addTxt.value="";
 console.log(notesObj);
 showNotes();
});
// Function to show the notes from the local storage    
function showNotes()
{
    let notes=localStorage.getItem("notes");
    let notesObj=[];
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index)
    {
        html+=`
        <div class=" noteCard card my-3 mx-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">
             ${element}
            </p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>


        `;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length !=0)
    {
            notesElm.innerHTML=html;
    }
    else
    {
        notesElm.innerHTML=`Nothing to show!.Use add note option to enter the node`;
    }
}
// Function to delete a node
function deleteNote(index)
{
 // console.log("I am deleting ",index);
  let notes=localStorage.getItem("notes");
 let notesObj=[];
 if(notes==null)
 {
     notesObj=[];
 }
 else
 {
     notesObj=JSON.parse(notes);
 }
 notesObj.splice(index,1);
 localStorage.setItem("notes",JSON.stringify(notesObj));
 showNotes();
}   
let searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener('input',function()
{
    let search=searchTxt.value;
//  console.log("Search option fired up",search);
  let noteCards=document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element)
  {
      let Cardtxt=element.getElementsByTagName('p')[0].innerHTML;
      if(Cardtxt.includes(search))
      {
          element.style.display="block";
      }
      else
      {
          element.style.display="none";
      }
  })
});
/*Further Features
1. Add title
2. Mark a note as important
3.Seperate notes by user
 */