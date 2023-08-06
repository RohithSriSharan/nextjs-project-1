import { Schema, model, models } from "mongoose";


const StorySchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title:{
        type: String,
        required:[true, ' Title is required ']
    },
    story:{
        type: String,
        required:[true, ' Story is required ']
    }
})

const Story = models.Story || model('Story',StorySchema);
export default Story;