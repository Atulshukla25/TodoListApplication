let NoteInput = document.getElementById("value");
let AddNote = document.getElementById("addNote");
let NoteList = document.getElementById("noteList");

AddNote.addEventListener("click", () => {
  let text = NoteInput.value.trim();
  if (text) {
    let li = document.createElement("li");
    li.innerHTML = `${text} <button id="deleteBtn">X</button`;
    NoteList.appendChild(li);
    NoteInput.value = "";

    let Delete = li.querySelector("#deleteBtn");
    Delete.addEventListener("click", () => {
      li.remove();
    });
  }
});
