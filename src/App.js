import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog';
import Portfolio from './components/Pages/Portfolio';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import NotFound from './components/Pages/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import AddReview from './components/Dashboard/AddReview';
import MyOrders from './components/Dashboard/MyOrders';
import RequireAuth from './components/Required/RequireAuth';
import RequireAdmin from './components/Required/RequireAdmin';
import AddProduct from './components/Dashboard/Admin/AddProduct';
import ManageOrders from './components/Dashboard/Admin/ManageOrders';
import ManageProducts from './components/Dashboard/Admin/ManageProducts';
import Users from './components/Dashboard/Admin/Users';
import Purchase from './components/Dashboard/Purchase';
import Payment from './components/Dashboard/Payment';
import PurchaseItem from './components/Dashboard/PurchaseItem';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          {/* All Access  */}
          <Route index element={<MyProfile />}></Route>
          {/* User Access  */}
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='purchase' element={<Purchase />}></Route>
          <Route path='purchase/:itemId' element={<PurchaseItem />}></Route>
          <Route path='payment/:itemId' element={<Payment />}></Route>


          {/* Admin Acces  */}
          <Route path='addproduct' element={<RequireAdmin> <AddProduct /> </RequireAdmin>}></Route>
          <Route path='manageorders' element={<RequireAdmin> <ManageOrders /> </RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin> <ManageProducts /> </RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>


      </Routes>



      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
