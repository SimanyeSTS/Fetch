function fetchData() {
    let container = document.querySelector('[data-container]')
    fetch("https://simanyests.github.io/onlineStore/data/")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.result.forEach((product) => {
                container.innerHTML += `
                    <div class='container'>
                    <table>
                        <th><h2>${product.productName}</h2></th>
                        <th><h4>
                            ${product.category}
                        </h4>
                        </th>
                        <td><img src='${product.img_url}' loading='lazy'>
                        </td>
                       <td><p>
                            <span>Description: ${product.description}
                            </span>
                        </p></td>
                       <td><p>
                            <span>Price: R${product.amount}
                            </span>
                        </p></td> 
                        <div class='button-wrapper'>
                            <button>Add to cart</button>
                        </div>
                        </table>
                    </div>
                `
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
fetchData() 

async function fetchData() {
    let res = await fetch("https://codjoelmayer.github.io/onlineStore/data")
    //Destructuring
    let {results} = await res.json()
    console.log(results)
}
fetchData()


//Destructuring
let [firstName, lastName, age] = ["Simanye", "Somdaka", 20]
console.log(firstName, lastName, age)