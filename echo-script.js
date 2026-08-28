// EchoHonors - Complete JavaScript

// ==================== DATA ====================

const clubsData = {
    experto: {
        name: 'ExperTO Club',
        icon: 'fas fa-brain',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Expert Talk Series', desc: 'Schedule and coordinate 3 expert talks for the semester', completed: false },
            { id: 2, title: 'Create Club Handbook', desc: 'Develop comprehensive guide for new members', completed: false },
            { id: 3, title: 'Lead Weekly Meetings', desc: 'Conduct and document weekly club meetings', completed: false },
            { id: 4, title: 'Coordinate with Faculty', desc: 'Establish regular communication with club adviser', completed: false },
            { id: 5, title: 'Submit Achievement Report', desc: 'Compile and submit semester achievement report', completed: false }
        ]
    },
    sslg: {
        name: 'SSLG',
        icon: 'fas fa-users',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Lead Student Assembly', desc: 'Organize and lead quarterly student assemblies', completed: false },
            { id: 2, title: 'Develop Leadership Programs', desc: 'Create training modules for student leaders', completed: false },
            { id: 3, title: 'Coordinate School Events', desc: 'Lead planning for major school celebrations', completed: false },
            { id: 4, title: 'Represent Student Body', desc: 'Attend meetings with school administration', completed: false }
        ]
    },
    yeso: {
        name: 'YES-O',
        icon: 'fas fa-seedling',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Lead Environmental Campaign', desc: 'Organize school-wide environmental awareness drive', completed: false },
            { id: 2, title: 'Implement Recycling Program', desc: 'Set up recycling stations and monitoring system', completed: false },
            { id: 3, title: 'Tree Planting Activity', desc: 'Coordinate quarterly tree planting events', completed: false },
            { id: 4, title: 'Green School Documentation', desc: 'Document and report environmental initiatives', completed: false }
        ]
    },
    bkb: {
        name: 'BKB',
        icon: 'fas fa-heart-broken',
        subtitle: 'Barkada Kontra Bisyo Leadership Award',
        tasks: [
            { id: 1, title: 'Lead Anti-Drug Campaign', desc: 'Organize drug awareness seminars and activities', completed: false },
            { id: 2, title: 'Peer Counseling Sessions', desc: 'Conduct regular peer counseling for at-risk students', completed: false },
            { id: 3, title: 'Community Outreach', desc: 'Lead community-based anti-vise programs', completed: false },
            { id: 4, title: 'Submit Advocacy Report', desc: 'Document and present club achievements', completed: false }
        ]
    },
    math: {
        name: 'Math Club',
        icon: 'fas fa-calculator',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Math Olympiad', desc: 'Lead the school\'s Math Olympiad preparation team', completed: false },
            { id: 2, title: 'Math Tutorial Program', desc: 'Establish peer tutoring for struggling students', completed: false },
            { id: 3, title: 'Math Week Celebration', desc: 'Plan and execute Math Week activities', completed: false },
            { id: 4, title: 'Math Challenge Documentation', desc: 'Record competition results and achievements', completed: false }
        ]
    },
    literary: {
        name: 'Literary Club',
        icon: 'fas fa-book-open',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Poetry Slam', desc: 'Lead monthly poetry reading events', completed: false },
            { id: 2, title: 'School Publication', desc: 'Manage and edit school literary publication', completed: false },
            { id: 3, title: 'Writing Workshop', desc: 'Conduct creative writing workshops', completed: false },
            { id: 4, title: 'Literary Festival', desc: 'Organize annual literary festival', completed: false }
        ]
    },
    art: {
        name: 'Art Club',
        icon: 'fas fa-palette',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Art Exhibition', desc: 'Curate and organize student art exhibits', completed: false },
            { id: 2, title: 'Mural Project', desc: 'Lead school mural design and painting', completed: false },
            { id: 3, title: 'Art Workshop', desc: 'Conduct basic art techniques workshop', completed: false },
            { id: 4, title: 'Art Competition Entry', desc: 'Prepare entries for inter-school competitions', completed: false }
        ]
    },
    music: {
        name: 'Music Club',
        icon: 'fas fa-music',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'School Choir Training', desc: 'Lead choir practice and performances', completed: false },
            { id: 2, title: 'Music Concert', desc: 'Organize semester music concert', completed: false },
            { id: 3, title: 'Band Formation', desc: 'Help establish and train school band', completed: false },
            { id: 4, title: 'Music Festival Participation', desc: 'Prepare and lead team for competitions', completed: false }
        ]
    }
};

const studentsData = [
    { id: 'USR001', name: 'Juan Dela Cruz', tasks: 18, points: 1250, awards: 6 },
    { id: 'USR002', name: 'Maria Santos', tasks: 16, points: 1100, awards: 5 },
    { id: 'USR003', name: 'Jose Reyes', tasks: 15, points: 1050, awards: 5 },
    { id: 'USR004', name: 'Ana Garcia', tasks: 14, points: 980, awards: 4 },
    { id: 'USR005', name: 'Pedro Mendoza', tasks: 13, points: 920, awards: 4 },
    { id: 'USR006', name: 'Sofia Lim', tasks: 12, points: 850, awards: 3 },
    { id: 'USR007', name: 'Miguel Torres', tasks: 11, points: 780, awards: 3 },
    { id: 'USR008', name: 'Isabella Cruz', tasks: 10, points: 720, awards: 3 },
    { id: 'USR009', name: 'Carlos Ramos', tasks: 9, points: 650, awards: 2 },
    { id: 'USR010', name: 'Elena Aquino', tasks: 8, points: 580, awards: 2 },
    { id: 'USR011', name: 'Ricardo Bautista', tasks: 7, points: 510, awards: 2 },
    { id: 'USR012', name: 'Camille Tan', tasks: 6, points: 440, awards: 1 },
    { id: 'USR013', name: 'Daniel Villanueva', tasks: 5, points: 370, awards: 1 },
    { id: 'USR014', name: 'Grace Fernandez', tasks: 4, points: 300, awards: 1 },
    { id: 'USR015', name: 'Mark Gonzales', tasks: 3, points: 230, awards: 0 }
];

const verifyData = [
    { id: 1, student: 'Juan Dela Cruz', task: 'Organize Expert Talk Series', club: 'ExperTO', date: 'Aug 25, 2026' },
    { id: 2, student: 'Maria Santos', task: 'Lead Student Assembly', club: 'SSLG', date: 'Aug 24, 2026' },
    { id: 3, student: 'Jose Reyes', task: 'Lead Environmental Campaign', club: 'YES-O', date: 'Aug 23, 2026' }
];

// ==================== HELPER FUNCTIONS ====================

function getRankSuffix(rank) {
    if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
    if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
    if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
    return 'th';
}

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

    // Loading Screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        landingPage.classList.add('active');
    }, 2500);

    // Auth Modal
    openAuthModal.addEventListener('click', () => {
        authModal.classList.add('active');
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
        renderRanking();
        renderStudentsTable();
        renderVerifyList();
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

    // Club Modal
    const clubModal = document.getElementById('clubModal');
    const closeClubModal = document.querySelector('.close-club-modal');

    document.querySelectorAll('.award-card').forEach(card => {
        card.addEventListener('click', () => {
            const club = card.dataset.club;
            openClubModal(club);
        });
    });

    closeClubModal.addEventListener('click', () => {
        clubModal.classList.remove('active');
    });

    clubModal.addEventListener('click', (e) => {
        if (e.target === clubModal) {
            clubModal.classList.remove('active');
        }
    });

    function openClubModal(clubKey) {
        const club = clubsData[clubKey];
        if (!club) return;

        document.getElementById('clubModalTitle').textContent = club.name;
        document.getElementById('clubModalSubtitle').textContent = club.subtitle;
        document.querySelector('#clubModal .club-icon i').className = club.icon;

        const taskList = document.getElementById('taskList');
        taskList.innerHTML = club.tasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}" data-task="${task.id}">
                <div class="task-check">
                    <input type="checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="checkmark"></span>
                </div>
                <div class="task-info">
                    <h4>${task.title}</h4>
                    <p>${task.desc}</p>
                </div>
                <span class="task-status">${task.completed ? 'Completed' : 'Pending'}</span>
            </div>
        `).join('');

        // Update modal progress
        const completed = club.tasks.filter(t => t.completed).length;
        document.getElementById('modalCompleted').textContent = completed;
        document.getElementById('modalTotal').textContent = club.tasks.length;

        // Add event listeners to checkboxes
        taskList.querySelectorAll('.task-check input').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const taskItem = checkbox.closest('.task-item');
                const status = taskItem.querySelector('.task-status');
                if (checkbox.checked) {
                    taskItem.classList.add('completed');
                    status.textContent = 'Completed';
                    createConfetti();
                } else {
                    taskItem.classList.remove('completed');
                    status.textContent = 'Pending';
                }
                updateModalProgress(clubKey);
                updateCardProgress(clubKey);
            });
        });

        clubModal.classList.add('active');
    }

    function updateModalProgress(clubKey) {
        const club = clubsData[clubKey];
        const completed = document.querySelectorAll('#taskList .task-item.completed').length;
        document.getElementById('modalCompleted').textContent = completed;
    }

    function updateCardProgress(clubKey) {
        const club = clubsData[clubKey];
        const completed = document.querySelectorAll('#taskList .task-item.completed').length;
        const progress = Math.round((completed / club.tasks.length) * 100);
        
        const card = document.querySelector(`.award-card[data-club="${clubKey}"]`);
        if (card) {
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');
            const completedSpan = card.querySelector('.completed');
            const circumference = 283;
            const offset = circumference - (progress / 100) * circumference;
            progressFill.style.strokeDashoffset = offset;
            progressText.textContent = `${progress}%`;
            completedSpan.textContent = completed;
        }
    }

    function initProgressRings() {
        document.querySelectorAll('.award-card').forEach(card => {
            const club = card.dataset.club;
            updateCardProgress(club);
        });
    }

    // Save Tasks
    document.getElementById('saveTasks')?.addEventListener('click', () => {
        createConfetti();
        alert('Progress saved successfully!');
    });

    // Export Tasks
    document.getElementById('exportTasks')?.addEventListener('click', () => {
        createConfetti();
        alert('PDF export would generate a printable version of your Task & Deliverables table.');
    });

    // Ranking
    function renderRanking() {
        const list = document.getElementById('rankingList');
        if (!list) return;

        list.innerHTML = studentsData.map((student, index) => {
            const rank = index + 1;
            let rankClass = '';
            if (rank === 1) rankClass = '';
            else if (rank === 2) rankClass = 'silver';
            else if (rank === 3) rankClass = 'bronze';

            return `
                <div class="ranking-item ${rank <= 3 ? 'top-3' : ''}">
                    <span class="rank ${rankClass}">#${rank}</span>
                    <div class="student-info">
                        <div class="student-avatar"><i class="fas fa-user"></i></div>
                        <div>
                            <div class="student-name">${student.name}</div>
                            <div class="student-id">${student.id}</div>
                        </div>
                    </div>
                    <span class="tasks">${student.tasks}</span>
                    <span class="points">${student.points}</span>
                    <span class="awards">${student.awards}</span>
                </div>
            `;
        }).join('');

        // Update current user stats (assuming rank 6)
        document.getElementById('myRank').textContent = '6';
        document.getElementById('myTasks').textContent = '12';
        document.getElementById('myPoints').textContent = '850';
        document.getElementById('myAwards').textContent = '3';
    }

    // Students Table (Admin)
    function renderStudentsTable() {
        const tbody = document.getElementById('studentsTableBody');
        if (!tbody) return;

        tbody.innerHTML = studentsData.map((student, index) => {
            const rank = index + 1;
            let badgeClass = '';
            if (rank === 1) badgeClass = 'gold';
            else if (rank === 2) badgeClass = 'silver';
            else if (rank === 3) badgeClass = 'bronze';

            return `
                <tr>
                    <td><span class="badge ${badgeClass}">#${rank}</span></td>
                    <td>${student.name}</td>
                    <td>${student.tasks}</td>
                    <td>${student.points}</td>
                    <td>${student.awards}</td>
                    <td><button class="btn-view" onclick="viewStudent('${student.id}')">View</button></td>
                </tr>
            `;
        }).join('');
    }

    // Search Students
    document.getElementById('searchStudent')?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = studentsData.filter(s => 
            s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query)
        );
        const tbody = document.getElementById('studentsTableBody');
        tbody.innerHTML = filtered.map((student, index) => {
            const rank = studentsData.indexOf(student) + 1;
            return `
                <tr>
                    <td><span class="badge">#${rank}</span></td>
                    <td>${student.name}</td>
                    <td>${student.tasks}</td>
                    <td>${student.points}</td>
                    <td>${student.awards}</td>
                    <td><button class="btn-view" onclick="viewStudent('${student.id}')">View</button></td>
                </tr>
            `;
        }).join('');
    });

    // View Student
    window.viewStudent = function(studentId) {
        const student = studentsData.find(s => s.id === studentId);
        if (!student) return;

        const rank = studentsData.indexOf(student) + 1;
        document.getElementById('modalStudentName').textContent = student.name;
        document.getElementById('modalStudentRank').textContent = `Rank #${rank}`;
        document.getElementById('modalTasks').textContent = student.tasks;
        document.getElementById('modalPoints').textContent = student.points;
        document.getElementById('modalAwards').textContent = student.awards;
        document.getElementById('modalRate').textContent = `${Math.round((student.tasks / 18) * 100)}%`;

        // Generate awards list
        const awardsList = document.getElementById('modalAwardsList');
        const possibleAwards = ['ExperTO', 'SSLG', 'YES-O', 'BKB', 'Math Club', 'Literary Club', 'Art Club', 'Music Club'];
        const earnedAwards = possibleAwards.slice(0, student.awards);
        awardsList.innerHTML = earnedAwards.map(award => `
            <span class="award-badge"><i class="fas fa-trophy"></i> ${award}</span>
        `).join('');

        document.getElementById('studentModal').classList.add('active');
    };

    document.getElementById('closeStudentModal')?.addEventListener('click', () => {
        document.getElementById('studentModal').classList.remove('active');
    });

    document.getElementById('studentModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'studentModal') {
            document.getElementById('studentModal').classList.remove('active');
        }
    });

    // Verify List (Admin)
    function renderVerifyList() {
        const list = document.getElementById('verifyList');
        if (!list) return;

        list.innerHTML = verifyData.map(item => `
            <div class="verify-item">
                <div class="verify-info">
                    <h4>${item.student} - ${item.task}</h4>
                    <p>${item.club} • ${item.date}</p>
                </div>
                <div class="verify-actions">
                    <button class="btn-approve" onclick="approveTask(${item.id})"><i class="fas fa-check"></i> Approve</button>
                    <button class="btn-reject" onclick="rejectTask(${item.id})"><i class="fas fa-times"></i> Reject</button>
                </div>
            </div>
        `).join('');
    }

    window.approveTask = function(id) {
        createConfetti();
        alert('Task approved!');
        renderVerifyList();
    };

    window.rejectTask = function(id) {
        alert('Task rejected.');
        renderVerifyList();
    };

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

    // Upload Button
    document.getElementById('uploadBtn')?.addEventListener('click', () => {
        alert('Upload feature would open file picker dialog.');
    });
});
