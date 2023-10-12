const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones,isShowAll)
    // console.log(phones)
}

const displayPhone = (phones,isShowAll)=> {
    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.textContent = ''
    const showAllContainer = document.getElementById("show-all-container")
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove("hidden")
    }
    else{
        showAllContainer.classList.add("hidden")
    }
    console.log(isShowAll)
    if(!isShowAll){
        phones = phones.slice(0,12)
    }

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
    loadDots(false)
}

const searchHandle = (isShowAll) =>{
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    loadDots(true)
    loadPhone(searchText,isShowAll)
}

const loadDots = (isLoading) =>{
    const loadingDots = document.getElementById("loading-dots")
    if(isLoading){
        loadingDots.classList.remove("hidden")
    }
    else{
        loadingDots.classList.add('hidden')
    }

}

const showAll = ()=>{
    searchHandle(true)
}

// loadPhone()