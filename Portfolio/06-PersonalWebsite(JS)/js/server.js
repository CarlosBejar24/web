console.log("Running the script");
// Función para mostrar el modal con spinner
function showContactModal() {
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('contactForm').style.display = 'none';
    contactModal.show();

    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('contactForm').style.display = 'block';
    }, 500);
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
function addActivity() {
    // Obtén los valores del formulario
    const date = document.getElementById("date").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const activity = document.getElementById("activity").value;
    const place = document.getElementById("place").value;
    const type = document.getElementById("type").value;
    const notes = document.getElementById("notes").value;
    const flag = document.getElementById("flag").value;
    const freebusy = document.getElementById("freebusy").checked ? "Busy" : "Free";

    // Verifica que todos los campos requeridos estén llenos
    if (!date || !start || !end || !activity || !place) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Crea una nueva fila para la tabla
    const table = document.getElementById("scheduleTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Agrega celdas a la fila con los valores
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${start}</td>
        <td>${end}</td>
        <td>${activity}</td>
        <td>${place}</td>
        <td>${type}</td>
        <td>${notes}</td>
        <td><span style="background-color: ${flag}; padding: 5px; border-radius: 3px;"></span></td>
        <td>${freebusy}</td>
    `;

    // Limpia el formulario después de agregar la actividad
    document.getElementById("activityForm").reset();
}
