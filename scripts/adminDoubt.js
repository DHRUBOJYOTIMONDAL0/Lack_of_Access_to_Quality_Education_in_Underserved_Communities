function confirmDeletion() {
    if (confirm("Are you sure you want to delete this entry?")) {
        alert("Entry deleted!");
        // Here you can add logic to remove the entry from the display
    } else {
        alert("Deletion canceled.");
    }
}