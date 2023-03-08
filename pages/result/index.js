import React from 'react'
// import store from './store'
import { connect } from 'react-redux'
import { FiveDecBtn,ResBtn,FiveIncBtn } from '../increment/action'
import Styles from "../../styles/counter.module.css"


function index({value,FiveIncBtn,FiveDecBtn,ResBtn}) {
  return (
    <div className={Styles.bgContainer}>
        <div className={Styles.alignment}>
    <div className={Styles.counterCard}>
       
          
           <div className={Styles.counterText}>Count:<span style={{color:"green"}}>{value}</span></div>
           <div style={{margin:"20px"}}>
           <button className={Styles.Btn}  onClick={()=>FiveIncBtn(5)}>Increment</button>
           <button className={Styles.Btn}  onClick={ResBtn}>Reset</button>
           <button className={Styles.Btn}  onClick={()=>FiveDecBtn(5)}>Decrement</button>
           </div>
     
    </div>
    </div>
    </div>
  )
}
const mapStateToProps= state =>({
    value:state
})
export default connect (mapStateToProps,{FiveIncBtn,FiveDecBtn,ResBtn})(index)
