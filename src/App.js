import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter,Route } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material';
import UserFormPage from './components/UserFormPage';
import GuardAddOrderPage from './components/GuardAddOrderPage';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import GuardLandingPage from './components/GuardLandingPage';
<<<<<<< HEAD
import GuardSearchPage from './components/GuardSearchPage';
=======
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb

export const theme = createTheme({
  palette: {
   primary:{
     main: '#01579b',
   },
   secondary:{
     main: '#b3e5fc',
   },
   alternate:{
     main: '#81d4fa',
   },
   text:{
     secondary: '#212121',   
   }
  }, 
  typography: {
     fontFamily: "Brygada 1918",
     fontWeightLight: 400,
     fontWeightMedium: 600,
     fontWeightBold: 700,
     fontWeightRegular: 500
  }
})

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/userformpage' element={<UserFormPage/>}/>
        <Route exact path='/guardaddorderpage' element={<GuardAddOrderPage/>}/> 
<<<<<<< HEAD
        <Route exact path='/searchInstituteID' element={<GuardSearchPage/>}/>
=======
        <Route exact path='/searchpage' element={<SearchPage/>}/>
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb
        <Route exact path='/guardlandingpage' element={<GuardLandingPage/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>
  );
}

export default App;
