document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const editModal = document.getElementById('editModal');
    const deleteConfirmation = document.getElementById('deleteConfirmation');
    const closeModal = document.querySelectorAll('.modal .close');
    const closeConfirmation = document.querySelector('.confirmation-dialog .close');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    let currentRow; // To track the row being edited or deleted

    // Function to open the edit modal
    function openEditModal() {
        currentRow = this.closest('tr'); // Store the current row
        // Optionally, populate the form with existing data
        document.getElementById('name').value = currentRow.querySelector('td:nth-child(1)').textContent;
        document.getElementById('program').value = currentRow.querySelector('td:nth-child(2)').textContent;
        document.getElementById('contact').value = currentRow.querySelector('td:nth-child(3)').textContent;
        document.getElementById('email').value = currentRow.querySelector('td:nth-child(4)').textContent;
        document.getElementById('college').value = currentRow.querySelector('td:nth-child(5)').textContent;
        document.getElementById('address').value = currentRow.querySelector('td:nth-child(6)').textContent;
        document.getElementById('message').value = currentRow.querySelector('td:nth-child(7)').textContent;

        editModal.style.display = 'block';
    }

    // Function to close the edit modal
    function closeEditModal() {
        editModal.style.display = 'none';
    }

    // Function to open the delete confirmation dialog
    function openDeleteConfirmation() {
        currentRow = this.closest('tr'); // Store the current row
        deleteConfirmation.style.display = 'block';
    }

    // Function to close the delete confirmation dialog
    function closeDeleteConfirmation() {
        deleteConfirmation.style.display = 'none';
    }

    // Function to handle the deletion
    function handleDelete() {
        if (currentRow) {
            currentRow.remove(); // Remove the row from the table
            closeDeleteConfirmation();
        }
    }

    // Event listener for edit buttons
    editButtons.forEach(button => {
        button.addEventListener('click', openEditModal);
    });

    // Event listener for delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', openDeleteConfirmation);
    });

    // Event listeners for closing modals and dialogs
    closeModal.forEach(span => {
        span.addEventListener('click', closeEditModal);
    });
    closeConfirmation.addEventListener('click', closeDeleteConfirmation);
    window.addEventListener('click', (event) => {
        if (event.target === editModal) {
            closeEditModal();
        }
        if (event.target === deleteConfirmation) {
            closeDeleteConfirmation();
        }
    });

    // Handle form submission (e.g., saving changes)
    document.getElementById('editForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Update the row with new data
        if (currentRow) {
            currentRow.querySelector('td:nth-child(1)').textContent = document.getElementById('name').value;
            currentRow.querySelector('td:nth-child(2)').textContent = document.getElementById('program').value;
            currentRow.querySelector('td:nth-child(3)').textContent = document.getElementById('contact').value;
            currentRow.querySelector('td:nth-child(4)').textContent = document.getElementById('email').value;
            currentRow.querySelector('td:nth-child(5)').textContent = document.getElementById('college').value;
            currentRow.querySelector('td:nth-child(6)').textContent = document.getElementById('address').value;
            currentRow.querySelector('td:nth-child(7)').textContent = document.getElementById('message').value;
        }
        closeEditModal();
        alert('Changes saved!');
    });

    // Handle delete confirmation
    confirmDelete.addEventListener('click', handleDelete);
    cancelDelete.addEventListener('click', closeDeleteConfirmation);
});
