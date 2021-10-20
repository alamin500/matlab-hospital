import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const services = [
  {
    id: 1,
    service: "Laboratory Analysis",
    describe:
      "Laboratory analysis means a test performed by a labo- ratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.Laboratory analysis means a test performed by a labo- ratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.",
    img: "https://images.unsplash.com/photo-1582560486643-d51a9722b92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMDc5MjEzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    catagory: "Pharmacy",
  },
  {
    id: 2,
    service: "Pediatric Clinic",
    describe:
      " For outpatient services, Pediatric Clinic has offices in Opelika and Auburn. Our board certified physicians provide inpatient care at East Laboratory analysis means a test performed by a labo- ratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.Laboratory analysis means ",
    img: "https://images.unsplash.com/photo-1578496481449-cf2e845cc00c?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMDc5MjEzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Pediatric",
  },
  {
    id: 3,
    service: "Laryngological Clinic",
    describe:
      "The clinic's laryngology specialists are skilled and continually trained in the latest medical, surgical and behavioral techniques for surgical and behavioral techniques for.The clinic's laryngology specialists are skilled and continually trained in the latest medical, surgical and behavioral techniques for surgical and behavioral techniques for.",
    img: "https://images.unsplash.com/photo-1595541436696-9d1ed153a2ca?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Laryngological",
  },
  {
    id: 4,
    service: "Outpatient Rehabilitation",
    describe:
      "When you're recovering from an illness, surgery, or injury, you may need outpatient rehabilitation. This means you'll get one or more types of therapy after means you'll get one or more types of therapy after may When you're recovering from an illness, surgery, or injury, you may need outpatient rehabilitation. This means you'll get one or more types of therapy after means you'll get one or more types of therapy after may",
    img: "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjl8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Rehabilitation",
  },
  {
    id: 5,
    service: "Gynaecological Clinics",
    describe:
      "Visit the Gynecology Clinic, which offers care from annual exams to complex problems including urogynecology and pediatric and adolescent gynecology.urogynecology and pediatric and adolescent gynecology.Visit the Gynecology Clinic, which offers care from annual exams to complex problems including urogynecology and pediatric and adolescent gynecology.urogynecology and pediatric and adolescent gynecology. ",
    img: "https://images.unsplash.com/photo-1576671495234-2aaa0156b50a?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzJ8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Therapy",
  },
  {
    id: 6,
    service: "Ophthalmology Clinics",
    describe:
      "International Ophthalmology Clinics is a valuable resource for any medical professional seeking to stay informed and up-to-date regarding developments in stay informed and up-to-date regarding developments in International Ophthalmology Clinics is a valuable resource for any medical professional seeking to stay informed and up-to-date regarding developments in stay informed and up-to-date regarding developments in",
    img: "https://images.unsplash.com/photo-1581595220057-eefa8c4add1b?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Pharmacy",
  },
  {
    id: 7,
    service: "Cardiac Clinic",
    describe:
      "Clinics is a valuable resource for any medical professional seeking to stay informed and up-to-date regarding developments in seeking to stay informed and up-to-date regarding developments in.International Ophthalmology Clinics is a valuable resource for any medical professional seeking to stay informed and up-to-date regarding developments in stay informed and up-to-date regarding developments in",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njl8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Cardiac",
  },
  {
    id: 8,
    service: "Outpatient Surgery",
    describe:
      "Ophthalmology is a branch of medicine and surgery that deals with the diagnosis and ... Zofia Falkowska (1915–93) head of the Faculty and Clinic of Ophthalmology surgery that deals with the diagnosis.International Ophthalmology Clinics is a valuable resource for any medical professional seeking to stay informed and up-to-date regarding developments in stay informed and up-to-date regarding developments in",
    img: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nzh8MTA3OTIxM3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    catagory: "Surgery",
  },
];
const BookAppointment = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();
  console.log(user);
  const value = services.filter(
    (service) => service.id === parseInt(serviceId)
  )[0];
  const { describe, service, img } = value;
  return (
    <div className="d-flex p-5 m-5 container ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="m-5">
        <h1>{service}</h1>
        <p>{describe}</p>

        {user?.email ? (
          <Link to="/buy">
            <button className="btn btn-warning">
              Appointment {service.toLowerCase()}
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-warning">
              Appointment {service.toLowerCase()}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
