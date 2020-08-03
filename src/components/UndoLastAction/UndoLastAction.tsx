import { connect } from "react-redux"
import { undoLastChatAction } from "../../redux/actions"
import React from "react"

export default connect()(function UndoLastAction(props: {
    dispatch: (action: any) => void
}) {
    const {dispatch} = props;

    function onUndoClicked() {
        dispatch(undoLastChatAction())
    }

    return (
        <button onClick={onUndoClicked}>Undo</button>
    )
})