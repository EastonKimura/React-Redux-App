import React from "react";
import { connect } from "react-redux"


const CharacterDiv = props => {
  return (
    <>
      {props.error ? (
        <div> {props.error} </div>
      ) : (
          <div>
            <h1>{props.character.name}</h1>
            <h3>Status: {props.character.status}</h3>
            <p>Species: {props.character.species}</p>
            <img src={props.character.image} alt={""} />
          </div>
        )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    character: state.character,
    error: state.error
  }
}
export default connect(
  mapStateToProps,
  {}
)(CharacterDiv)