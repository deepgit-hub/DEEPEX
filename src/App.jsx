import { Routes, Route } from "react-router-dom";

// ================================
// AUTHENTICATION / ENTRY
// ================================

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ChooseLanguage from "./pages/ChooseLanguage";

// ================================
// DEEPEX
// ================================

import Deep from "./pages/Deep";

// ================================
// DEEP SPEAK
// ================================

import DeepLearn from "./pages/DeepLearn";
import DeepLearnCategory from "./pages/DeepLearnCategory";
import DeepLearnConcept from "./pages/DeepLearnConcept";

// ================================
// DEEP CODE
// ================================

import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Question from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";

// ================================
// DEEP CODE WEB
// ================================

import LearningChoice from "./pages/LearningChoice";
import WebDevelopment from "./pages/WebDevelopment";

function App() {

  return (

    <Routes>

      {/* ==========================================
          AUTHENTICATION
      ========================================== */}

      <Route
        path="/"
        element={<Login />}
      />


      {/* ==========================================
          DEEPEX MAIN PAGE
      ========================================== */}

      <Route
        path="/deep"
        element={<Deep />}
      />


      {/* ==========================================
          DEEP SPEAK
      ========================================== */}

      <Route
        path="/deep-speak"
        element={<DeepLearn />}
      />

      <Route
        path="/deep-speak/:categoryId"
        element={<DeepLearnCategory />}
      />

      <Route
        path="/deep-speak/:categoryId/:conceptId"
        element={<DeepLearnConcept />}
      />


      {/* ==========================================
          DEEP CODE - ENTRY
         ========================================== */}

<Route
  path="/choose-language"
  element={<ChooseLanguage />}
/>

{/* NEW LEARNING SELECTION PAGES */}

<Route
  path="/learning-choice"
  element={<LearningChoice />}
/>

<Route
  path="/web-development"
  element={<WebDevelopment />}
/>

<Route
  path="/welcome"
  element={<Welcome />}
/>

      

      <Route
        path="/languages"
        element={<Languages />}
      />


      {/* ==========================================
          DEEP CODE - LEARNING
      ========================================== */}

      <Route
        path="/home/:languageId"
        element={<Home />}
      />

      <Route
        path="/topic/:languageId/:topicId"
        element={<Topic />}
      />

      <Route
        path="/questions/:languageId/:topicId"
        element={<Question />}
      />

      <Route
        path="/question/:languageId/:topicId/:questionId"
        element={<QuestionDetails />}
      />

    </Routes>

  );
}

export default App;