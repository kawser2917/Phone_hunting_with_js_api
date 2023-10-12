const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones)
    // console.log(phones)
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.textContent = ''
    const showAllContainer = document.getElementById("show-all-container")
    if(phones.length > 12){
        showAllContainer.classList.remove("hidden")
    }
    else{
        showAllContainer.classList.add("hidden")
    }
    phones = phones.slice(0,12)

    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
    })
    loadBtn(false)
}

const searchHandle = () =>{
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    loadBtn(true)
    loadPhone(searchText)
}

const loadBtn = (isLoading) =>{
    const loadingDots = document.getElementById("loading-dots")
    if(isLoading){
        loadingDots.classList.remove("hidden")
    }
    else{
        loadingDots.classList.add('hidden')
    }

}

// loadPhone()