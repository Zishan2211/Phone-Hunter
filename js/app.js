const loadaPhone = async (searchText,datalimet) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data,datalimet)
}

const displayPhone = (phone , datalimet) => {
    const PhonesContainer = document.getElementById('Phone-Container');
    PhonesContainer.innerText='';
    
    const Showallbtn = document.getElementById('show-all')
    if(datalimet && phone.length > 10){
        phone = phone.slice(0,5)
        Showallbtn.classList.remove('d-none');
    }
    else{
        Showallbtn.classList.add('d-none')
    }

    const noPhone = document.getElementById('no-Phone-Found');
    if(phone.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }

    phone.forEach(phone => {
        const PhoneDiv = document.createElement('div');
        PhoneDiv.classList.add('col');
        PhoneDiv.innerHTML = `
        <div class="card p-5">
            <img src="${phone.image}" class=" card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to         additional content. This content is a little bit longer.
                </p>
                <button hrf="#" class="btn btn-primary">Show Details</button>
            </div>
         </div>
        `;
        PhonesContainer.appendChild(PhoneDiv)
    });
    // stop spineer loging
    toggolSpineer(false)

}

const ProssceSearch = (datalimet) => {
    toggolSpineer(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadaPhone(searchText,datalimet);
}

document.getElementById('btn-search').addEventListener('click',function(){
    ProssceSearch(10)
})

document.getElementById('btn-show-all').addEventListener('click',function(){
    ProssceSearch()
})

const toggolSpineer = isLoding => {
    const loderSection = document.getElementById('loder');
    if(isLoding){
        loderSection.classList.remove('d-none');
    }
    else{
        loderSection.classList.add('d-none')
    }
}



// loadaPhone()