import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide phone number'],
    },
}, { timestamps: true });

export default mongoose.model('Response', ResponseSchema);
