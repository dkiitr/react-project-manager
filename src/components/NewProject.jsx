import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        //getting the input values using useRef...
        let enteredTitle = titleRef.current.value;
        let enteredDescription = descriptionRef.current.value;
        let enteredDueDate = dueDateRef.current.value;

        // validating for empty input value
        if (
            enteredTitle === "" ||
            enteredDescription === "" ||
            enteredDueDate === ""
        ) {
            //modalRef
            modalRef.current.open();
            return;
        }

        //Adding new project via onAdd Props
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption="Close">
                <h2 className="text-stone-800 font-bold text-xl my-4">
                    Invalid Input
                </h2>
                <p className="text-stone-600 mb-2">
                    It looks like you forgot to enter the inputs.
                </p>
                <p className="text-stone-600 mb-2">
                    Please, make sure to provide valid input values in all input
                    field...
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex my-4 gap-4 items-center justify-end">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" textarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    );
};

export default NewProject;
