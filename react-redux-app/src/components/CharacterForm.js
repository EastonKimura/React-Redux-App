import React from "react"
import { connect } from "react-redux"
import { getData } from "../actions"

const CharacterForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData()
  
  return (
    <>
      {props.isFetchingData ? (
        <div> Loading character </div>
      ) : (
          //searchform
          <button onClick={handleGetData}> Find Character</button>
        )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}
export default connect(
  mapStateToProps,
  { getData }
)(CharacterForm)