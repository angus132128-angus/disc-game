function startGame() {

    const name =
        document.getElementById("name").value.trim();

    const department =
        document.getElementById("department").value.trim();


    if (name === "") {

        alert("กรุณากรอกชื่อของคุณ");

        document.getElementById("name").focus();

        return;
    }


    if (department === "") {

        alert("กรุณากรอกหน่วย / แผนก");

        document
            .getElementById("department")
            .focus();

        return;
    }


    localStorage.setItem(
        "discName",
        name
    );


    localStorage.setItem(
        "discDepartment",
        department
    );


    window.location.href =
        "quiz.html";

}