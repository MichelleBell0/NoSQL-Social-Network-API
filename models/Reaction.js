const { Schema, Types } = require('mongoose');

function formatDate(date) {
    return date.toLocaleString();
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
);

module.exports = assignmentSchema;