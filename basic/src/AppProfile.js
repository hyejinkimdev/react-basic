// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'; 
import Avatar from './components/Avatar';


function AppProfile() {
  return (
    <>
    <button onClick={ (event) => {
        console.log(event);
    }}>버튼</button>
    <Avatar 
    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    isNew={true}
    />
    <Profile image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" name="James Kim" title="프론트엔드 개발자" isNew={true}/>
    <Profile image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name="Bob Yu" title="프론트엔드 개발자"/>
    <Profile image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" name="Anna Young" title="프론트엔드 개발자"/>
    </>
  );
}

export default AppProfile;
