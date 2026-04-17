let list = [
    { Tensach: "ten", soluong: 1, gia: 1000 },
    { Tensach: "ten2", soluong: 2, gia: 12000 }
];

let tbody = document.getElementById("list");
console.log(window.alert("hihi"))
function render() {
    tbody.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        tbody.innerHTML += `
            <tr>
                     <td>${i + 1}</td>
                      <td>${list[i].Tensach}</td>
                     <td>${list[i].soluong}</td>
                     <td>${list[i].gia}</td>
                     <td>          
                            <label class="checkbox-container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                            </label>
                     </td>
            </tr>
        `;
    }
}

render();