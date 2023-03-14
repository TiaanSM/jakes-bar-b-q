import '../App.css';
import { useEffect, useState } from 'react';

const PageChange = (props) => {

  const [playAnimation, setPlayAnimation] = useState(false);

    
    useEffect(() => {
      window.scrollTo(0,0);
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
    }, []);

  return (

    <div className={playAnimation ? "pageChangeFinish" :"pageChangeStart"}></div>
  
  )
}

export default PageChange