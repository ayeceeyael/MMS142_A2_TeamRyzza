document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchButton");
    const searchPanel = document.getElementById("searchPanel");
    const closeSearchBtn = document.getElementById("closeSearchButton");
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");
    const searchFeedback = document.getElementById("searchFeedback");

    const signInBtn = document.getElementById("signInButton");
    const signInPanel = document.getElementById("signInPanel");
    const closeSignInBtn = document.getElementById("closeSignInButton");
    const signInForm = document.getElementById("signInForm");
    const signInEmail = document.getElementById("signInEmail");
    const signInFeedback = document.getElementById("signInFeedback");

    const cartBtn = document.getElementById("cartButton");
    const comingSoonLinks = document.querySelectorAll(".coming-soon-link");

    function closeSearchPanel(returnFocus) {
        if (searchPanel && !searchPanel.hidden) {
            searchPanel.hidden = true;
            if (returnFocus && searchBtn) {
                searchBtn.focus();
            }
        }
    }

    function closeSignInPanel(returnFocus) {
        if (signInPanel && !signInPanel.hidden) {
            signInPanel.hidden = true;
            if (returnFocus && signInBtn) {
                signInBtn.focus();
            }
        }
    }

    // open search panel
    if (searchBtn && searchPanel) {
        searchBtn.addEventListener("click", function () {
            closeSignInPanel(false);
            searchPanel.hidden = false;
            if (searchInput) {
                searchInput.focus();
            }
        });
    }

    // close search panel
    if (closeSearchBtn && searchPanel) {
        closeSearchBtn.addEventListener("click", function () {
            closeSearchPanel(true);
        });
    }

    // open sign in panel
    if (signInBtn && signInPanel) {
        signInBtn.addEventListener("click", function () {
            closeSearchPanel(false);
            signInPanel.hidden = false;
            if (signInEmail) {
                signInEmail.focus();
            }
        });
    }

    // close sign in panel
    if (closeSignInBtn && signInPanel) {
        closeSignInBtn.addEventListener("click", function () {
            closeSignInPanel(true);
        });
    }

    // close panels when clicking backdrop
    if (searchPanel) {
        searchPanel.addEventListener("click", function (e) {
            if (e.target === searchPanel) {
                closeSearchPanel(true);
            }
        });
    }

    if (signInPanel) {
        signInPanel.addEventListener("click", function (e) {
            if (e.target === signInPanel) {
                closeSignInPanel(true);
            }
        });
    }

    // close panels when pressing escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeSearchPanel(true);
            closeSignInPanel(true);
        }
    });

    // handle search submit
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (searchFeedback) {
                searchFeedback.textContent = "Looks like that cozy piece isn't in our closet yet.";
            }
        });
    }

    // handle sign in submit
    if (signInForm) {
        signInForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (signInFeedback) {
                signInFeedback.textContent = "Sorry! We don't have a cozy spot saved for that email. No worries, you can jump right in and order without an account";
            }
        });
    }

    if (cartBtn) {
        cartBtn.addEventListener("click", function () {
            alert("Your cart is coming soon!");
        });
    }

    comingSoonLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            alert("Terms of Use will be available soon.");
        });
    });
});

