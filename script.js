// Backup script for future improvements
// Currently adds a visual toggle effect when a checkbox is clicked.

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-check");

    checkboxes.forEach(checkbox => {
        // Restore state from a previous session (optional future improvement)
        // You could use localStorage here to save the checklist progress
        
        checkbox.addEventListener("change", function() {
            const card = this.closest(".test-card");
            
            if (this.checked) {
                card.classList.add("completed");
            } else {
                card.classList.remove("completed");
            }
        });
    });
});

/* 
FUTURE IMPROVEMENTS IDEAS:
1. Add localStorage logic so a refresh doesn't wipe the checkboxes.
2. Add a progress bar (e.g., "12/16 checks complete").
3. Add a dark mode toggle.
*/