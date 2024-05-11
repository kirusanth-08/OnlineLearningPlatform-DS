const multer = require('multer');
const path = require('path');
const { model } = require('mongoose');
const CourseContent = require('../models/CourseContent');

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Adjust path based on where you want to store the files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf|doc|docx|ppt|pptx|mp4/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only specific file types are allowed!'));
        }
    },
});

// Express middlewares for file upload handling
const multipleUpload = upload.fields([
    { name: 'lecture', maxCount: 1 },
    { name: 'assignment', maxCount: 1 }
]);

const courseContentController = {
    createCourseContent: async (req, res) => {
        try {
            console.log(req.params)
          // Extract uploaded files and other fields from the request
          const { topic, course_id, video } = req.body;
          const lectureFile = req.file && req.file.lecture ? req.file.lecture[0] : null;
          const assignmentFile = req.file && req.file.assignment ? req.file.assignment[0] : null;
      
          // Check for required fields
          if (!topic || !course_id) {
            return res.status(400).json({ error: 'Missing required fields: topic or course_id' });
          }
      
          // Create a new course content document
          const newCourseContent = new CourseContent({
            topic,
            course_id,
            video,
            lecture: lectureFile ? { filename: lectureFile.originalname, path: lectureFile.path } : {},
            assignment: assignmentFile ? { filename: assignmentFile.originalname, path: assignmentFile.path } : {}
          });
      
          // Save to the database
          await newCourseContent.save();
          res.status(201).json({ message: 'Course content created successfully', data: newCourseContent });
        } catch (error) {
          console.error('Error creating course content:', error);
          res.status(500).json({ error: 'Failed to create course content' });
        }
      },

    // updateCourseContent: async (req, res) => {
    //     multipleUpload(req, res, async (uploadError) => {
    //         if (uploadError) {
    //             console.error('File upload error:', uploadError);
    //             return res.status(400).json({ error: 'File upload failed', details: uploadError.message });
    //         }

    //         try {
    //             const contentId = req.params.id;
    //             const { instructor_id, topic, descriptions, course_id, video } = req.body;

    //             let courseContent = await CourseContent.findById(contentId);

    //             if (!courseContent) {
    //                 return res.status(404).json({ error: 'Course content not found' });
    //             }

    //             // Retrieve file paths from request
    //             const lectureFile = req.files['lecture'] ? req.files['lecture'][0].path : courseContent.lecture;
    //             const assignmentFile = req.files['assignment'] ? req.files['assignment'][0].path : courseContent.assignment;

    //             // Update the course content
    //             courseContent.instructor_id = instructor_id;
    //             courseContent.topic = topic;
    //             courseContent.descriptions = descriptions;
    //             courseContent.course_id = course_id;
    //             courseContent.video = video;
    //             courseContent.lecture = lectureFile;
    //             courseContent.assignment = assignmentFile;

    //             await courseContent.save();

    //             res.status(200).json({ message: 'Course content updated successfully', courseContent });
    //         } catch (error) {
    //             console.error('Error updating course content:', error);
    //             res.status(500).json({ error: 'Internal server error' });
    //         }
    //     });
    // },

    viewCourseContent: async (req, res) => {
        try {
            const courseId = req.params.id;
    
            const courseContent = await CourseContent.findOne({course_id: courseId});
             console.log(courseId)
            console.log(courseContent)
            if (!courseContent) {
                return res.status(404).json({ error: 'Course content not found' });
            }
    
            res.status(200).json({ message : courseContent });
        } catch (error) {
            console.error('Error fetching course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deleteCourseContent: async (req, res) => {
        try {
            const contentId = req.params.id;

            const deletedCourseContent = await CourseContent.findByIdAndDelete(contentId);

            if (!deletedCourseContent) {
                return res.status(404).json({ error: 'Course content not found' });
            }

            res.status(200).json({ message: 'Course content deleted successfully', courseContent: deletedCourseContent });
        } catch (error) {
            console.error('Error deleting course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    viewAllCourseContent: async (req, res) => {
        try {
            const courseContent = await CourseContent.find();
            res.json({ content: courseContent });
        } catch (error) {
            console.error('Error fetching course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = courseContentController;