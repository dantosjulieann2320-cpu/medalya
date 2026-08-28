// EchoHonors - Complete JavaScript

// ==================== CALCULATION LOGIC ====================

function calculatePlacement(playerScore, allScores) {
    const sortedScores = [...allScores].sort((a, b) => b - a);
    return sortedScores.indexOf(playerScore) + 1;
}

function calculatePercentile(placement, totalPlayers) {
    return Math.round(((totalPlayers - placement) / totalPlayers) * 100 * 10) / 10;
}

function getRankSuffix(rank) {
    if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
    if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
    if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
    return 'th';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==================== SAMPLE DATA ====================

const samplePlayers = [
    { id: 'USR001', name: 'Juan Dela Cruz', score: 950, placement: 1, percentile: 99.9, date: '2026-08-28', games: 45 },
    { id: 'USR002', name: 'Maria Santos', score: 920, placement: 2, percentile: 99.8, date: '2026-08-28', games: 38 },
    { id: 'USR003', name: 'Jose Reyes', score: 895, placement: 3, percentile: 99.7, date: '2026-08-28', games: 52 },
    { id: 'USR004', name: 'Ana Garcia', score: 870, placement: 4, percentile: 99.6, date: '2026-08-27', games: 41 },
    { id: 'USR005', name: 'Pedro Mendoza', score: 845, placement: 5, percentile: 99.5, date: '2026-08-27', games: 35 },
    { id: 'USR006', name: 'Sofia Lim', score: 820, placement: 6, percentile: 99.4, date: '2026-08-27', games: 29 },
    { id: 'USR007', name: 'Miguel Torres', score: 795, placement: 7, percentile: 99.3, date: '2026-08-26', games: 48 },
    { id: 'USR008', name: 'Isabella Cruz', score: 770, placement: 8, percentile: 99.2, date: '2026-08-26', games: 33 },
    { id: 'USR009', name: 'Carlos Ramos', score: 745, placement: 9, percentile: 99.1, date: '2026-08-26', games: 42 },
    { id: 'USR010', name: 'Elena Aquino', score: 720, placement: 10, percentile: 99.0, date: '2026-08-25', games: 37 },
    { id: 'USR011', name: 'Ricardo Bautista', score: 695, placement: 11, percentile: 98.9, date: '2026-08-25', games: 28 },
    { id: 'USR012', name: 'Camille Tan', score: 670, placement: 12, percentile: 98.8, date: '2026-08-25', games: 44 },
    { id: 'USR013', name: 'Daniel Villanueva', score: 645, placement: 13, percentile: 98.7, date: '2026-08-24', games: 31 },
    { id: 'USR014', name: 'Grace Fernandez', score: 620, placement: 14, percentile: 98.6, date: '2026-08-24', games: 39 },
    { id: 'USR015', name: 'Mark Gonzales', score: 595, placement: 15, percentile: 98.5, date: '2026-08-24', games: 46 }
];

// ==================== MAIN APP ====================

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loadingScreen = document.getElementById('loadingScreen');
    const landingPage = document.getElementById('landingPage');
    const authModal = document.getElementById('authModal');
    const dashboard = document.getElementById('dashboard');
    const openAuthModal = document.getElementById('openAuthModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const submitLogin = document.getElementById('submitLogin');
    const submitSignup = document.getElementById('submitSignup');
    const logoutBtn = document.getElementById('logoutBtn');
    const userName = document.getElementById('userName');

    // Loading Screen Animation
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        landingPage.classList.add('active');
    }, 2500);

    // Auth Modal
    openAuthModal.addEventListener('click', () => {
        authModal.classList.add('active');
        createConfetti();
    });

    closeAuthModal.addEventListener('click', () => {
        authModal.classList.remove('active');
    });

    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.classList.remove('active');
        }
    });

    // Toggle Forms
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Login
    submitLogin.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        if (email && password) {
            loginSuccess(email.split('@')[0]);
        }
    });

    // Signup
    submitSignup.addEventListener('click', () => {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const studentId = document.getElementById('signupStudentId').value;
        if (name && email && password && studentId) {
            loginSuccess(name);
        }
    });

    // Social Login
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loginSuccess('Student');
        });
    });

    function loginSuccess(name) {
        authModal.classList.remove('active');
        landingPage.classList.remove('active');
        dashboard.classList.remove('hidden');
        userName.textContent = name;
        createConfetti();
        initProgressRings();
        renderPlayersTable();
        renderSessionsList();
    }

    // Logout
    logoutBtn.addEventListener('click', () => {
        dashboard.classList.add('hidden');
        landingPage.classList.add('active');
        document.querySelectorAll('.dashboard-view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-awards').classList.add('active');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[data-view="awards"]').classList.add('active');
    });

    // Dashboard Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const view = link.dataset.view;
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.dashboard-view').forEach(v => v.classList.remove('active'));
            document.getElementById(`view-${view}`).classList.add('active');
        });
    });

    // Admin Tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`panel-${tabName}`).classList.add('active');
        });
    });

    // Club Modals
    const awardCards = document.querySelectorAll('.award-card');
    const clubModals = document.querySelectorAll('.club-modal');
    const closeClubModals = document.querySelectorAll('.close-club-modal');

    awardCards.forEach(card => {
        card.addEventListener('click', () => {
            const club = card.dataset.club;
            const modal = document.getElementById(`modal-${club}`);
            if (modal) {
                modal.classList.add('active');
                createConfetti();
            }
        });
    });

    closeClubModals.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.club-modal').classList.remove('active');
        });
    });

    clubModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Task Checkboxes
    document.querySelectorAll('.task-check input').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const taskItem = checkbox.closest('.task-item');
            const status = taskItem.querySelector('.task-status');
            if (checkbox.checked) {
                taskItem.classList.add('completed');
                status.textContent = 'Completed';
                createConfetti();
                updateProgress(taskItem.closest('.club-modal'));
            } else {
                taskItem.classList.remove('completed');
                status.textContent = 'Pending';
                updateProgress(taskItem.closest('.club-modal'));
            }
        });
    });

    function updateProgress(modal) {
        const club = modal.id.replace('modal-', '');
        const tasks = modal.querySelectorAll('.task-item');
        const completed = modal.querySelectorAll('.task-item.completed');
        const progress = Math.round((completed.length / tasks.length) * 100);
        const awardCard = document.querySelector(`.award-card[data-club="${club}"]`);
        if (awardCard) {
            const progressFill = awardCard.querySelector('.progress-fill');
            const progressText = awardCard.querySelector('.progress-text');
            const circumference = 283;
            const offset = circumference - (progress / 100) * circumference;
            progressFill.style.strokeDashoffset = offset;
            progressText.textContent = `${progress}%`;
        }
    }

    function initProgressRings() {
        document.querySelectorAll('.award-card').forEach(card => {
            const club = card.dataset.club;
            const modal = document.getElementById(`modal-${club}`);
            if (modal) updateProgress(modal);
        });
    }

    // Game Results
    document.getElementById('playAgainBtn')?.addEventListener('click', () => {
        alert('Starting new game...');
    });

    document.getElementById('viewLeaderboardBtn')?.addEventListener('click', () => {
        alert('Opening leaderboard...');
    });

    document.getElementById('shareResultsBtn')?.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    });

    // Show demo results
    setTimeout(() => {
        if (dashboard && !dashboard.classList.contains('hidden')) {
            showGameResults({
                rank: 3,
                totalPlayers: 100,
                score: 850,
                accuracy: 85,
                time: 765,
                streak: 5
            });
        }
    }, 5000);

    function showGameResults(data) {
        const { rank, totalPlayers, score, accuracy, time, streak } = data;
        const percentile = calculatePercentile(rank, totalPlayers);
        const suffix = getRankSuffix(rank);

        document.getElementById('rankNumber').textContent = rank;
        document.getElementById('rankSuffix').textContent = suffix;
        document.getElementById('placementText').textContent = `${rank}${suffix} Place out of ${totalPlayers} players`;
        document.getElementById('percentileValue').textContent = `${percentile}%`;
        document.getElementById('accuracyValue').textContent = `${accuracy}%`;
        document.getElementById('timeValue').textContent = formatTime(time);
        document.getElementById('streakValue').textContent = streak;

        // Animate placement ring
        const ring = document.getElementById('placementRing');
        if (ring) {
            const circumference = 565;
            const offset = circumference - (percentile / 100) * circumference;
            setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
        }

        // Switch to results view
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[data-view="results"]').classList.add('active');
        document.querySelectorAll('.dashboard-view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-results').classList.add('active');
    }

    // Admin - Players Table
    let currentPage = 1;
    const itemsPerPage = 10;
    let filteredPlayers = [...samplePlayers];

    function renderPlayersTable() {
        const tbody = document.getElementById('playersTableBody');
        if (!tbody) return;

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const players = filteredPlayers.slice(start, end);

        tbody.innerHTML = players.map(player => {
            let badgeClass = '';
            if (player.placement === 1) badgeClass = 'gold';
            else if (player.placement === 2) badgeClass = 'silver';
            else if (player.placement === 3) badgeClass = 'bronze';

            return `
                <tr>
                    <td>${player.id}</td>
                    <td>${player.name}</td>
                    <td>${(player.score / 10).toFixed(1)}%</td>
                    <td><span class="badge ${badgeClass}">${player.placement}${getRankSuffix(player.placement)}</span></td>
                    <td>Top ${(100 - player.percentile).toFixed(1)}%</td>
                    <td>${player.date}</td>
                    <td><button class="btn-view" onclick="viewPlayer('${player.id}')">View</button></td>
                </tr>
            `;
        }).join('');

        const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('totalPages').textContent = totalPages;
    }

    // Search
    document.getElementById('searchPlayer')?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filteredPlayers = samplePlayers.filter(p => 
            p.id.toLowerCase().includes(query) || p.name.toLowerCase().includes(query)
        );
        currentPage = 1;
        renderPlayersTable();
    });

    // Filters
    document.getElementById('filterPlacement')?.addEventListener('change', applyFilters);
    document.getElementById('filterScore')?.addEventListener('change', applyFilters);
    document.getElementById('resetFilters')?.addEventListener('click', () => {
        document.getElementById('filterPlacement').value = 'all';
        document.getElementById('filterScore').value = 'all';
        document.getElementById('searchPlayer').value = '';
        filteredPlayers = [...samplePlayers];
        currentPage = 1;
        renderPlayersTable();
    });

    function applyFilters() {
        const placementFilter = document.getElementById('filterPlacement').value;
        const scoreFilter = document.getElementById('filterScore').value;

        filteredPlayers = samplePlayers.filter(player => {
            if (placementFilter !== 'all') {
                const max = parseInt(placementFilter.replace('top', ''));
                if (player.placement > max) return false;
            }
            if (scoreFilter !== 'all') {
                if (scoreFilter === '90+' && player.score < 900) return false;
                if (scoreFilter === '70-89' && (player.score < 700 || player.score >= 900)) return false;
                if (scoreFilter === '50-69' && (player.score < 500 || player.score >= 700)) return false;
            }
            return true;
        });
        currentPage = 1;
        renderPlayersTable();
    }

    // Pagination
    document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; renderPlayersTable(); }
    });

    document.getElementById('nextPage')?.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);
        if (currentPage < totalPages) { currentPage++; renderPlayersTable(); }
    });

    // View Player
    window.viewPlayer = function(playerId) {
        const player = samplePlayers.find(p => p.id === playerId);
        if (!player) return;

        document.getElementById('modalPlayerName').textContent = player.name;
        document.getElementById('modalPlayerId').textContent = `ID: ${player.id}`;
        document.getElementById('modalTotalGames').textContent = player.games;
        document.getElementById('modalAvgScore').textContent = `${(player.score / 10).toFixed(1)}%`;
        document.getElementById('modalBestPlace').textContent = `${player.placement}${getRankSuffix(player.placement)}`;
        document.getElementById('modalWinRate').textContent = `${Math.floor(Math.random() * 20 + 5)}%`;

        const historyList = document.getElementById('modalHistoryList');
        historyList.innerHTML = Array.from({ length: 5 }, (_, i) => {
            const place = Math.floor(Math.random() * 50 + 1);
            const score = Math.floor(Math.random() * 300 + 700);
            const date = new Date(Date.now() - i * 86400000).toLocaleDateString();
            return `
                <div class="history-item">
                    <span class="placement">${place}${getRankSuffix(place)}</span>
                    <span class="score">${(score / 10).toFixed(1)}%</span>
                    <span class="date">${date}</span>
                </div>
            `;
        }).join('');

        document.getElementById('playerModal').classList.add('active');
    };

    document.getElementById('closePlayerModal')?.addEventListener('click', () => {
        document.getElementById('playerModal').classList.remove('active');
    });

    document.getElementById('playerModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'playerModal') {
            document.getElementById('playerModal').classList.remove('active');
        }
    });

    // Sessions List
    function renderSessionsList() {
        const list = document.getElementById('sessionsList');
        if (!list) return;

        const sessions = [
            { id: 'SES001', players: 100, winner: 'Juan Dela Cruz', score: 950, date: '2026-08-28 14:30' },
            { id: 'SES002', players: 85, winner: 'Maria Santos', score: 920, date: '2026-08-28 13:15' },
            { id: 'SES003', players: 120, winner: 'Jose Reyes', score: 895, date: '2026-08-28 11:00' },
            { id: 'SES004', players: 95, winner: 'Ana Garcia', score: 870, date: '2026-08-27 16:45' },
            { id: 'SES005', players: 110, winner: 'Pedro Mendoza', score: 845, date: '2026-08-27 15:30' }
        ];

        list.innerHTML = sessions.map(session => `
            <div class="session-card">
                <div class="session-info">
                    <h4>Session ${session.id}</h4>
                    <p>${session.date}</p>
                </div>
                <div class="session-stats">
                    <div class="session-stat">
                        <div class="value">${session.players}</div>
                        <div class="label">Players</div>
                    </div>
                    <div class="session-stat">
                        <div class="value">${session.winner.split(' ')[0]}</div>
                        <div class="label">Winner</div>
                    </div>
                    <div class="session-stat">
                        <div class="value">${(session.score / 10).toFixed(1)}%</div>
                        <div class="label">Top Score</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Export
    document.getElementById('exportCSV')?.addEventListener('click', () => {
        const headers = ['user_id', 'score', 'placement', 'percentile_rank', 'timestamp'];
        const rows = samplePlayers.map(p => [p.id, p.score, p.placement, p.percentile, `${p.date}T00:00:00Z`]);
        const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
        downloadFile(csv, 'echohonors_data.csv', 'text/csv');
        alert('CSV exported successfully!');
    });

    document.getElementById('exportPDF')?.addEventListener('click', () => {
        alert('PDF export would generate a detailed report.\n\nFor production, use libraries like jsPDF or pdfmake.');
    });

    document.getElementById('exportJSON')?.addEventListener('click', () => {
        const data = {
            export_date: new Date().toISOString(),
            total_records: samplePlayers.length,
            data: samplePlayers.map(p => ({
                user_id: p.id,
                score: p.score,
                placement: p.placement,
                percentile_rank: p.percentile,
                timestamp: `${p.date}T00:00:00Z`
            }))
        };
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, 'echohonors_data.json', 'application/json');
        alert('JSON exported successfully!');
    });

    function downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Confetti Effect
    function createConfetti() {
        const overlay = document.getElementById('confettiOverlay');
        if (!overlay) return;
        const colors = ['#FFD700', '#FFA500', '#FF6347', '#10b981', '#fff'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            overlay.appendChild(confetti);
        }
        setTimeout(() => { overlay.innerHTML = ''; }, 4000);
    }
});
