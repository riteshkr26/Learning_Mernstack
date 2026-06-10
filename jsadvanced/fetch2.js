const userContainer = document.getElementById('userContainer');
const fetchBtn = document.getElementById('fetchBtn');
const sendBtn = document.getElementById('sendBtn');

// ==========================================
// 1. HTTP GET REQUEST (Fetching Data)
// ==========================================
async function getRandomUser() {
    const url = 'https://randomuser.me/api/';
    try {
        userContainer.innerHTML = '<p>Loading user data...</p>';
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        const user = data.results[0];
        
        // Render to the screen
        userContainer.innerHTML = `
            <div class="card">
                <img src="${user.picture.large}" alt="User Avatar">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p style="color: #9ca3af; font-size: 14px;">${user.email}</p>
            </div>
        `;
    } catch (error) {
        userContainer.innerHTML = `<p style="color: #ef4444;">Error: ${error.message}</p>`;
    }
}

// ==========================================
// 2. HTTP POST REQUEST (Sending Data)
// ==========================================
async function submitUserData() {
    const targetUrl = 'https://jsonplaceholder.typicode.com/posts';
    const fakeUserData = {
        name: "Sheryians Student",
        email: "test@developer.com"
    };

    try {
        const response = await fetch(targetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fakeUserData) // Stringify objects for HTTP pipelines
        });

        if (!response.ok) throw new Error("Post request failed.");
        const confirmation = await response.json();
        
        alert(`HTTP POST Success!\nData stringified and sent.\nServer Response ID: ${confirmation.id}`);
    } catch (error) {
        alert(`Post Error: ${error.message}`);
    }
}

// Link event triggers
fetchBtn.addEventListener('click', getRandomUser);
sendBtn.addEventListener('click', submitUserData);

// Initial load
getRandomUser();