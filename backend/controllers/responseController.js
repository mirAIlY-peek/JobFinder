import Response from "../models/Response.js";
import Job from "../models/Job.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createResponse = async (req, res) => {
    const { jobId, phoneNumber } = req.body;

    if (!jobId || !phoneNumber) {
        throw new BadRequestError("Please provide all values");
    }

    const job = await Job.findById(jobId);
    if (!job) {
        throw new NotFoundError(`No job with id :${jobId}`);
    }

    const response = await Response.create({
        jobId,
        userId: req.user.userId,
        phoneNumber,
    });

    res.status(StatusCodes.CREATED).json({ response });
};

const getResponses = async (req, res) => {
    const responses = await Response.find().populate('jobId userId');
    res.status(StatusCodes.OK).json({ responses });
};

export { createResponse, getResponses };
