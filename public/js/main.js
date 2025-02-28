document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passportForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            passportType: document.getElementById('passportType').value,
            tcNo: document.getElementById('tcNo').value,
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            title: document.getElementById('title').value,
            position: document.getElementById('position').value,
            institutionId: document.getElementById('institutionId').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            registryOffice: document.getElementById('registryOffice').value,
            childCount: document.getElementById('childCount').value
        };

        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Başvurunuz başarıyla kaydedildi. Başvuru numaranız: ' + data.applicationId);
                form.reset();
            } else {
                alert('Başvuru kaydedilirken bir hata oluştu: ' + data.error);
            }
        } catch (error) {
            console.error('Başvuru gönderme hatası:', error);
            alert('Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    });

    // TC Kimlik No validasyonu
    document.getElementById('tcNo').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
    });

    // Telefon numarası formatı
    document.getElementById('phone').addEventListener('input', function(e) {
        let number = this.value.replace(/[^0-9]/g, '');
        if (number.length > 10) number = number.slice(0, 10);
        this.value = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    });
}); 