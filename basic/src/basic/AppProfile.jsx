// import logo from './logo.svg';
import './App.scss';
import Profile from './components/Profile'; 
import Avatar from './components/Avatar';

function AppProfile() {
  const handleClick = (event) => {console.log(event); alert("버튼이 클릭 되었습니다.");}
  return (
    <>
    <div className="ex-profile">
      <div className="container">
        <h2>Profile (Props)</h2>
        <Avatar 
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        isNew={true}
        />
        <Profile image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" name="James Kim" title="프론트엔드 개발자" isNew={true}/>
        <Profile image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name="Bob Yu" title="프론트엔드 개발자"/>
        <Profile image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" name="Anna Young" title="프론트엔드 개발자"/>
        </div>
      </div>
    </>
  );
}

export default AppProfile;
