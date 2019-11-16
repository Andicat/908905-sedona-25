var search		= document.querySelector(".search-button");
var searchForm	= document.querySelector(".booking-form");
var book		= searchForm.querySelector(".booking-button-search");
var DateIn		= searchForm.querySelector("[name=DateIn]");
var DateOut		= searchForm.querySelector("[name=DateOut]");
var AmountA		= searchForm.querySelector("[name=AmountA]");
var AmountC		= searchForm.querySelector("[name=AmountC]");
var isStorageSupport = true;
var storageDateIn = "";
var storageDateOut = "";
var storageAmountA = "";
var storageAmountC = "";

//проверка работы хранилища  
try {
	storageAmountA 	= localStorage.getItem("AmountA");
	storageAmountC 	= localStorage.getItem("AmountC");
} catch (err) {
	isStorageSupport = false;
}

//вызов формы поиска по ссылке
search.addEventListener("click", function (evt) {
	evt.preventDefault();
	//если форма скрыта
	if (!searchForm.classList.contains("booking-form-show")) {
		searchForm.classList.remove("booking-form-hide");	
		searchForm.classList.add("booking-form-show");
	} else {
		searchForm.classList.remove("booking-form-show");
		searchForm.classList.remove("booking-form-error");
		searchForm.classList.add("booking-form-hide");
		if (storageAmountA) {AmountA.value = storageAmountA;};
		if (storageAmountC) {AmountC.value = storageAmountC;};
	}
});
			
//проверка полей
searchForm.addEventListener("submit", function (evt) {
	if (!DateIn.value || !DateOut.value || !AmountA.value)
		{
			evt.preventDefault();
			console.log("Нужно выбрать даты и указать количество взрослых");
			searchForm.classList.remove("booking-form-error");
			searchForm.offsetWidth = searchForm.offsetWidth;
			searchForm.classList.add("booking-form-error");
		}
	else
		{
			if (isStorageSupport) {
				localStorage.setItem("AmountA", AmountA.value);
				localStorage.setItem("AmountC", AmountC.value);
			}
		}
});