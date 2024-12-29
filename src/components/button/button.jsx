import classes from './button.module.css'
export function Button({ children, onClick }) {
    return (
        <button className={classes.button} onClick={onClick}>{children}</button>
    )
}