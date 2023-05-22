import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({ text }) {
  return (<><button className={styles.btn}>{text}</button>
  <h1>hello</h1>
  </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;
