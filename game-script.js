// EchoHonors Game Results & Admin Dashboard

// ==================== DATABASE SCHEMA ====================
/*
MongoDB Schema:

game_sessions {
    _id: ObjectId,
    user_id: String (Firebase UID),
    score: Number (0-1000),
    placement: Number (1-N),
    total_players: Number,
    percentile_rank: Number (0-100),
    accuracy: Number (0-100),
    completion_time: Number (seconds),
    best_streak: Number,
    timestamp: Date,
    game_mode: String
}

players {
    _id: ObjectId,
    user_id: String (Firebase UID),
    display_name: String,
    email: String,
    total_games: Number,
    total_score: Number,
    average_score: Number,
    best_placement: Number,
    total_playtime: Number (seconds),
    created_at: Date,
    last_active: Date
}
*/

// ==================== CALCULATION LOGIC ====================

// Calculate player placement based on scores
function calculatePlacement(playerScore, allScores) {
    // Sort scores in descending order (highest first)
    const sortedScores = [...allScores].sort((a, b) => b - a);
    // Find player's position (1-based index)
    const placement = sortedScores.indexOf(playerScore) + 1;
    return placement;
}

// Calculate percentile rank (percentage of players you outperformed)
function calculatePercentile(placement, totalPlayers) {
    // Percentile = ((totalPlayers - placement) / totalPlayers) * 100
    // Example: 1000 players, placed 50th = ((1000 - 50) / 1000) * 100 = 95%
    const percentile = ((totalPlayers - placement) / totalPlayers) * 100;
    return Math.round(percentile * 10) / 10;
}

// Get rank suffix (1st, 2nd, 3rd, etc.)
function getRankSuffix(rank) {
    if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
    if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
    if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
    return 'th';
}

// Format time from seconds to MM:SS
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

// ==================== GAME RESULTS SCREEN ====================

class GameResults {
    constructor() {
        this.screen = document.getElementById('gameResultsScreen');
        this.init();
    }

    init() {
        // Play Again button
        document.getElementById('playAgainBtn')?.addEventListener('click', () => {
            this.restartGame();
        });

        // View Leaderboard button
        document.getElementById('viewLeaderboardBtn')?.addEventListener('click', () => {
            this.showLeaderboard();
        });

        // Share Results button
        document.getElementById('shareResultsBtn')?.addEventListener('click', () => {
            this.shareResults();
        });
    }

    showResults(data) {
        const { rank, totalPlayers, score, accuracy, time, streak } = data;
        
        // Calculate percentile
        const percentile = calculatePercentile(rank, totalPlayers);
        const suffix = getRankSuffix(rank);

        // Update UI
        document.getElementById('rankNumber').textContent = rank;
        document.getElementById('rankSuffix').textContent = suffix;
        document.getElementById('placementText').textContent = 
            `${rank}${suffix} Place out of ${totalPlayers} players`;
        document.getElementById('percentileValue').textContent = `${percentile}%`;
        document.getElementById('accuracyValue').textContent = `${accuracy}%`;
        document.getElementById('timeValue').textContent = formatTime(time);
        document.getElementById('streakValue').textContent = streak;

        // Animate placement ring
        this.animatePlacementRing(percentile);

        // Show confetti
        this.createConfetti();

        // Show screen
        this.screen.classList.remove('hidden');
    }

    animatePlacementRing(percentile) {
        const ring = document.getElementById('placementRing');
        const circumference = 565; // 2 * PI * 90
        const offset = circumference - (percentile / 100) * circumference;
        
        setTimeout(() => {
            ring.style.strokeDashoffset = offset;
        }, 100);
    }

    createConfetti() {
        const overlay = document.getElementById('resultsConfetti');
        if (!overlay) return;

        const colors = ['#FFD700', '#FFA500', '#FF6347', '#10b981', '#fff'];
        
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            overlay.appendChild(confetti);
        }

        setTimeout(() => {
            overlay.innerHTML = '';
        }, 4000);
    }

    restartGame() {
        // Simulate game restart
        alert('Starting new game...');
        // In real implementation, this would navigate to the game
    }

    showLeaderboard() {
        alert('Opening leaderboard...');
        // In real implementation, this would show leaderboard modal
    }

    shareResults() {
        const shareData = {
            title: 'EchoHonors Results',
            text: 'Check out my results on EchoHonors!',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    }
}

// ==================== ADMIN DASHBOARD ====================

class AdminDashboard {
    constructor() {
        this.currentTab = 'overview';
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.filteredPlayers = [...samplePlayers];
        this.init();
    }

    init() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.tab);
            });
        });

        // Logout
        document.getElementById('adminLogout')?.addEventListener('click', () => {
            this.logout();
        });

        // Search
        document.getElementById('searchPlayer')?.addEventListener('input', (e) => {
            this.searchPlayers(e.target.value);
        });

        // Filters
        document.getElementById('filterPlacement')?.addEventListener('change', () => {
            this.applyFilters();
        });

        document.getElementById('filterScore')?.addEventListener('change', () => {
            this.applyFilters();
        });

        document.getElementById('filterDate')?.addEventListener('change', () => {
            this.applyFilters();
        });

        document.getElementById('resetFilters')?.addEventListener('click', () => {
            this.resetFilters();
        });

        // Pagination
        document.getElementById('prevPage')?.addEventListener('click', () => {
            this.prevPage();
        });

        document.getElementById('nextPage')?.addEventListener('click', () => {
            this.nextPage();
        });

        // Export buttons
        document.getElementById('exportCSV')?.addEventListener('click', () => {
            this.exportCSV();
        });

        document.getElementById('exportPDF')?.addEventListener('click', () => {
            this.exportPDF();
        });

        document.getElementById('exportJSON')?.addEventListener('click', () => {
            this.exportJSON();
        });

        // Player modal
        document.getElementById('closePlayerModal')?.addEventListener('click', () => {
            document.getElementById('playerModal').classList.remove('active');
        });

        // Initialize
        this.renderPlayersTable();
        this.renderSessionsList();
        this.renderPreviewTable();
    }

    switchTab(tabName) {
        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });

        // Update content
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(`tab-${tabName}`)?.classList.add('active');

        this.currentTab = tabName;
    }

    searchPlayers(query) {
        const lowerQuery = query.toLowerCase();
        this.filteredPlayers = samplePlayers.filter(player => 
            player.id.toLowerCase().includes(lowerQuery) ||
            player.name.toLowerCase().includes(lowerQuery)
        );
        this.currentPage = 1;
        this.renderPlayersTable();
    }

    applyFilters() {
        const placementFilter = document.getElementById('filterPlacement').value;
        const scoreFilter = document.getElementById('filterScore').value;
        const dateFilter = document.getElementById('filterDate').value;

        this.filteredPlayers = samplePlayers.filter(player => {
            // Placement filter
            if (placementFilter !== 'all') {
                const maxPlacement = parseInt(placementFilter.replace('top', ''));
                if (player.placement > maxPlacement) return false;
            }

            // Score filter
            if (scoreFilter !== 'all') {
                if (scoreFilter === '90+' && player.score < 900) return false;
                if (scoreFilter === '70-89' && (player.score < 700 || player.score >= 900)) return false;
                if (scoreFilter === '50-69' && (player.score < 500 || player.score >= 700)) return false;
                if (scoreFilter === 'below50' && player.score >= 500) return false;
            }

            // Date filter
            if (dateFilter && player.date !== dateFilter) return false;

            return true;
        });

        this.currentPage = 1;
        this.renderPlayersTable();
    }

    resetFilters() {
        document.getElementById('filterPlacement').value = 'all';
        document.getElementById('filterScore').value = 'all';
        document.getElementById('filterDate').value = '';
        document.getElementById('searchPlayer').value = '';
        
        this.filteredPlayers = [...samplePlayers];
        this.currentPage = 1;
        this.renderPlayersTable();
    }

    renderPlayersTable() {
        const tbody = document.getElementById('playersTableBody');
        if (!tbody) return;

        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        const players = this.filteredPlayers.slice(start, end);

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
                    <td><button class="btn-view" onclick="adminDashboard.viewPlayer('${player.id}')">View</button></td>
                </tr>
            `;
        }).join('');

        // Update pagination
        const totalPages = Math.ceil(this.filteredPlayers.length / this.itemsPerPage);
        document.getElementById('currentPage').textContent = this.currentPage;
        document.getElementById('totalPages').textContent = totalPages;
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderPlayersTable();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredPlayers.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderPlayersTable();
        }
    }

    viewPlayer(playerId) {
        const player = samplePlayers.find(p => p.id === playerId);
        if (!player) return;

        // Update modal
        document.getElementById('modalPlayerName').textContent = player.name;
        document.getElementById('modalPlayerId').textContent = `ID: ${player.id}`;
        document.getElementById('modalTotalGames').textContent = player.games;
        document.getElementById('modalAvgScore').textContent = `${(player.score / 10).toFixed(1)}%`;
        document.getElementById('modalBestPlace').textContent = `${player.placement}${getRankSuffix(player.placement)}`;
        document.getElementById('modalWinRate').textContent = `${Math.floor(Math.random() * 20 + 5)}%`;

        // Generate history
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

        // Show modal
        document.getElementById('playerModal').classList.add('active');
    }

    renderSessionsList() {
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

    renderPreviewTable() {
        const tbody = document.getElementById('previewTableBody');
        if (!tbody) return;

        tbody.innerHTML = samplePlayers.slice(0, 5).map(player => `
            <tr>
                <td>${player.id}</td>
                <td>${player.score}</td>
                <td>${player.placement}</td>
                <td>${player.percentile}%</td>
                <td>${player.date}T${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00Z</td>
            </tr>
        `).join('');
    }

    exportCSV() {
        const headers = ['user_id', 'score', 'placement', 'percentile_rank', 'timestamp'];
        const rows = samplePlayers.map(p => [
            p.id,
            p.score,
            p.placement,
            p.percentile,
            `${p.date}T00:00:00Z`
        ]);

        const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
        this.downloadFile(csv, 'echohonors_data.csv', 'text/csv');
        alert('CSV exported successfully!');
    }

    exportPDF() {
        // In real implementation, this would use a PDF library
        alert('PDF export would generate a detailed report.\n\nFor production, use libraries like:\n- jsPDF\n- pdfmake\n- Puppeteer');
    }

    exportJSON() {
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
        this.downloadFile(json, 'echohonors_data.json', 'application/json');
        alert('JSON exported successfully!');
    }

    downloadFile(content, filename, mimeType) {
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

    logout() {
        document.getElementById('adminDashboard').classList.add('hidden');
        document.getElementById('landingPage').classList.add('active');
    }
}

// ==================== INITIALIZATION ====================

let gameResults;
let adminDashboard;

document.addEventListener('DOMContentLoaded', () => {
    gameResults = new GameResults();
    adminDashboard = new AdminDashboard();

    // Check if admin is logged in
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin) {
        document.getElementById('adminDashboard').classList.remove('hidden');
    }

    // Demo: Show results after 3 seconds (for testing)
    // setTimeout(() => {
    //     gameResults.showResults({
    //         rank: 3,
    //         totalPlayers: 100,
    //         score: 850,
    //         accuracy: 85,
    //         time: 765,
    //         streak: 5
    //     });
    // }, 3000);
});

// Export for use in other scripts
if (typeof module !== 'undefined') {
    module.exports = { GameResults, AdminDashboard, calculatePlacement, calculatePercentile };
}
