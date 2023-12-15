function showModal(originalPrice, productName) {
  // Obter elementos do DOM pelo ID
  const modal = document.getElementById("myModal");
  const discountMessage = document.getElementById("discountMessage");
  const discountSelect = document.getElementById("discountSelect");
  const finalPrice = document.getElementById("finalPrice");

  discountMessage.textContent = `Você pode aplicar um desconto no produto ${productName}.`;

  discountSelect.value = "0";

  modal.style.display = "block";

  discountSelect.addEventListener("change", function () {
    updateFinalPrice(originalPrice, parseInt(discountSelect.value));
  });

  updateFinalPrice(originalPrice, parseInt(discountSelect.value));
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function updateFinalPrice(originalPrice, discount) {
  const finalPrice = document.getElementById("finalPrice");
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;
  finalPrice.textContent = `Preço Final: R$ ${discountedPrice.toFixed(2)}`;
}

function applyDiscount() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
