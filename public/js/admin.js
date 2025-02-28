document.addEventListener('DOMContentLoaded', () => {
    loadApplications();
});

async function loadApplications() {
    try {
        const response = await fetch('/api/applications');
        const applications = await response.json();
        
        const tableBody = document.getElementById('applicationList');
        tableBody.innerHTML = '';
        
        applications.forEach(app => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${app.id}</td>
                <td>${app.name}</td>
                <td>${app.surname}</td>
                <td>${app.status}</td>
                <td>
                    <select onchange="updateStatus(${app.id}, this.value)">
                        <option value="Beklemede" ${app.status === 'Beklemede' ? 'selected' : ''}>Beklemede</option>
                        <option value="Onaylandı" ${app.status === 'Onaylandı' ? 'selected' : ''}>Onaylandı</option>
                        <option value="Reddedildi" ${app.status === 'Reddedildi' ? 'selected' : ''}>Reddedildi</option>
                    </select>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Başvuruları yükleme hatası:', error);
        alert('Başvurular yüklenirken bir hata oluştu.');
    }
}

async function updateStatus(id, status) {
    try {
        const response = await fetch(`/api/applications/${id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (response.ok) {
            alert('Başvuru durumu güncellendi');
            loadApplications();
        } else {
            const data = await response.json();
            alert('Durum güncellenirken bir hata oluştu: ' + data.error);
        }
    } catch (error) {
        console.error('Durum güncelleme hatası:', error);
        alert('Durum güncellenirken bir hata oluştu.');
    }
} 