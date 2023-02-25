import { useState } from "react";
import Star from "./Star";


const JohnObject = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  const firstName = contact.firstName;
  const lastName = contact.lastName;
  const email = contact.email;
  const phone = contact.phone;
  const isFavorite = contact.isFavorite;

  function toggleFavorite() {
    setContact(prevObject => {
        return {...prevObject, isFavorite: !isFavorite}
    })
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <article className="w-[200px] border border-[#D3D3D3] rounded-[10px] h-[350px] shadow-3xl">
        <img src={require("../images/user.png")} className="w-full pb-0 p-[10%]" alt="user" />
        <div className="p-[10px]">
            <Star isFilled = {isFavorite} handleClick={toggleFavorite} />
         
          <h2 className="text-gray-800">
            {firstName} {lastName}
          </h2>
          <p className="text-xs text-gray-600">{phone}</p>
          <p className="text-xs text-gray-600">{email}</p>
        </div>
      </article>
    </main>
  );
};

export default JohnObject;
