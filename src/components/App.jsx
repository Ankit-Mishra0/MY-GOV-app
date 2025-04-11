import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { TourProvider, useTour } from "@reactour/tour"; 

import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Card from "./card";
import Leader from "./leader";
import RollingGallery from "./info";
import Menu from "./floating";
import Carousel from "./carousel";
import LoginPage from "./login";
import Notes from "./Note";
import NationalParties from "./NationalParties";
import RegionalParties from "./RegionalPartie";

const steps = [
  {
    selector: ".navbar",
    content: "This is your main navigation.",
  },
  {
    selector: ".cards-container",
    content: "Click on any leader's card to learn more.",
  },
  {
    selector: ".actions",
    content:
      "Here you can select your actions like giving feedback , Advice or posting complaint.",
  },
  {
    selector: ".political-parties",
    content:
      "Here you can explore the list of National and Regional political parties.",
  },
];

function AppContent({ addNote, note, doLike, likeIt }) {
  const { setIsOpen } = useTour();

  useEffect(() => {
    const visited = localStorage.getItem("visited_tutorial");
    if (!visited) {
      setIsOpen(true); //
      localStorage.setItem("visited_tutorial", "true");
    }
  }, [setIsOpen]);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="cards-container">
                {Leader.map((leader) => (
                  <Card
                    key={leader.key}
                    name={leader.name}
                    about={leader.about}
                    image={leader.image}
                  />
                ))}
              </div>
              <Carousel />
              <Footer />
              <RollingGallery autoplay={true} pauseOnHover={true} />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <MenuWrapper
              addNote={addNote}
              notes={note}
              doLike={doLike}
              likeIt={likeIt}
            />
          }
        />
        <Route
          path="/opinion"
          element={
            <div className="opinion-section">
              <Notes
                notes={note}
                selectedCategory={null}
                doLike={doLike}
                likeIt={likeIt}
              />
            </div>
          }
        />
        <Route path="/national-parties" element={<NationalParties />} />
        <Route path="/regional-parties" element={<RegionalParties />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

function App() {
  const [note, setNote] = useState([]);
  const [doLike, toggleLike] = useState({});

  function likeIt(id) {
    toggleLike((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function addNote(newNote) {
    setNote((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <TourProvider
      steps={steps}
      padding={{
        mask: 10,
        popover: [-10, 10],
      }}
      showBadge
      showDots
      disableInteraction
    >
      <Router>
        <AppContent
          addNote={addNote}
          note={note}
          doLike={doLike}
          likeIt={likeIt}
        />
      </Router>
    </TourProvider>
  );
}

function MenuWrapper({ addNote, notes, doLike, likeIt }) {
  const location = useLocation();
  const selectedCategory = location.state?.category || null;

  return (
    <>
      <Menu addNote={addNote} />
      <Notes
        notes={notes}
        selectedCategory={selectedCategory}
        doLike={doLike}
        likeIt={likeIt}
      />
    </>
  );
}

export default App;
