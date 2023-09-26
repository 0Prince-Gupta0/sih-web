import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Root from './Pages/Root';
import AuthenticationPage from './Pages/AuthenticationPage';
import Error from './Pages/Error';
import Question from './Pages/Question';
import Plan from './Pages/Plan';
import SpeechToText from './Pages/SpeechToText';

function App() {

   const router=createBrowserRouter([{
    path:"/",
    element:<Root />,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"auth",
        element:<AuthenticationPage/>
      },
      {
        path:"question",
        element:<Question/>
      },
      {
        path:"learn",
        element:<Plan/>
      },
      {
        path:"Speech-To-Text",
        element:<SpeechToText />
      }
    ]
   }])
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  );
}

export default App;
