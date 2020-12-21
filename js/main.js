var modal = document.getElementById("serviceModal");

var closeModal = document.getElementsByClassName("close")[0];

function launchService(service) {
    modal.style.display = "flex";
    var target = document.getElementById('serviceMessage');
    var messageElement = document.createElement('div');
    switch (service) {
        case 'epargne':
            messageElement = '<p>L’accès à <span>l’épargne</span> est actuellement indisponible.</p>'
            break;
        case 'pret':
            messageElement = '<p>L’accès à <span>votre prêt</span> est actuellement indisponible.</p>'
            break;
        default:
            messageElement = '<p>Ce service vous permet de consulter votre service Orange Bank depuis votre application Orange Money.</p>'
            break;
    }

    target.innerHTML = messageElement;
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}