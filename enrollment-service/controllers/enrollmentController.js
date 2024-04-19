const Enrollment = require('../models/enrollment');

const enrollmentController = {
    createEnrollment: async (req, res) => {
        try {
            const enrollment = new Enrollment(req.body);
            await enrollment.save();
            res.status(201).json(enrollment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getEnrollments: async (req, res) => {
        try {
            const enrollments = await Enrollment.find();
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getEnrollment: async (req, res) => {
        try {
            const enrollment = await Enrollment.findById(req.params.id);
            if (enrollment == null) {
                return res.status(404).json({ message: 'Cannot find enrollment' });
            }
            res.json(enrollment);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateEnrollment: async (req, res) => {
        try {
            const updatedEnrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedEnrollment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteEnrollment: async (req, res) => {
        try {
            await Enrollment.findByIdAndDelete(req.params.id);
            res.json({ message: 'Deleted Enrollment' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = enrollmentController;