import React from "react";

import doctor2 from "../../../images/Doctor/doctor2.jfif";
import doctor3 from "../../../images/Doctor/doctor3.jfif";
import doctor4 from "../../../images/Doctor/doctor4.jfif";
import doctor5 from "../../../images/Doctor/doctor5.jfif";
import doctor6 from "../../../images/Doctor/doctor6.jfif";
import doctor7 from "../../../images/Doctor/doctor7.jfif";
import doctor8 from "../../../images/Doctor/doctor8.jfif";
import Doctor from "../Doctor/Doctor";

const doctors = [
  {
    img: "https://images.unsplash.com/photo-1551601651-05a4836d25c2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTIxfDEwNzkyMTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Michael Linden",
    describe: "Throat Specialist",
    phone: "018878789798",
  },
  {
    img: "https://images.unsplash.com/photo-1551601651-09492b5468b6?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTIwfDEwNzkyMTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "HDr. Max Turner",
    describe: "Cardiologist",
    phone: "019888787878",
  },
  {
    img: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTMxfDEwNzkyMTN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Amy Adams",
    describe: "Rehabilitation Therapy",
    phone: "01739898893",
  },
  {
    img: "https://images.unsplash.com/photo-1542868728-79f5b3a92aff?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjF8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Nick Sims",
    describe: "Outpatient Surgery",
    phone: "018938398498",
  },
  {
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTZ8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Michael Linden",
    describe: "Cardiac Clinic",
    phone: "0168973778",
  },
  {
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjV8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Max Turner",
    describe: "Ophthalmology Clinic",
    phone: "01387877894",
  },
  {
    img: "https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMDc5MjEzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Amy Adams",
    describe: "Gynaecological Clinic",
    phone: "01687798980",
  },
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE4fDEwNzkyMTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dr. Julia Jameson",
    describe: "Outpatient Rehabilitation",
    phone: "01776768978",
  },
];
const Doctors = (props) => {
  const { home = false } = props;
  return (
    <div className="container">
      <div className="row g-2">
        <h1 style={{ textAlign: "left" }}>Doctors</h1>
        {doctors.map((doctor, i) =>
          home ? (
            i < 4 && <Doctor key={doctor.name} doctor={doctor}></Doctor>
          ) : (
            <Doctor key={doctor.name} doctor={doctor}></Doctor>
          )
        )}
      </div>
    </div>
  );
};

export default Doctors;
