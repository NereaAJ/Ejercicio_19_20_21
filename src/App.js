import './App.css';
import AsyncExample from './components/pure/AsyncExample';
import Axiosexample from './components/pure/AxiosExample';
import Fetchexample from './components/pure/FetchExample';
import Observableexample from './components/pure/ObservableExample';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de listado de Estado de Contacto */}
       {/* <TaskListComponents></TaskListComponents> */}

       {/* Ejemplos de procesos asincronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <Observableexample></Observableexample> */}
      <Fetchexample></Fetchexample>
      <Axiosexample></Axiosexample>

       {/* <Optionalrender></Optionalrender>
       <Ejercicio></Ejercicio> */}
      </header>
    </div>
  );
}
export default App;


// function App() {

//   let logged = false;

//   useEffect(() => {
//     logged = localStorage.getItem('credentials');
//     console.log('User Logged?', logged)
//   }, [])


//   return (
//     <Router>
//       <div>
//         <aside>
//           <Link to='/'>|| HOME |</Link>
          
//           <Link to='/login'>| Login |</Link>
//           <Link to='/registro'>| Registro |</Link>

//           <Link to='/tasks'>| Task ||</Link>
//         </aside>

//         <main>
//           <Switch> 
//             <Route exact path='/' component={ HomePage } />
//             <Route exact path='/online-state' component={ Statepage } />
//             <Route path='/login' component= { Loginpage }>
//               {
//                   logged ? 
//                     () => {
//                       alert('You are logged in. Redirecting to home...')
//                       return (<Redirect to='/'/>)
//                     }
//                   :
//                   () => {
//                     return (<Loginpage></Loginpage>)
//                   }
//               }
//             </Route>
//             <Route path='/registro' component={ LogoutPage } />
//             <Route path='/tasks' component={ Taskspage } >
//               {
//                 logged ? 
//                 <Taskspage />
//                 :
//                 () => {
//                   alert('You must be logged in. Redirecting to login...')
//                   return (<Redirect to='/login'/>)
//                 }
//               }
//             </Route>
//             {/* 404 - Page No Found */}
//             <Route component={ Notfoundpage } />
//           </Switch>
//         </main>

//       </div>

//     </Router>
//   );
// }

// export default App;
