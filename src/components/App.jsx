import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"; // NEW: useLocation imported
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
import { Note } from "@mui/icons-material";
import NationalParties from "./NationalParties";
import RegionalParties from "./RegionalPartie";


function App() {
  const [note, setNote] = useState([]); // State to store submitted notes
  const [doLike, toggleLike] = useState({});

  function likeIt(id) {
    toggleLike((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function addNote(newNote) {
    setNote((prevNotes) => [...prevNotes, newNote]); // Add new note to list
  }

  return (
    <Router>
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
          } // NEW: Wrapper to handle category
        />
        <Route
          path="/opinion"
          element={
            <Notes
              notes={note}
              selectedCategory={null}
              doLike={doLike}
              likeIt={likeIt}
            />
          }
        />
        <Route  path="/national-parties" element={<NationalParties/>}/>
        <Route  path="/regional-parties" element={<RegionalParties/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

// NEW: Separate wrapper to pass category from state
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
