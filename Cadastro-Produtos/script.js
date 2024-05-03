const buttonSave = document.querySelector("#Save")

const productName = document.querySelector("#productName")
const productValue = document.querySelector("#productValue")

const productsRegister = []

buttonSave.addEventListener("click",()=>{
    

     
    productsRegister.push(
    {
        name: productName.value,
        value: Number(productValue.value)
    })

    let mainTable = document.querySelector("div.main-table")

    let mainTableContent = document.createElement("div")
    
    mainTableContent.classList.add("main-table-content")
    
    mainTable.appendChild(mainTableContent)

    let howMuchTableContent = document.querySelectorAll(".main-table-content").length   
    
    for(let i = 0; i < 4; i++){

        var item = document.createElement("div")
        item.classList.add("item")
        
        mainTableContent.appendChild(item)
         
    }   
    
    productsRegister.forEach(register => {
        let itemsAll = mainTableContent.querySelectorAll(".item");

        itemsAll[0].innerHTML = howMuchTableContent
        itemsAll[1].innerHTML = register.name 
        itemsAll[2].innerHTML = `U$${register.value}`
        itemsAll[3].innerHTML = `   ` 
    });
    console.log(productsRegister)

    // test

    let buttonTableActionsTrash = document.querySelectorAll(".ActionTrash");

    buttonTableActionsTrash.forEach(trashIcon => {
        trashIcon.addEventListener("click", () => {
            const indexToRemove = parseInt(trashIcon.dataset.index);
            productsRegister.splice(indexToRemove, 1);
            updateTable();
        });
    });
        

function updateTable() {
    const tableContent = document.querySelector(".main-table");
    tableContent.innerHTML = ""; // Limpa o conteúdo da tabela

    const tableTitle = document.createElement("div");
    tableTitle.classList.add("main-table-title");
    const titleItems = ["ID", "Product", "Value", "Actions"];
    titleItems.forEach(title => {
        const titleItem = document.createElement("div");
        titleItem.classList.add("item");
        titleItem.textContent = title;
        tableTitle.appendChild(titleItem);
    });
    tableContent.appendChild(tableTitle);

    productsRegister.forEach((product, index) => {
        const row = document.createElement("div");
        row.classList.add("main-table-content");

        const idItem = document.createElement("div");
        idItem.classList.add("item");
        idItem.textContent = index + 1;
        row.appendChild(idItem);

        const nameItem = document.createElement("div");
        nameItem.classList.add("item");
        nameItem.textContent = product.name;
        row.appendChild(nameItem);

        const valueItem = document.createElement("div");
        valueItem.classList.add("item");
        valueItem.textContent = `U$${product.value}`;
        row.appendChild(valueItem);

        const actionsItem = document.createElement("div");
        actionsItem.classList.add("item");
        actionsItem.innerHTML = `<img src="/Cadastro-Produtos/images/edit.png" class="ActionEdit"><img src="/Cadastro-Produtos/images/trash.png" class="ActionTrash">`;
        row.appendChild(actionsItem);

        tableContent.appendChild(row);
    });
}
        








})

const buttonCancel = document.querySelector("#Cancel")

buttonCancel.addEventListener("click", ()=>{
    productName.value = ""
    productValue.value = ""
})


// const buttonTableActionsEdit = document.querySelectorAll(".ActionEdit")

// buttonTableActionsEdit.addEventListener("click", ()=>{

// })











