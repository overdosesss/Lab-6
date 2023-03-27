const adminTool = document.getElementById("admin");

adminTool.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
})