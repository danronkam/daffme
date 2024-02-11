// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/resumeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Mongoose schema
const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  summary: String,
  experiences: [{
    title: String,
    company: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  education: [{
    degree: String,
    institution: String,
    startDate: Date,
    endDate: Date
  }],
  skills: [String]
});

// Define Mongoose model
const Resume = mongoose.model('Resume', resumeSchema);

// Routes
// GET all resumes
app.get('/resumes', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new resume
app.post('/resumes', async (req, res) => {
  const resume = new Resume(req.body);
  try {
    const newResume = await resume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a specific resume
app.get('/resumes/:id', getResume, (req, res) => {
  res.json(res.resume);
});

// Middleware function to get a specific resume by ID
async function getResume(req, res, next) {
  let resume;
  try {
    resume = await Resume.findById(req.params.id);
    if (resume == null) {
      return res.status(404).json({ message: 'Resume not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.resume = resume;
  next();
}

// Update a specific resume
app.patch('/resumes/:id', getResume, async (req, res) => {
  if (req.body.name != null) {
    res.resume.name = req.body.name;
  }
  if (req.body.email != null) {
    res.resume.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.resume.phone = req.body.phone;
  }
  if (req.body.summary != null) {
    res.resume.summary = req.body.summary;
  }
  if (req.body.experiences != null) {
    res.resume.experiences = req.body.experiences;
  }
  if (req.body.education != null) {
    res.resume.education = req.body.education;
  }
  if (req.body.skills != null) {
    res.resume.skills = req.body.skills;
  }
  try {
    const updatedResume = await res.resume.save();
    res.json(updatedResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a specific resume
app.delete('/resumes/:id', getResume, async (req, res) => {
  try {
    await res.resume.remove();
    res.json({ message: 'Resume deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

<button onclick="deleteResume('${resume._id}')">Delete</button>

<script>
  // Function to delete a resume
  async function deleteResume(resumeId) {
    if (confirm('Are you sure you want to delete this resume?')) {
      try {
        const response = await fetch(`/resumes/${resumeId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          // Resume deleted successfully, fetch resumes again
          await fetchAndDisplayResumes();
        } else {
          console.error('Failed to delete resume');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
</script>
