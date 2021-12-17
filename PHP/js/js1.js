const jsTest = () => {

    let inp1 = document.querySelector("input#inp1").value;
    let inp2 = document.querySelector("input#inp2").value;
    let d = document.querySelector("p#result");
    let url = "../phptest.php";
    let formData = new FormData();
    formData.append("num1", inp1);
    formData.append("num2", inp2);

    let options = {
        method: "POST",
        mode: "cors",
        body: formData
    }

    fetch(url, options)
        .then((response) => response.json())
            .then((response) => d.innerHTML = response);

}