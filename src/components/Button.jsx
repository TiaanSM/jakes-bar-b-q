import styles from './Components.module.css';

const Button = (props) => {

  return (
    <button className={styles.button}> {/* props.buttonLight || props.buttonRed */}
        {props.text}
    </button>
  )
}

export default Button