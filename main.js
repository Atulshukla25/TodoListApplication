// let NoteInput = document.getElementById("value");
// let AddNote = document.getElementById("addNote");
// let NoteList = document.getElementById("noteList");

// AddNote.addEventListener("click", () => {
//   let text = NoteInput.value.trim();
//   if (text) {
//     let li = document.createElement("li");
//     li.innerHTML = `${text} <button id="deleteBtn">Delete</button`;
//     NoteList.appendChild(li);
//     NoteInput.value = "";

//     let Delete = li.querySelector("#deleteBtn");
//     Delete.addEventListener("click", () => {
//       li.remove();
//     });
//   }
// });

let NoteInput = document.getElementById("value");
let AddNote = document.getElementById("addNote");
let NoteList = document.getElementById("noteList");

AddNote.addEventListener("click", () => {
  let text = NoteInput.value.trim();
  if (text) {
    let li = document.createElement("li");
    li.innerHTML = `
      <span class="note-text">${text}</span>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    `;
    NoteList.appendChild(li);
    NoteInput.value = "";

    let Edit = li.querySelector(".editBtn");
    let Delete = li.querySelector(".deleteBtn");
    let noteText = li.querySelector(".note-text");

    // Delete functionality
    Delete.addEventListener("click", () => {
      li.remove();
    });

    // Edit functionality
    Edit.addEventListener("click", () => {
      let currentText = noteText.textContent;
      let newText = prompt("Edit your note:", currentText);
      if (newText && newText.trim()) {
        noteText.textContent = newText.trim();
      }
    });
  }
});
