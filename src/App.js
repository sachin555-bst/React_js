import './App.css';
import Navbar from './component/Navbar';
import Form  from './component/Form';
function App() {
  return (
    <>
 {/*<Navbar title ="TextUtils" aboutText="About TextUtils" /> */}
 <Navbar title ="TextUtils"  />   {/*aboutText will be taken fromt the default props */}
<div className='container'>

<Form heading="Enter the text"/>

</div>
  </>
  
  );
}

export default App;

