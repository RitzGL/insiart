import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignupForm from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
function App() {
  return (<>
    <Header />
    <LoginForm />
    <SignupForm />
    </>
  );
}

export default App;
