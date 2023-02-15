import '../App.css';
import Logo from './Logo';

const PageChange = (props) => {
  return (

    <div className={props.pageLoaded ? "pageChangeFinish" :"pageChangeStart"}>
        <Logo color="#ff4339" />
    </div>
  
  )
}

export default PageChange