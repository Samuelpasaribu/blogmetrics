const previewCode = () => {
    const url = document.getElementById('url').value;
    const result = document.getElementById('result');
    const loading = document.getElementById('loading');

    if (url === "") {
        alert("Silakan masukkan URL terlebih dahulu.");
    } else {
        loading.style.display = "block";
        result.style.display = "none";

        const script1 = document.createElement('script');
        script1.src = `${url}/feeds/posts/default?alt=json-in-script&max-results=0&callback=countPosts`;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = `${url}/feeds/comments/default?alt=json-in-script&max-results=0&callback=countComments`;
        document.body.appendChild(script2);
    }
}

const countPosts = (data) => {
    const postCount = parseInt(data.feed.openSearch$totalResults.$t, 10);
    const result = document.getElementById('result');
    const loading = document.getElementById('loading');

    result.style.display = "block";
    loading.style.display = "none";

    result.innerHTML = `Jumlah Postingan: ${postCount}<br>`;
}

const countComments = (data) => {
    const commentCount = parseInt(data.feed.openSearch$totalResults.$t, 10);
    const result = document.getElementById('result');
    result.innerHTML += `Jumlah Komentar: ${commentCount}`;
}

const clearCode = () => {
    document.getElementById('url').value = '';
    document.getElementById('result').innerHTML = '';
}

// Cek apakah alamat URL saat ini sama dengan tujuan pengalihan
if (window.location.href !== 'https://www.samuelpasaribu.com') {
  // Buat peringatan dengan durasi notifikasi yang dapat diatur
  function showAlert(message, duration) {
    var alertBox = document.createElement('div');
    alertBox.setAttribute('id', 'alertBox');
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.backgroundColor = '#f2f2f2';
    alertBox.style.border = '1px solid #ddd';
    alertBox.style.borderRadius = '5px';
    alertBox.style.padding = '20px';
    alertBox.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    alertBox.style.zIndex = '9999';
    alertBox.innerHTML = message;
    document.body.appendChild(alertBox);
    
    // Hilangkan peringatan setelah durasi tertentu
    setTimeout(function() {
      document.body.removeChild(alertBox);
      redirectToPage();
    }, duration);
  }

  // Alihkan ke halaman yang dituju
  function redirectToPage() {
    window.location.href = 'https://www.samuelpasaribu.com';
  }

  // Panggil fungsi showAlert dengan pesan dan durasi notifikasi
  showAlert('Anda akan diarahkan ke https://www.samuelpasaribu.com dalam 10 detik.', 10000);
} else {
  // Tampilkan peringatan jika alamat URL yang dituju adalah alamat yang benar
  function showWarning(message) {
    var warningBox = document.createElement('div');
    warningBox.setAttribute('id', 'warningBox');
    warningBox.style.position = 'fixed';
    warningBox.style.top = '50px';
    warningBox.style.left = '50%';
    warningBox.style.transform = 'translateX(-50%)';
    warningBox.style.backgroundColor = '#f2f2f2';
    warningBox.style.border = '1px solid #ddd';
    warningBox.style.borderRadius = '5px';
    warningBox.style.padding = '20px';
    warningBox.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    warningBox.style.zIndex = '9999';
    warningBox.innerHTML = message;
    document.body.appendChild(warningBox);
  }

  // Panggil fungsi showWarning dengan pesan yang sesuai
  showWarning('Anda telah berada di halaman yang dituju.');
}

  
