import { Fragment } from "react";
import classes from './Header.module.css';
import Meals from '../../Assets/Meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={Meals} alt="A table "/>
        </div>
    </Fragment>
}
export default Header;