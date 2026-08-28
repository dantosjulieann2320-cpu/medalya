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

const submissionsData = [
    {
        id: 1,
        studentId: 'USR001',
        studentName: 'Juan Dela Cruz',
        club: 'experto',
        clubName: 'ExperTO Club',
        taskTitle: 'Organize Expert Talk Series',
        taskDesc: 'Schedule and coordinate 3 expert talks for the semester',
        answer: 'Successfully organized 3 expert talks: (1) Dr. Reyes on AI in Education - attended by 150 students, (2) Engr. Santos on Engineering Careers - attended by 120 students, (3) Prof. Garcia on Research Methods - attended by 100 students. All talks were documented with photos and sign-in sheets.',
        evidence: ['Event Photos', 'Sign-in Sheets', 'Certificates', 'Report'],
        status: 'completed',
        approval: 'pending',
        submittedDate: 'Aug 25, 2026'
    },
    {
        id: 2,
        studentId: 'USR001',
        studentName: 'Juan Dela Cruz',
        club: 'experto',
        clubName: 'ExperTO Club',
        taskTitle: 'Create Club Handbook',
        taskDesc: 'Develop comprehensive guide for new members',
        answer: 'Created a 25-page handbook covering: Club History, Constitution, Member Rights & Responsibilities, Committee Structure, Annual Activities, Achievement Requirements, and Contact Information. Handbook was reviewed by the club adviser and approved.',
        evidence: ['Handbook PDF', 'Adviser Approval'],
        status: 'completed',
        submittedDate: 'Aug 20, 2026'
    },
    {
        id: 3,
        studentId: 'USR002',
        studentName: 'Maria Santos',
        club: 'sslg',
        clubName: 'SSLG',
        taskTitle: 'Lead Student Assembly',
        taskDesc: 'Organize and lead quarterly student assemblies',
        answer: 'Led 2 quarterly assemblies: Q1 Assembly (Leadership Orientation) with 300 attendees, Q2 Assembly (Achievement Recognition) with 280 attendees. Prepared agendas, coordinated with speakers, and ensured smooth execution.',
        evidence: ['Assembly Program', 'Photos', 'Attendance Sheet'],
        status: 'completed',
        submittedDate: 'Aug 24, 2026'
    },
    {
        id: 4,
        studentId: 'USR002',
        studentName: 'Maria Santos',
        club: 'sslg',
        clubName: 'SSLG',
        taskTitle: 'Develop Leadership Programs',
        taskDesc: 'Create training modules for student leaders',
        answer: 'Developed 4 training modules: (1) Effective Communication, (2) Time Management, (3) Team Building, (4) Problem Solving. Each module includes presentation, activity sheets, and assessment quiz.',
        evidence: ['Module Presentations', 'Activity Sheets', 'Quiz Materials'],
        status: 'completed',
        submittedDate: 'Aug 18, 2026'
    },
    {
        id: 5,
        studentId: 'USR003',
        studentName: 'Jose Reyes',
        club: 'yeso',
        clubName: 'YES-O',
        taskTitle: 'Lead Environmental Campaign',
        taskDesc: 'Organize school-wide environmental awareness drive',
        answer: 'Organized "Green School Month" campaign with activities: (1) Waste Segregation Drive, (2) Energy Conservation Pledge, (3) Tree Planting in School Grounds, (4) Environmental Film Screening. Reached 400+ students.',
        evidence: ['Campaign Materials', 'Photos', 'Pledge Cards', 'Report'],
        status: 'completed',
        submittedDate: 'Aug 23, 2026'
    },
    {
        id: 6,
        studentId: 'USR004',
        studentName: 'Ana Garcia',
        club: 'math',
        clubName: 'Math Club',
        taskTitle: 'Organize Math Olympiad',
        taskDesc: 'Lead the school\'s Math Olympiad preparation team',
        answer: 'Organized weekly training sessions for 20 students. Conducted 5 mock exams. School team placed 3rd in District Math Olympiad with 2 gold medals and 3 silver medals.',
        evidence: ['Training Schedule', 'Mock Exams', 'Competition Certificates', 'Medals Photo'],
        status: 'completed',
        submittedDate: 'Aug 22, 2026'
    },
    {
        id: 7,
        studentId: 'USR005',
        studentName: 'Pedro Mendoza',
        club: 'bkb',
        clubName: 'BKB',
        taskTitle: 'Lead Anti-Drug Campaign',
        taskDesc: 'Organize drug awareness seminars and activities',
        answer: 'Conducted 3 seminars with resource speakers from PNP and DOH. Created informative posters and distributed flyers to 500 students. Organized essay writing contest on drug prevention.',
        evidence: ['Seminar Materials', 'Posters', 'Flyers', 'Essay Contest Entries'],
        status: 'completed',
        submittedDate: 'Aug 21, 2026'
    },
    {
        id: 8,
        studentId: 'USR006',
        studentName: 'Sofia Lim',
        club: 'literary',
        clubName: 'Literary Club',
        taskTitle: 'Organize Poetry Slam',
        taskDesc: 'Lead monthly poetry reading events',
        answer: 'Organized 3 poetry slam events with 15-20 participants each. Themes: Identity, Dreams, and Social Issues. Events were documented with videos and photos. Best poems were featured in school publication.',
        evidence: ['Event Videos', 'Photos', 'Poem Collections', 'Publication Feature'],
        status: 'completed',
        submittedDate: 'Aug 19, 2026'
    },
    {
        id: 9,
        studentId: 'USR007',
        studentName: 'Miguel Torres',
        club: 'art',
        clubName: 'Art Club',
        taskTitle: 'Art Exhibition',
        taskDesc: 'Curate and organize student art exhibits',
        answer: 'Curated "Expressions" art exhibition featuring 50+ artworks from 30 students. Organized opening ceremony with 100+ visitors. Media coverage in local newspaper.',
        evidence: ['Exhibition Photos', 'Catalog', 'Newspaper Clipping', 'Visitor Log'],
        status: 'completed',
        submittedDate: 'Aug 17, 2026'
    },
    {
        id: 10,
        studentId: 'USR008',
        studentName: 'Isabella Cruz',
        club: 'music',
        clubName: 'Music Club',
        taskTitle: 'School Choir Training',
        taskDesc: 'Lead choir practice and performances',
        answer: 'Trained 25-member choir for 3 months. Performed at School Foundation Day and Christmas Concert. Choir received "Best Performance" award.',
        evidence: ['Training Logs', 'Performance Videos', 'Award Certificate'],
        status: 'completed',
        submittedDate: 'Aug 16, 2026'
    },
    {
        id: 11,
        studentId: 'USR009',
        studentName: 'Carlos Ramos',
        club: 'experto',
        clubName: 'ExperTO Club',
        taskTitle: 'Lead Weekly Meetings',
        taskDesc: 'Conduct and document weekly club meetings',
        answer: 'Conducted 12 weekly meetings with prepared agendas and documented minutes. Topics covered: Club goals, upcoming events, member concerns, and achievement tracking.',
        evidence: ['Meeting Minutes', 'Agendas', 'Attendance Records'],
        status: 'completed',
        submittedDate: 'Aug 15, 2026'
    },
    {
        id: 12,
        studentId: 'USR010',
        studentName: 'Elena Aquino',
        club: 'yeso',
        clubName: 'YES-O',
        taskTitle: 'Implement Recycling Program',
        taskDesc: 'Set up recycling stations and monitoring system',
        answer: 'Installed 10 recycling stations around campus. Created monitoring schedule with volunteer teams. Collected 200kg of recyclables in first month. Proceeds donated to charity.',
        evidence: ['Station Photos', 'Monitoring Schedule', 'Collection Report', 'Donation Receipt'],
        status: 'completed',
        submittedDate: 'Aug 14, 2026'
    },
    {
        id: 13,
        studentId: 'USR011',
        studentName: 'Ricardo Bautista',
        club: 'math',
        clubName: 'Math Club',
        taskTitle: 'Math Tutorial Program',
        taskDesc: 'Establish peer tutoring for struggling students',
        answer: 'Established peer tutoring program with 10 tutors helping 30 students. Sessions held 3x weekly. Average grade improvement of 15% observed.',
        evidence: ['Tutoring Schedule', 'Student Progress Reports', 'Grade Comparisons'],
        status: 'completed',
        submittedDate: 'Aug 13, 2026'
    },
    {
        id: 14,
        studentId: 'USR012',
        studentName: 'Camille Tan',
        club: 'sslg',
        clubName: 'SSLG',
        taskTitle: 'Coordinate School Events',
        taskDesc: 'Lead planning for major school celebrations',
        answer: 'Coordinated Buwan ng Wika celebration with 5 activities. Managed 20 volunteers. Budget was within allocation. Event received positive feedback from administration.',
        evidence: ['Event Program', 'Budget Report', 'Photos', 'Feedback Summary'],
        status: 'completed',
        submittedDate: 'Aug 12, 2026'
    },
    {
        id: 15,
        studentId: 'USR013',
        studentName: 'Daniel Villanueva',
        club: 'bkb',
        clubName: 'BKB',
        taskTitle: 'Peer Counseling Sessions',
        taskDesc: 'Conduct regular peer counseling for at-risk students',
        answer: 'Conducted 8 counseling sessions with 5 identified at-risk students. Created safe space for sharing. Referred 2 students to school guidance counselor for further assistance.',
        evidence: ['Session Logs', 'Progress Notes', 'Referral Forms'],
        status: 'completed',
        submittedDate: 'Aug 11, 2026'
    },
    {
        id: 16,
        studentId: 'USR014',
        studentName: 'Grace Fernandez',
        club: 'literary',
        clubName: 'Literary Club',
        taskTitle: 'School Publication',
        taskDesc: 'Manage and edit school literary publication',
        answer: 'Managed quarterly publication "The Muse" with 20 pages. Edited 15 submissions from students. Coordinated with designers for layout.',
        evidence: ['Published Magazine', 'Editing Log', 'Submission Guidelines'],
        status: 'completed',
        submittedDate: 'Aug 10, 2026'
    },
    {
        id: 17,
        studentId: 'USR015',
        studentName: 'Mark Gonzales',
        club: 'art',
        clubName: 'Art Club',
        taskTitle: 'Mural Project',
        taskDesc: 'Lead school mural design and painting',
        answer: 'Led team of 8 students in designing and painting school mural depicting "Unity in Diversity". Project completed in 2 weeks.',
        evidence: ['Design Sketch', 'Progress Photos', 'Final Mural Photo'],
        status: 'pending',
        submittedDate: 'Pending'
    },
    {
        id: 18,
        studentId: 'USR009',
        studentName: 'Carlos Ramos',
        club: 'music',
        clubName: 'Music Club',
        taskTitle: 'Music Concert',
        taskDesc: 'Organize semester music concert',
        answer: 'Organized "Harmony" concert with 15 performances from solo and group acts. Coordinated with 20 performers. Venue setup and ticketing managed.',
        evidence: ['Concert Program', 'Performance List', 'Photos', 'Ticket Sales Report'],
        status: 'pending',
        submittedDate: 'Pending'
    }
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
    
    // Current club key for adding tasks
    let currentClubKey = null;
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
        renderRecords();
        renderSubmissions();
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

        // Store current club key for adding tasks
        currentClubKey = clubKey;

        document.getElementById('clubModalTitle').textContent = club.name;
        document.getElementById('clubModalSubtitle').textContent = club.subtitle;
        document.querySelector('#clubModal .club-icon i').className = club.icon;

        renderTasks(clubKey);

        // Reset add task form
        document.getElementById('addTaskForm').classList.add('hidden');
        document.getElementById('addTaskBtn').style.display = 'block';

        clubModal.classList.add('active');
    }

    function renderTasks(clubKey) {
        const club = clubsData[clubKey];
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
                ${task.due ? `<span class="task-due"><i class="fas fa-calendar"></i> ${task.due}</span>` : ''}
                <span class="task-status">${task.completed ? 'Completed' : 'Pending'}</span>
                <button class="btn-delete-task" data-id="${task.id}" title="Delete task"><i class="fas fa-trash"></i></button>
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
                const taskId = parseInt(taskItem.dataset.task);
                const status = taskItem.querySelector('.task-status');
                const task = club.tasks.find(t => t.id === taskId);
                
                if (checkbox.checked) {
                    taskItem.classList.add('completed');
                    status.textContent = 'Completed';
                    if (task) task.completed = true;
                    createConfetti();
                } else {
                    taskItem.classList.remove('completed');
                    status.textContent = 'Pending';
                    if (task) task.completed = false;
                }
                updateModalProgress(clubKey);
                updateCardProgress(clubKey);
            });
        });

        // Add event listeners to delete buttons
        taskList.querySelectorAll('.btn-delete-task').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const taskId = parseInt(btn.dataset.id);
                if (confirm('Delete this task?')) {
                    club.tasks = club.tasks.filter(t => t.id !== taskId);
                    renderTasks(clubKey);
                    updateModalProgress(clubKey);
                    updateCardProgress(clubKey);
                }
            });
        });
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

    // Add Task Button
    document.getElementById('addTaskBtn')?.addEventListener('click', () => {
        document.getElementById('addTaskForm').classList.remove('hidden');
        document.getElementById('addTaskBtn').style.display = 'none';
        document.getElementById('newTaskTitle').focus();
    });

    // Cancel Add Task
    document.getElementById('cancelAddTask')?.addEventListener('click', () => {
        document.getElementById('addTaskForm').classList.add('hidden');
        document.getElementById('addTaskBtn').style.display = 'block';
        clearTaskForm();
    });

    // Submit Add Task
    document.getElementById('submitAddTask')?.addEventListener('click', () => {
        const title = document.getElementById('newTaskTitle').value.trim();
        const desc = document.getElementById('newTaskDesc').value.trim();
        const due = document.getElementById('newTaskDue').value;

        if (!title) {
            alert('Please enter a task title.');
            return;
        }

        if (!currentClubKey) return;

        const club = clubsData[currentClubKey];
        const newId = club.tasks.length > 0 ? Math.max(...club.tasks.map(t => t.id)) + 1 : 1;
        
        club.tasks.push({
            id: newId,
            title: title,
            desc: desc || 'No description provided',
            completed: false,
            due: due || null
        });

        renderTasks(currentClubKey);
        updateModalProgress(currentClubKey);
        updateCardProgress(currentClubKey);
        
        document.getElementById('addTaskForm').classList.add('hidden');
        document.getElementById('addTaskBtn').style.display = 'block';
        clearTaskForm();
        createConfetti();
    });

    function clearTaskForm() {
        document.getElementById('newTaskTitle').value = '';
        document.getElementById('newTaskDesc').value = '';
        document.getElementById('newTaskDue').value = '';
    }

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

    // Records Table (Admin) - Pass/Fail Verification
    function renderRecords() {
        const tbody = document.getElementById('recordsTableBody');
        if (!tbody) return;

        tbody.innerHTML = studentsData.map(student => {
            const status = getStudentStatus(student.tasks);
            
            return `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.tasks}</td>
                    <td>${student.points}</td>
                    <td>${student.awards}</td>
                    <td><span class="status-badge ${status.class}">${status.label}</span></td>
                    <td><button class="btn-details" onclick="viewStudentRecord('${student.id}')">Details</button></td>
                </tr>
            `;
        }).join('');
    }

    function getStudentStatus(tasks) {
        if (tasks >= 5) {
            return { label: 'PASSED', class: 'passed' };
        } else if (tasks >= 3) {
            return { label: 'WARNING', class: 'warning' };
        } else {
            return { label: 'FAILED', class: 'failed' };
        }
    }

    // View Student Record Details
    window.viewStudentRecord = function(studentId) {
        const student = studentsData.find(s => s.id === studentId);
        if (!student) return;

        const rank = studentsData.indexOf(student) + 1;
        const status = getStudentStatus(student.tasks);
        
        document.getElementById('modalStudentName').textContent = student.name;
        document.getElementById('modalStudentRank').textContent = `Rank #${rank} • ${status.label}`;
        document.getElementById('modalTasks').textContent = student.tasks;
        document.getElementById('modalPoints').textContent = student.points;
        document.getElementById('modalAwards').textContent = student.awards;
        document.getElementById('modalRate').textContent = `${Math.round((student.tasks / 18) * 100)}%`;

        // Generate awards list with status
        const awardsList = document.getElementById('modalAwardsList');
        const possibleAwards = [
            { name: 'ExperTO', required: 5 },
            { name: 'SSLG', required: 4 },
            { name: 'YES-O', required: 4 },
            { name: 'BKB', required: 4 },
            { name: 'Math Club', required: 4 },
            { name: 'Literary Club', required: 4 },
            { name: 'Art Club', required: 4 },
            { name: 'Music Club', required: 4 }
        ];
        
        awardsList.innerHTML = possibleAwards.map(award => {
            const earned = student.awards >= possibleAwards.indexOf(award) + 1;
            return `
                <div class="record-award-item">
                    <span class="award-title"><i class="fas fa-trophy"></i> ${award.name}</span>
                    <span class="award-status ${earned ? 'complete' : 'incomplete'}">${earned ? 'Earned' : 'Not Earned'}</span>
                </div>
            `;
        }).join('');

        document.getElementById('studentModal').classList.add('active');
    };

    // Search Records
    document.getElementById('searchRecord')?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = studentsData.filter(s => 
            s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query)
        );
        const tbody = document.getElementById('recordsTableBody');
        tbody.innerHTML = filtered.map(student => {
            const status = getStudentStatus(student.tasks);
            return `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.tasks}</td>
                    <td>${student.points}</td>
                    <td>${student.awards}</td>
                    <td><span class="status-badge ${status.class}">${status.label}</span></td>
                    <td><button class="btn-details" onclick="viewStudentRecord('${student.id}')">Details</button></td>
                </tr>
            `;
        }).join('');
    });

    // Submissions Panel
    function renderSubmissions(clubFilter = 'all', statusFilter = 'all') {
        const list = document.getElementById('submissionsList');
        if (!list) return;

        let filtered = submissionsData;

        if (clubFilter !== 'all') {
            filtered = filtered.filter(s => s.club === clubFilter);
        }

        if (statusFilter !== 'all') {
            if (statusFilter === 'completed') {
                filtered = filtered.filter(s => s.approval === 'approved');
            } else if (statusFilter === 'pending') {
                filtered = filtered.filter(s => s.approval === 'pending');
            }
        }

        if (filtered.length === 0) {
            list.innerHTML = `
                <div class="no-submissions">
                    <i class="fas fa-inbox"></i>
                    <h3>No submissions found</h3>
                    <p>Try adjusting your filters</p>
                </div>
            `;
            return;
        }

        list.innerHTML = filtered.map(sub => `
            <div class="submission-card" data-id="${sub.id}">
                <div class="submission-header">
                    <div class="submission-info">
                        <h3>${sub.studentName}</h3>
                        <div class="submission-meta">
                            <span><i class="fas fa-id-badge"></i> ${sub.studentId}</span>
                            <span><i class="fas fa-users"></i> ${sub.clubName}</span>
                        </div>
                    </div>
                    <span class="approval-badge ${sub.approval}">${getApprovalLabel(sub.approval)}</span>
                </div>
                <div class="submission-task">
                    <h4><i class="fas fa-tasks"></i> Task Given: ${sub.taskTitle}</h4>
                    <p>${sub.taskDesc}</p>
                </div>
                <div class="submission-answer">
                    <h4><i class="fas fa-pen"></i> Student's Answer:</h4>
                    <p>${sub.answer}</p>
                    <div class="submission-evidence">
                        ${sub.evidence.map(e => `<span class="evidence-tag"><i class="fas fa-paperclip"></i> ${e}</span>`).join('')}
                    </div>
                </div>
                <div class="admin-approval-section">
                    <h4><i class="fas fa-user-shield"></i> Admin Verification</h4>
                    ${sub.approval === 'pending' ? `
                        <div class="approval-actions">
                            <div class="reason-input">
                                <input type="text" placeholder="Reason for approval/rejection (optional)" id="reason-${sub.id}">
                            </div>
                            <div class="approval-buttons">
                                <button class="btn-approve" onclick="approveSubmission(${sub.id})"><i class="fas fa-check"></i> Approve</button>
                                <button class="btn-reject" onclick="rejectSubmission(${sub.id})"><i class="fas fa-times"></i> Reject</button>
                            </div>
                        </div>
                    ` : `
                        <div class="approval-result">
                            <span class="result-icon ${sub.approval}"><i class="fas fa-${sub.approval === 'approved' ? 'check-circle' : 'times-circle'}"></i></span>
                            <div class="result-info">
                                <span class="result-status">${sub.approval === 'approved' ? 'APPROVED' : 'REJECTED'}</span>
                                ${sub.reason ? `<span class="result-reason">Reason: ${sub.reason}</span>` : ''}
                                <span class="result-date">Reviewed: ${sub.reviewedDate || 'N/A'}</span>
                            </div>
                        </div>
                    `}
                </div>
                <div class="submission-date">
                    <span><i class="fas fa-calendar-alt"></i> Submitted: ${sub.submittedDate}</span>
                    <span><i class="fas fa-award"></i> Points: ${sub.approval === 'approved' ? '150' : '0'}</span>
                </div>
            </div>
        `).join('');
    }

    function getApprovalLabel(approval) {
        switch(approval) {
            case 'approved': return '<i class="fas fa-check-circle"></i> Approved';
            case 'rejected': return '<i class="fas fa-times-circle"></i> Rejected';
            default: return '<i class="fas fa-hourglass-half"></i> Pending Review';
        }
    }

    // Approve Submission
    window.approveSubmission = function(id) {
        const sub = submissionsData.find(s => s.id === id);
        if (!sub) return;

        const reason = document.getElementById(`reason-${id}`)?.value || '';
        sub.approval = 'approved';
        sub.reason = reason;
        sub.reviewedDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        renderSubmissions(
            document.getElementById('filterClub')?.value || 'all',
            document.getElementById('filterStatus')?.value || 'all'
        );
        createConfetti();
        alert(`Submission APPROVED for ${sub.studentName}`);
    };

    // Reject Submission
    window.rejectSubmission = function(id) {
        const sub = submissionsData.find(s => s.id === id);
        if (!sub) return;

        const reason = document.getElementById(`reason-${id}`)?.value || '';
        if (!reason) {
            alert('Please provide a reason for rejection.');
            return;
        }

        sub.approval = 'rejected';
        sub.reason = reason;
        sub.reviewedDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        renderSubmissions(
            document.getElementById('filterClub')?.value || 'all',
            document.getElementById('filterStatus')?.value || 'all'
        );
        alert(`Submission REJECTED for ${sub.studentName}`);
    };

    // Filter Submissions
    document.getElementById('filterClub')?.addEventListener('change', (e) => {
        const clubFilter = e.target.value;
        const statusFilter = document.getElementById('filterStatus').value;
        renderSubmissions(clubFilter, statusFilter);
    });

    document.getElementById('filterStatus')?.addEventListener('change', (e) => {
        const statusFilter = e.target.value;
        const clubFilter = document.getElementById('filterClub').value;
        renderSubmissions(clubFilter, statusFilter);
    });

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
