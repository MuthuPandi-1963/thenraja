import {Schema , model} from 'mongoose'

const TodoSchema = new Schema({
    name : {
        type : String,
        required : true,
        minLength : 8,
        // unique : true
    },
    des : {
        type : String,
        default : "nothing"

    }
}
,
{timestamps : true}
)

const todoModel = model("todo",TodoSchema);

export default todoModel