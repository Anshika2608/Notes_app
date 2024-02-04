import React, { useState, useRef } from "react";
import Newnote from "./Newnote";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Button() {
  //const[notes,setNotes]=useState([])
  const [notes, setNotes] = useState({
    title: "",
    note: "",
    list: [], // Use a separate array to store notes
  });
  const [editedNote, setEditedNote] = useState({
    title: "",
    note: "",
    key: null,
  });

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const editedNoteIndex = useRef(null);

  const AddNotes = () => {
    console.log(editedNoteIndex.current);
    if (editedNoteIndex.current !== null) {
      console.log(editedNoteIndex.current);
      //     // If a note is being edited, update it instead of adding a new one
      SaveEdit();
    }
    if (notes.title.trim() !== "" && notes.note.trim() !== "") {
      setNotes((prevNotes) => ({
        ...prevNotes,
        list: [
          ...prevNotes.list,
          {
            title: prevNotes.title,
            note: prevNotes.note,
            key: prevNotes.list.length,
          },
        ],
        title: "", // Clear the form after adding the note
        note: "",
      }));
    }
  };

  // const AddNotes = () => {
  //   if (editedNoteIndex.current !== null) {
  //     // If a note is being edited, update it instead of adding a new one
  //     SaveEdit();
  //   } else if (notes.title.trim() !== "" && notes.note.trim() !== "") {
  //     setNotes((prevNotes) => ({
  //       ...prevNotes,
  //       list: [
  //         ...prevNotes.list,
  //         {
  //           title: prevNotes.title,
  //           note: prevNotes.note,
  //           key: prevNotes.list.length,
  //         },
  //       ],
  //       title: "", // Clear the form after adding the note
  //       note: "",
  //     }));
  //   }
  // };

  //  const AddNotes=()=>{
  //   setNotes([...notes,{
  //     title:notes.title,
  //   note:notes.note,
  //   key:notes.length
  //   }
  //   ])
  // }

  //  const Edit = (noteKey) => {
  //   editedNoteIndex.current = noteKey;
  //   const noteToEdit = notes.list.find((note) => note.key === noteKey);

  //   setEditedNote({
  //     title: noteToEdit.title,
  //     note: noteToEdit.note,
  //     key: noteKey,
  //   });
  //   headingRef.current.value = noteToEdit.title;
  //   textRef.current.value = noteToEdit.note;
  // };

  const Edit = (noteKey) => {
    editedNoteIndex.current = noteKey;
    const noteToEdit = notes.list.find((note) => note.key === noteKey);
    headingRef.current.value = noteToEdit.title;
    textRef.current.value = noteToEdit.note;
    setEditedNote({
      title: noteToEdit.title,
      note: noteToEdit.note,
      key: noteKey,
    });
    setNotes((prevNotes) => ({
      ...prevNotes,
      title: noteToEdit.title,
      note: noteToEdit.note,
      list: prevNotes.list.map((note) =>
        note.key === noteKey
          ? { ...note, title: noteToEdit.title, note: noteToEdit.note }
          : note
      ),
    }));
  };

  const SaveEdit = () => {
    console.log(editedNoteIndex.current);
    if (editedNoteIndex.current !== null) {
      console.log(editedNoteIndex.current);
      const updatedNote = {
        title: editedNote.title,
        note: editedNote.note,
        key: editedNoteIndex.current,
      };

      setNotes((prevNotes) => ({
        ...prevNotes,
        list: prevNotes.list.map((note) =>
          note.key === editedNoteIndex.current ? updatedNote : note
        ),
      }));

      console.log("notes after update", notes);

      // Clear form inputs and edited note index
      headingRef.current.value = "";
      textRef.current.value = "";
      setEditedNote({
        title: "",
        note: "",
        key: null,
      });
      editedNoteIndex.current = null;
    }
  };

  // const SaveEdit = () => {
  //   if (editedNoteIndex.current !== null) {
  //     const updatedNote = {
  //       title: editedNote.title,
  //       note: editedNote.note,
  //       key: editedNoteIndex.current,
  //     };

  //     setNotes((prevNotes) => ({
  //       ...prevNotes,
  //       list: prevNotes.list.map((note) =>
  //         note.key === editedNoteIndex.current ? updatedNote : note
  //       ),
  //     }));

  //     // Clear form inputs and edited note index
  //     headingRef.current.value = "";
  //     textRef.current.value = "";
  //     setEditedNote({
  //       title: "",
  //       note: "",
  //       key: null,
  //     });
  //     editedNoteIndex.current = null;
  //   }
  // };

  // const SaveEdit = () => {

  //   const updatedNote = {
  //     title: headingRef.current.value,
  //     note: textRef.current.value,
  //     key: editedNoteIndex.current,
  //   };
  //   setNotes((prevNotes) => ({
  //     ...prevNotes,
  //     list: prevNotes.list.map((note, index) =>
  //       index === editedNoteIndex.current ? updatedNote : note
  //     ),
  //   }));
  //   headingRef.current.value = '';
  //   textRef.current.value = '';
  //   editedNoteIndex.current = null; // Clear the edited note index
  // };

  // const SaveEdit = () => {
  //   if (editedNoteIndex.current !== null) {
  //     const updatedNote = {
  //       title: editedNote.title,
  //       note: editedNote.note,
  //       key: editedNoteIndex.current,
  //     };

  //     setNotes((prevNotes) => ({
  //       ...prevNotes,
  //       list: prevNotes.list.map((note) =>
  //         note.key === editedNoteIndex.current ? { ...note, ...updatedNote } : note
  //       ),
  //     }));

  //     // Clear form inputs and edited note index
  //     headingRef.current.value = "";
  //     textRef.current.value = "";
  //     setEditedNote({
  //       title: "",
  //       note: "",
  //       key: null,
  //     });
  //     editedNoteIndex.current = null;
  //   }
  // };

  const deleteNote = (noteKey) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      list: prevNotes.list.filter((note) => note.key !== noteKey),
    }));
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <form className="flex flex-col bg-[#6962AD] md:w-1/3  w-3/4 h-fit py-4 px-4 justify-evenly mt-4 rounded-xl">
          <div className="flex flex-col ">
            <label htmlFor="title" className="text-white font-bold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              ref={headingRef}
              name="heading"
              value={notes.title}
              className="w-full"
              onChange={(e) => setNotes({ ...notes, title: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="write" className="text-white font-bold">
              Note :
            </label>
            <textarea
              id="write"
              name="text"
              ref={textRef}
              value={notes.note}
              className="h-20  w-full"
              placeholder="write a note"
              onChange={(e) => setNotes({ ...notes, note: e.target.value })}
              style={{
                whiteSpace: "pre-wrap",
                resize: "none",
              }}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border-3 rounded-lg w-24 h-8 center bg-[#96E9C6] font-bold mt-4"
              onClick={AddNotes}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {/* note */}
      <div className="mt-4 ml-4  min-h-36  w-auto mb-16 ">
        <ul className="mt-4 flex w-auto flex-wrap">
          {notes.list.map((note) => (
            <li
              key={note.key}
              className="flex flex-col bg-[#6962AD] m-4 rounded-xl max-w-60 min-w-60 min-h-36 whitespace-normal break-words overflow-auto"
            >
              <div className="flex justify-end ">
                <button className="mr-4" onClick={() => Edit(note.key)}>
                  <FontAwesomeIcon icon={faPencilAlt} className="text-white" />{" "}
                </button>
                <button className="mr-4" onClick={() => deleteNote(note.key)}>
                  <FontAwesomeIcon icon={faTrash} className="text-white " />
                </button>
              </div>
              <div className="font-bold text-white ml-4 pt-3 text-2xl capitalize max-h-14 overflow-auto scrollbar-style  font-protest">
                {note.title}{" "}
              </div>
              <div className="ml-4 text-lg  text-white pt-3 max-h-32 overflow-auto break-words scrollbar-style ">
                {note.note}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Button;
