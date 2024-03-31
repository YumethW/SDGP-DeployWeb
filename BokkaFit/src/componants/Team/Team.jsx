// Team.js

import React from "react";
import img1 from "../../../public/Member1.jpg";
import img2 from "../../../public/Member2.png";
import img3 from "../../../public/Member3.jpg";
import img4 from "../../../public/Member4.jpg";
import img5 from "../../../public/Member5.jpg";
import "./Team.css";

function Team() {
  const members = [
    { id: 1, name: "Yumeth Weerasekera", img: img1 },
    { id: 2, name: "Ganidu Uddeepana", img: img2 },
    { id: 3, name: "Joshuwa Enalka", img: img3 },
    { id: 4, name: "Chanumi Dewanga", img: img4 },
    { id: 5, name: "Achira Uddeepana", img: img5 },
  ];

  return (
    <div className="group-members">
      {members.map((member) => (
        <div key={member.id} className="member">
          <img src={member.img} alt={member.name} />
          <p>{member.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Team;
