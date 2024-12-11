document.addEventListener("DOMContentLoaded", () => {
    // Function to load content from external HTML file
    function loadContent(page) {
        const contentDiv = document.getElementById("content");

        if (page === "page1") {
            loadContentFromFile("page1.html");
        } else if (page === "page2") {
            loadContentFromFile("page2.html");
        }
    }

    // Load content from external HTML file using fetch
    function loadContentFromFile(fileName) {
        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                const contentDiv = document.getElementById("content");
                contentDiv.innerHTML = data;

                // Add event listeners after loading the content
                if (fileName === "page1.html") {
                    let goToPage2= document.getElementById("goToPage2");
                    goToPage2.addEventListener("click", () => {
                        // Push state for Page 2
                        history.pushState({ page: "page2" }, "Page 2", "page2.html");
                        loadContent("page2");
                    });
                } else if (fileName === "page2.html") {
                    let back =   document.getElementById("back");
                    back.addEventListener("click", () => {
                        // Push state for Page 1
                        history.pushState({ page: "page1" }, "Page 1", "page1.html");
                        loadContent("page1");
                    });
                }
            })
          /*  .catch(error => {
                console.error("Error loading content:", error);
            }); */
    }

    // Listen for popstate event to handle back/forward navigation
    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.page === "page2") {
            history.pushState({ page: "page2" }, "Page 2", "page2.html");
            loadContent("page2");
        } else {
            history.pushState({ page: "page1" }, "Page 1", "page1.html");
            loadContent("page1");
        }
    });

    // Initialize the app by checking the current URL
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "page2.html") {
        history.pushState({ page: "page1" }, "Page 1", "page1.html");
        loadContent("page2");
    } else {
        history.pushState({ page: "page2" }, "Page 2", "page2.html");
        loadContent("page1");
    }
});
