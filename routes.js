<!-- Template for editing a resume -->
<div id="editResumeModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Edit Resume</h2>
    <form id="editResumeForm">
      <!-- Input fields to edit resume data -->
      <label for="editName">Name:</label>
      <input type="text" id="editName" name="name" required><br>
      <!-- Include other fields as needed -->

      <button type="submit">Save Changes</button>
    </form>
  </div>
</div>

<script>
  // Function to open edit modal and populate with resume data
  function openEditModal(resume) {
    const editModal = document.getElementById('editResumeModal');
    editModal.style.display = 'block';

    // Populate form fields with resume data
    document.getElementById('editName').value = resume.name;
    // Populate other fields similarly

    // Event listener for form submission
    document.getElementById('editResumeForm').addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(event.target);
      const updatedResumeData = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(`/resumes/${resume._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedResumeData)
        });

        if (response.ok) {
          // Resume updated successfully, close modal and fetch resumes again
          editModal.style.display = 'none';
          await fetchAndDisplayResumes();
        } else {
          console.error('Failed to update resume');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }

  // Close the edit modal when the user clicks on the close button
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('editResumeModal').style.display = 'none';
  });
</script>
