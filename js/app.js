const loadPhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data)
  showData(data.data);
};

const showData = (phones) => {
  const parentDiv = document.getElementById("parent-div");
  parentDiv.textContent = '';
  phones = phones.slice(0,12);
  if (phones.length == 0) {
    document.getElementById('warning').classList.remove('d-none');
  } else {
    document.getElementById('warning').classList.add('d-none');
  }
  phones.forEach((phone) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
        
        <div class="card">
            <img class="p-3 mx-auto" width="250px" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                 lead-in to additional
                 content. This content is a little bit longer.</p>
            </div>
        </div>
        
        `;
    parentDiv.appendChild(newDiv);
  });
  toggle(false);
}

const searchPhone = () => {

  toggle(true);
  const searchedElement = document.getElementById('search-input');
  const searchedText = searchedElement.value;
  loadPhone(searchedText);
  searchedElement.value = '';


}

const toggle = isLoading => {

  if (isLoading) {
    document.getElementById('loading').classList.remove('d-none');
  }
  else {
    document.getElementById('loading').classList.add('d-none');
  }

}

loadPhone('iphone');
