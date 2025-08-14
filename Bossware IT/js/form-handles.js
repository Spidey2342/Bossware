document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
           
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
           
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
});

const dropdown = document.getElementById("hardwareDropdown");
const selectBox = dropdown.querySelector(".select-box");
const optionsContainer = dropdown.querySelector(".options-container");
const checkboxes = optionsContainer.querySelectorAll("input[type=checkbox]");
const selectedText = document.getElementById("selectedText");

selectBox.addEventListener("click", () => {
  optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
});

checkboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    let selected = [];
    checkboxes.forEach(chk => {
      if (chk.checked) selected.push(chk.value);
    });
    selectedText.textContent = selected.length ? selected.join(", ") : "Select Hardware Fault(s)";
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    optionsContainer.style.display = "none";
  }
});


const dropdown1 = document.getElementById("hardwareDropdown1");
const selectBox1 = dropdown1.querySelector(".select-box1");
const optionsContainer1 = dropdown1.querySelector(".options-container1");
const checkboxes1 = optionsContainer1.querySelectorAll("input[type=checkbox]");
const selectedText1 = document.getElementById("selectedText1");

selectBox1.addEventListener("click", () => {
  optionsContainer1.style.display = optionsContainer1.style.display === "block" ? "none" : "block";
});

checkboxes1.forEach(cb => {
  cb.addEventListener("change", () => {
    let selected1 = [];
    checkboxes1.forEach(chk1 => {
      if (chk1.checked) selected1.push(chk1.value);
    });
    selectedText1.textContent = selected1.length ? selected1.join(", ") : "Select Hardware Fault(s)";
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown1.contains(e.target)) {
    optionsContainer1.style.display = "none";
  }
});


const dropdown2 = document.getElementById("hardwareDropdown2");
const selectBox2 = dropdown2.querySelector(".select-box2");
const optionsContainer2 = dropdown2.querySelector(".options-container2");
const checkboxes2 = optionsContainer2.querySelectorAll("input[type=checkbox]");
const selectedText2 = document.getElementById("selectedText2");

selectBox2.addEventListener("click", () => {
  optionsContainer2.style.display = optionsContainer2.style.display === "block" ? "none" : "block";
});

checkboxes2.forEach(cb => {
  cb.addEventListener("change", () => {
    let selected2 = [];
    checkboxes2.forEach(chk2 => {
      if (chk2.checked) selected2.push(chk1.value);
    });
    selectedText2.textContent = selected2.length ? selected2.join(", ") : "Select Hardware Fault(s)";
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown2.contains(e.target)) {
    optionsContainer2.style.display = "none";
  }
});


//This belongs to individual request

document.addEventListener("DOMContentLoaded", function () {
  const devicePrices = {
    Laptop: 20,
    Desktop: 25,
    Tablet: 15,
    Smartphone: 10,
    Printer: 30
  };
  
const brandPrices = {
  apple: 30,
  dell: 15,
  hp: 12,
  lenovo: 10,
  sumsung: 18,
  microsoft: 20,
  asus:34,
  acer:22,
  lg:33,
  alienware:42,
  msi:50,
  razer:33,
  originpc: 22,
  cyberpowerpc:10,
  ibuypower:34,
  fujitsu:32,
  toshiba:85,
  panasonic:32,
  nec:54,
  hitachi:67,
  vaio:22,
  system76:56,
  zotac:32,
  eurocom:21,
  boxx:98,
  chuwi:11,
  clevo:54,
  gigabyte:23,
  emachines:76,
  compaq:45,
  gateway:78,
  ibm:45,
  packardbell:90,

};

  const deviceSelect = document.getElementById("device-type");
  const brandSelect = document.getElementById("device-brand");

  const deviceFeeField = document.querySelector(".Device-fee");
  const brandFeeField = document.querySelector(".Brand-fee");
  const serviceFeeField = document.querySelector(".Service-fee");
  const taxFeeField = document.querySelector(".Tax-fee");
  const totalField = document.querySelector(".Total-fee");

    function calculateTotal() {
    const selectedDevice = deviceSelect.value;
    const selectedBrand = brandSelect.value;

    const deviceFee = devicePrices[selectedDevice] || 0;
    const brandFee = brandPrices[selectedBrand] || 0;
    const serviceFee = parseFloat(serviceFeeField.textContent.replace("GHs", "")) || 0;
    const taxFee = parseFloat(taxFeeField.textContent.replace("GHs", "")) || 0;

    const total = deviceFee + brandFee + serviceFee + taxFee;

    deviceFeeField.textContent = `GHs${deviceFee.toFixed(2)}`;
    brandFeeField.textContent = `GHs${brandFee.toFixed(2)}`;
    totalField.textContent = `GHs${total.toFixed(2)}`;
  }

  deviceSelect.addEventListener("change", calculateTotal);
  brandSelect.addEventListener("change", calculateTotal);

  // Run once on load
  calculateTotal();
});


//belongs 
document.addEventListener("DOMContentLoaded", function () {
  const devicePrices1 = {
    Laptops: 20,
    Desktops: 25,
    Tablets: 15,
    Smartphones: 10,
    Printers: 30
  };
  
const brandPrices1 = {
  Apples: 30,
  Dells: 15,
  HPs: 12,
  Lenovos: 10,
  Sumsungs: 18,
  Microsofts: 20
};

  const deviceSelect1 = document.getElementById("device-types");
  const brandSelect1 = document.getElementById("device-brands");

  const deviceFeeField1 = document.querySelector(".Device-fees");
  const brandFeeField1 = document.querySelector(".Brand-fees");
  const serviceFeeField1 = document.querySelector(".Service-fees");
  const taxFeeField1 = document.querySelector(".Tax-fees");
  const totalField1 = document.querySelector(".Total-fees");

    function calculateTotal1() {
    const selectedDevice1 = deviceSelect1.value;
    const selectedBrand1 = brandSelect1.value;

    const deviceFee1 = devicePrices1[selectedDevice1] || 0;
    const brandFee1 = brandPrices1[selectedBrand1] || 0;
    const serviceFee1 = parseFloat(serviceFeeField1.textContent.replace("GHs", "")) || 0;
    const taxFee1 = parseFloat(taxFeeField1.textContent.replace("GHs", "")) || 0;

    const total1 = deviceFee1 + brandFee1 + serviceFee1 + taxFee1;

    deviceFeeField1.textContent = `GHs${deviceFee1.toFixed(2)}`;
    brandFeeField1.textContent = `GHs${brandFee1.toFixed(2)}`;
    totalField1.textContent = `GHs${total1.toFixed(2)}`;
  }

  deviceSelect1.addEventListener("change", calculateTotal1);
  brandSelect1.addEventListener("change", calculateTotal1);

  // Run once on load
  calculateTotal1();
});



document.addEventListener("DOMContentLoaded", function () {
  const devicePrices11 = {
    Laptops1: 20,
    Desktops1: 25,
    Tablets1: 15,
    Smartphones1: 10,
    Printers1: 30
  };
  
const brandPrices11 = {
  Apples1: 30,
  Dells1: 15,
  HPs1: 12,
  Lenovos1: 10,
  Sumsungs1: 18,
  Microsofts1: 20
};

  const deviceSelect11 = document.getElementById("device-types1");
  const brandSelect11 = document.getElementById("device-brands1");

  const deviceFeeField11 = document.querySelector(".Device-fees1");
  const brandFeeField11 = document.querySelector(".Brand-fees1");
  const serviceFeeField11 = document.querySelector(".Service-fees1");
  const taxFeeField11 = document.querySelector(".Tax-fees1");
  const totalField11 = document.querySelector(".Total-fees1");

    function calculateTotal11() {
    const selectedDevice11 = deviceSelect11.value;
    const selectedBrand11 = brandSelect11.value;

    const deviceFee11 = devicePrices11[selectedDevice11] || 0;
    const brandFee11 = brandPrices11[selectedBrand11] || 0;
    const serviceFee11 = parseFloat(serviceFeeField11.textContent.replace("GHs", "")) || 0;
    const taxFee11 = parseFloat(taxFeeField11.textContent.replace("GHs", "")) || 0;

    const total11 = deviceFee11 + brandFee11 + serviceFee11 + taxFee11;

    deviceFeeField11.textContent = `GHs${deviceFee11.toFixed(2)}`;
    brandFeeField11.textContent = `GHs${brandFee11.toFixed(2)}`;
    totalField11.textContent = `GHs${total11.toFixed(2)}`;
  }

  deviceSelect11.addEventListener("change", calculateTotal11);
  brandSelect11.addEventListener("change", calculateTotal11);

  // Run once on load
  calculateTotal11();
});
