function openModal(modalId) {
    // Assuming there is an element with the provided modalId
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal() {
    // This will close all modals if there are multiple, not just one
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.style.display = "none";
    });
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "current"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("current");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var currentTab = document.getElementById(tabName);
    if (currentTab) {
        currentTab.style.display = "block";
    }
    evt.currentTarget.classList.add("current");
}

// It's also good practice to ensure that your script does not try to bind events
// until the DOM is fully loaded. This is how you would do it:
document.addEventListener('DOMContentLoaded', function() {
    var factorTiles = document.querySelectorAll('.factor-tile');
    factorTiles.forEach(function(tile) {
        tile.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });

    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', closeModal);
    });
});
