import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Academics from "./pages/Academics";
import Infrastructure from "./pages/Infrastructure";
import Acheivements from "./pages/Acheivements";
import Events from "./pages/Events";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Results from './pages/Results';
import Scholarships from './pages/Scholarships';
import Toppers from './pages/Toppers';
import SummerCamp from './pages/SummerCamp';
import AnnualEvents from './pages/AnnualEvents';
import Sports from './pages/Sports';
import Excursion from './pages/Excursion';

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: "-100vh" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/courses" element={<PageTransition><Courses /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/academics" element={<PageTransition><Academics /></PageTransition>} />
        <Route path="/infrastructure" element={<PageTransition><Infrastructure /></PageTransition>} />
        <Route path="/acheivements" element={<PageTransition><Acheivements /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/admissions" element={<PageTransition><Admissions /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/achievements/results" element={<PageTransition><Results /></PageTransition>} />
        <Route path="/achievements/scholarships" element={<PageTransition><Scholarships /></PageTransition>} />
        <Route path="/achievements/toppers" element={<PageTransition><Toppers /></PageTransition>} />
        <Route path="/events/summercamp" element={<PageTransition><SummerCamp /></PageTransition>} />
        <Route path="/events/annualevents" element={<PageTransition><AnnualEvents /></PageTransition>} />
        <Route path="/events/sports" element={<PageTransition><Sports /></PageTransition>} />
        <Route path="/events/excursion" element={<PageTransition><Excursion /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
