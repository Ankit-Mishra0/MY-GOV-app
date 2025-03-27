import React from "react";
import { useLocation } from "react-router-dom";
function Opinions(){
    const location=useLocation();
    const selectCatogery=location.state?.catogery||null;
    
}

