import styles from './Components.module.css';

const Button = (props) => {

  return (
    <button className={props.buttonDark ? styles.buttonDark : styles.button}> {/* props.buttonLight || props.buttonRed */}
        {props.text}
    </button>
  )
}

export default Button