import {useState} from "react";
export default function GeneralInfo() {
  
  const [isEditing, setIsEditing]= useState(true);
    return
   <form action="#" method="get">

         <div>
                    <label for="Name">Name </label>
                    <input type="text" id="Name" name="Name" required placeholder="Haroon Adeel" />
                </div>
                <div>
                    <label for="Phone">Phone </label>
                    <input type="tel" id="Phone" name="Phone" required placeholder="0312-3456789" />
                </div>
                <div>
                    <label for="email">EMAIL </label>
                    <input type="email" id="email" name="email" required placeholder="yourname@haroon.com" />
                </div>
                <div>
                    <button>Submit</button>
                    <button>Edit</button>
                </div>
  </form>

}