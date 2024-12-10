document.addEventListener("DOMContentLoaded", function () {
    fetch("db/companies.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#companyTable tbody");
            data.forEach(company => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${company.logo}" alt="${company.name} Logo" width="50"></td>
                    <td>${company.name}</td>
                    <td><img src="${company.flag}" alt="Bandeira de ${company.location}" width="30"></td>
                    <td>${company.sector}</td>
                    <td><span class="status-circle ${company.status === "active" ? "green" : "red"}"></span></td>
                    <td><a href="https://${company.contact}" target="_blank">Visitar</a></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});
