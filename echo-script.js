// EchoHonors - Complete JavaScript

// ==================== DATA ====================

const clubsData = {
    experto: {
        name: 'ExperTO Club',
        icon: 'fas fa-brain',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Expert Talk Series', desc: 'Schedule and coordinate 3 expert talks for the semester', completed: false, evidence: [] },
            { id: 2, title: 'Create Club Handbook', desc: 'Develop comprehensive guide for new members', completed: false, evidence: [] },
            { id: 3, title: 'Lead Weekly Meetings', desc: 'Conduct and document weekly club meetings', completed: false, evidence: [] },
            { id: 4, title: 'Coordinate with Faculty', desc: 'Establish regular communication with club adviser', completed: false, evidence: [] },
            { id: 5, title: 'Submit Achievement Report', desc: 'Compile and submit semester achievement report', completed: false, evidence: [] }
        ]
    },
    sslg: {
        name: 'SSLG',
        icon: 'fas fa-users',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Lead Student Assembly', desc: 'Organize and lead quarterly student assemblies', completed: false, evidence: [] },
            { id: 2, title: 'Develop Leadership Programs', desc: 'Create training modules for student leaders', completed: false, evidence: [] },
            { id: 3, title: 'Coordinate School Events', desc: 'Lead planning for major school celebrations', completed: false, evidence: [] },
            { id: 4, title: 'Represent Student Body', desc: 'Attend meetings with school administration', completed: false, evidence: [] }
        ]
    },
    yeso: {
        name: 'YES-O',
        icon: 'fas fa-seedling',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Lead Environmental Campaign', desc: 'Organize school-wide environmental awareness drive', completed: false, evidence: [] },
            { id: 2, title: 'Implement Recycling Program', desc: 'Set up recycling stations and monitoring system', completed: false, evidence: [] },
            { id: 3, title: 'Tree Planting Activity', desc: 'Coordinate quarterly tree planting events', completed: false, evidence: [] },
            { id: 4, title: 'Green School Documentation', desc: 'Document and report environmental initiatives', completed: false, evidence: [] }
        ]
    },
    bkb: {
        name: 'BKB',
        icon: 'fas fa-heart-broken',
        subtitle: 'Barkada Kontra Bisyo Leadership Award',
        tasks: [
            { id: 1, title: 'Lead Anti-Drug Campaign', desc: 'Organize drug awareness seminars and activities', completed: false, evidence: [] },
            { id: 2, title: 'Peer Counseling Sessions', desc: 'Conduct regular peer counseling for at-risk students', completed: false, evidence: [] },
            { id: 3, title: 'Community Outreach', desc: 'Lead community-based anti-vise programs', completed: false, evidence: [] },
            { id: 4, title: 'Submit Advocacy Report', desc: 'Document and present club achievements', completed: false, evidence: [] }
        ]
    },
    math: {
        name: 'Math Club',
        icon: 'fas fa-calculator',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Math Olympiad', desc: 'Lead the school\'s Math Olympiad preparation team', completed: false, evidence: [] },
            { id: 2, title: 'Math Tutorial Program', desc: 'Establish peer tutoring for struggling students', completed: false, evidence: [] },
            { id: 3, title: 'Math Week Celebration', desc: 'Plan and execute Math Week activities', completed: false, evidence: [] },
            { id: 4, title: 'Math Challenge Documentation', desc: 'Record competition results and achievements', completed: false, evidence: [] }
        ]
    },
    literary: {
        name: 'Literary Club',
        icon: 'fas fa-book-open',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Organize Poetry Slam', desc: 'Lead monthly poetry reading events', completed: false, evidence: [] },
            { id: 2, title: 'School Publication', desc: 'Manage and edit school literary publication', completed: false, evidence: [] },
            { id: 3, title: 'Writing Workshop', desc: 'Conduct creative writing workshops', completed: false, evidence: [] },
            { id: 4, title: 'Literary Festival', desc: 'Organize annual literary festival', completed: false, evidence: [] }
        ]
    },
    art: {
        name: 'Art Club',
        icon: 'fas fa-palette',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'Art Exhibition', desc: 'Curate and organize student art exhibits', completed: false, evidence: [] },
            { id: 2, title: 'Mural Project', desc: 'Lead school mural design and painting', completed: false, evidence: [] },
            { id: 3, title: 'Art Workshop', desc: 'Conduct basic art techniques workshop', completed: false, evidence: [] },
            { id: 4, title: 'Art Competition Entry', desc: 'Prepare entries for inter-school competitions', completed: false, evidence: [] }
        ]
    },
    music: {
        name: 'Music Club',
        icon: 'fas fa-music',
        subtitle: 'Leadership Award Tasks',
        tasks: [
            { id: 1, title: 'School Choir Training', desc: 'Lead choir practice and performances', completed: false, evidence: [] },
            { id: 2, title: 'Music Concert', desc: 'Organize semester music concert', completed: false, evidence: [] },
            { id: 3, title: 'Band Formation', desc: 'Help establish and train school band', completed: false, evidence: [] },
            { id: 4, title: 'Music Festival Participation', desc: 'Prepare and lead team for competitions', completed: false, evidence: [] }
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
        const completed = club.tasks.filter(t => t.completed).length;
        const total = club.tasks.length;
        const allCompleted = completed === total && total > 0;
        
        taskList.innerHTML = club.tasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}" data-task="${task.id}">
                <div class="task-check">
                    <input type="checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="checkmark"></span>
                </div>
                <div class="task-info">
                    <h4>${task.title}</h4>
                    <p>${task.desc}</p>
                    ${task.evidence && task.evidence.length > 0 ? `
                        <div class="task-evidence-list">
                            ${task.evidence.map(e => `<span class="evidence-file"><i class="fas fa-paperclip"></i> ${e.name}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                ${task.due ? `<span class="task-due"><i class="fas fa-calendar"></i> ${task.due}</span>` : ''}
                <span class="task-status">${task.completed ? 'Completed' : 'Pending'}</span>
                <label class="btn-upload-evidence" title="Upload evidence"><i class="fas fa-paperclip"></i><input type="file" accept="image/*,.pdf,.doc,.docx" hidden onchange="uploadEvidence(${task.id}, this)"></label>
                <button class="btn-delete-task" data-id="${task.id}" title="Delete task"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');

        // Add certificate button if all tasks completed
        if (allCompleted) {
            taskList.innerHTML += `
                <div class="certificate-prompt">
                    <div class="cert-prompt-icon"><i class="fas fa-award"></i></div>
                    <h3>Congratulations!</h3>
                    <p>You've completed all tasks for ${club.name}</p>
                    <button class="btn-view-certificate" onclick="generateCertificate('${clubKey}')">
                        <i class="fas fa-certificate"></i> View Your Certificate
                    </button>
                </div>
            `;
        }

        // Update modal progress
        document.getElementById('modalCompleted').textContent = completed;
        document.getElementById('modalTotal').textContent = total;

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

    // Upload Evidence for Task
    window.uploadEvidence = function(taskId, input) {
        if (!currentClubKey) return;
        const club = clubsData[currentClubKey];
        const task = club.tasks.find(t => t.id === taskId);
        if (!task) return;

        const file = input.files[0];
        if (!file) return;

        const evidence = {
            name: file.name,
            size: formatFileSize(file.size),
            type: getFileType(file.name),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        task.evidence.push(evidence);
        renderTasks(currentClubKey);
        createConfetti();
        alert(`Evidence "${file.name}" uploaded for task: ${task.title}`);
    };

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

    // ==================== PORTFOLIO FUNCTIONALITY ====================

    // Portfolio Data
    let portfolioFiles = [
        { id: 1, name: 'Resume_2026.pdf', type: 'pdf', size: '2.4 MB', folder: 'experto', date: 'Aug 15, 2026', description: 'Updated resume for job applications' },
        { id: 2, name: 'Certificate_AWS.png', type: 'image', size: '1.8 MB', folder: 'math', date: 'Jul 20, 2026', description: 'AWS Cloud Practitioner Certificate' },
        { id: 3, name: 'Project_Source.zip', type: 'code', size: '15.2 MB', folder: 'art', date: 'Jun 10, 2026', description: 'Source code for capstone project' },
        { id: 4, name: 'Presentation_Final.mp4', type: 'video', size: '45.6 MB', folder: 'literary', date: 'May 5, 2026', description: 'Final presentation recording' },
        { id: 5, name: 'Expert_Talk_Photos.zip', type: 'image', size: '25.3 MB', folder: 'experto', date: 'Aug 25, 2026', description: 'Photos from expert talk series' },
        { id: 6, name: 'Club_Handbook.pdf', type: 'pdf', size: '3.2 MB', folder: 'experto', date: 'Aug 20, 2026', description: 'ExperTO Club membership handbook' },
        { id: 7, name: 'Assembly_Minutes.docx', type: 'doc', size: '1.5 MB', folder: 'sslg', date: 'Aug 24, 2026', description: 'Minutes from student assembly' },
        { id: 8, name: 'Environmental_Report.pdf', type: 'pdf', size: '4.8 MB', folder: 'yeso', date: 'Aug 23, 2026', description: 'Environmental campaign summary' },
        { id: 9, name: 'Anti_Drug_Seminar.pptx', type: 'doc', size: '8.5 MB', folder: 'bkb', date: 'Aug 21, 2026', description: 'Presentation for drug awareness seminar' },
        { id: 10, name: 'Math_Olympiad_Results.xlsx', type: 'doc', size: '0.8 MB', folder: 'math', date: 'Aug 22, 2026', description: 'Competition results spreadsheet' },
        { id: 11, name: 'Poetry_Collection.pdf', type: 'pdf', size: '2.1 MB', folder: 'literary', date: 'Aug 19, 2026', description: 'Collection of student poems' },
        { id: 12, name: 'Art_Exhibition_Catalog.pdf', type: 'pdf', size: '12.4 MB', folder: 'art', date: 'Aug 17, 2026', description: 'Exhibition catalog with artworks' },
        { id: 13, name: 'Choir_Performance.mp3', type: 'video', size: '8.7 MB', folder: 'music', date: 'Aug 16, 2026', description: 'Christmas concert recording' },
        { id: 14, name: 'Recycling_Program.docx', type: 'doc', size: '1.2 MB', folder: 'yeso', date: 'Aug 14, 2026', description: 'Recycling program documentation' },
        { id: 15, name: 'Counseling_Logs.pdf', type: 'pdf', size: '0.9 MB', folder: 'bkb', date: 'Aug 11, 2026', description: 'Peer counseling session logs' }
    ];

    let currentFolder = 'all';
    let selectedFiles = [];
    let currentPreviewFile = null;

    // Initialize Portfolio
    function initPortfolio() {
        renderPortfolio();
        updatePortfolioStats();
        setupFolderListeners();
        setupUploadListeners();
        setupPreviewListeners();
    }

    // Render Portfolio Grid
    function renderPortfolio() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;

        let files = portfolioFiles;
        if (currentFolder !== 'all') {
            files = files.filter(f => f.folder === currentFolder);
        }

        if (files.length === 0) {
            grid.innerHTML = `
                <div class="empty-portfolio">
                    <i class="fas fa-folder-open"></i>
                    <h3>No files yet</h3>
                    <p>Upload files to get started</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = files.map(file => `
            <div class="portfolio-item" data-id="${file.id}">
                <div class="item-preview">${getFileIcon(file.type)}</div>
                <div class="item-info">
                    <h4>${file.name}</h4>
                    <p>${file.size} • ${file.date}</p>
                </div>
                <div class="item-actions">
                    <button onclick="previewFile(${file.id})" title="Preview"><i class="fas fa-eye"></i></button>
                    <button onclick="downloadFile(${file.id})" title="Download"><i class="fas fa-download"></i></button>
                    <button onclick="deleteFile(${file.id})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');

        updateFolderCounts();
    }

    // Get File Icon
    function getFileIcon(type) {
        const icons = {
            pdf: '<i class="fas fa-file-pdf"></i>',
            image: '<i class="fas fa-image"></i>',
            video: '<i class="fas fa-video"></i>',
            doc: '<i class="fas fa-file-word"></i>',
            code: '<i class="fas fa-file-code"></i>',
            audio: '<i class="fas fa-music"></i>'
        };
        return icons[type] || '<i class="fas fa-file"></i>';
    }

    // Update Portfolio Stats
    function updatePortfolioStats() {
        document.getElementById('totalFiles').textContent = portfolioFiles.length;
        document.getElementById('totalImages').textContent = portfolioFiles.filter(f => f.type === 'image').length;
        document.getElementById('totalDocs').textContent = portfolioFiles.filter(f => f.type === 'pdf' || f.type === 'doc').length;
        document.getElementById('totalVideos').textContent = portfolioFiles.filter(f => f.type === 'video').length;
        document.getElementById('allFilesCount').textContent = portfolioFiles.length + ' files';
    }

    // Update Folder Counts
    function updateFolderCounts() {
        document.querySelectorAll('.folder-item').forEach(folder => {
            const folderName = folder.dataset.folder;
            const count = folderName === 'all' 
                ? portfolioFiles.length 
                : portfolioFiles.filter(f => f.folder === folderName).length;
            folder.querySelector('.folder-count').textContent = count + ' files';
        });
    }

    // Setup Folder Listeners
    function setupFolderListeners() {
        document.querySelectorAll('.folder-item').forEach(folder => {
            folder.addEventListener('click', () => {
                document.querySelectorAll('.folder-item').forEach(f => f.classList.remove('active'));
                folder.classList.add('active');
                currentFolder = folder.dataset.folder;
                renderPortfolio();
            });
        });
    }

    // Setup Upload Listeners
    function setupUploadListeners() {
        const uploadBtn = document.getElementById('uploadBtn');
        const uploadModal = document.getElementById('uploadModal');
        const closeUploadModal = document.getElementById('closeUploadModal');
        const cancelUpload = document.getElementById('cancelUpload');
        const confirmUpload = document.getElementById('confirmUpload');
        const browseBtn = document.getElementById('browseBtn');
        const fileInput = document.getElementById('fileInput');
        const uploadZone = document.getElementById('uploadZone');

        uploadBtn?.addEventListener('click', () => {
            uploadModal.classList.add('active');
            selectedFiles = [];
            renderUploadList();
        });

        closeUploadModal?.addEventListener('click', () => {
            uploadModal.classList.remove('active');
        });

        cancelUpload?.addEventListener('click', () => {
            uploadModal.classList.remove('active');
        });

        browseBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            fileInput.click();
        });

        uploadZone?.addEventListener('click', () => {
            fileInput.click();
        });

        uploadZone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });

        uploadZone?.addEventListener('dragleave', () => {
            uploadZone.classList.remove('dragover');
        });

        uploadZone?.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            handleFiles(e.dataTransfer.files);
        });

        fileInput?.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });

        confirmUpload?.addEventListener('click', () => {
            uploadFiles();
        });
    }

    // Handle Files
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            const fileType = getFileType(file.name);
            selectedFiles.push({
                name: file.name,
                size: formatFileSize(file.size),
                type: fileType,
                file: file
            });
        });
        renderUploadList();
    }

    // Get File Type
    function getFileType(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
        if (['mp4', 'avi', 'mov', 'wmv'].includes(ext)) return 'video';
        if (['mp3', 'wav', 'ogg'].includes(ext)) return 'audio';
        if (['pdf'].includes(ext)) return 'pdf';
        if (['doc', 'docx', 'txt', 'rtf'].includes(ext)) return 'doc';
        if (['zip', 'rar', '7z', 'js', 'py', 'html', 'css'].includes(ext)) return 'code';
        return 'doc';
    }

    // Format File Size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    // Render Upload List
    function renderUploadList() {
        const list = document.getElementById('uploadList');
        if (!list) return;

        list.innerHTML = selectedFiles.map((file, index) => `
            <div class="upload-item">
                ${getFileIcon(file.type)}
                <div class="upload-item-info">
                    <h4>${file.name}</h4>
                    <p>${file.size}</p>
                </div>
                <button class="btn-remove" onclick="removeUploadFile(${index})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    // Remove Upload File
    window.removeUploadFile = function(index) {
        selectedFiles.splice(index, 1);
        renderUploadList();
    };

    // Upload Files
    function uploadFiles() {
        const folder = document.getElementById('uploadFolder').value;
        const description = document.getElementById('fileDescription').value;

        selectedFiles.forEach(file => {
            const newFile = {
                id: portfolioFiles.length + 1,
                name: file.name,
                type: file.type,
                size: file.size,
                folder: folder,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                description: description || 'No description'
            };
            portfolioFiles.push(newFile);
        });

        document.getElementById('uploadModal').classList.remove('active');
        selectedFiles = [];
        renderPortfolio();
        updatePortfolioStats();
        createConfetti();
        alert(`${selectedFiles.length} file(s) uploaded successfully!`);
    }

    // Setup Preview Listeners
    function setupPreviewListeners() {
        const previewModal = document.getElementById('previewModal');
        const closePreviewModal = document.getElementById('closePreviewModal');
        const downloadFileBtn = document.getElementById('downloadFile');
        const deleteFileBtn = document.getElementById('deleteFile');

        closePreviewModal?.addEventListener('click', () => {
            previewModal.classList.remove('active');
        });

        downloadFileBtn?.addEventListener('click', () => {
            if (currentPreviewFile) {
                downloadFile(currentPreviewFile.id);
                previewModal.classList.remove('active');
            }
        });

        deleteFileBtn?.addEventListener('click', () => {
            if (currentPreviewFile) {
                deleteFile(currentPreviewFile.id);
                previewModal.classList.remove('active');
            }
        });

        previewModal?.addEventListener('click', (e) => {
            if (e.target === previewModal) {
                previewModal.classList.remove('active');
            }
        });
    }

    // Preview File
    window.previewFile = function(id) {
        const file = portfolioFiles.find(f => f.id === id);
        if (!file) return;

        currentPreviewFile = file;

        document.getElementById('previewFileName').textContent = file.name;
        document.getElementById('previewName').textContent = file.name;
        document.getElementById('previewSize').textContent = file.size;
        document.getElementById('previewFolder').textContent = getFolderName(file.folder);
        document.getElementById('previewDate').textContent = file.date;
        document.getElementById('previewDesc').textContent = file.description || 'No description';

        const previewContent = document.getElementById('previewContent');
        
        if (file.type === 'image') {
            previewContent.innerHTML = `<div class="file-icon"><i class="fas fa-image"></i><p>Image Preview</p></div>`;
        } else if (file.type === 'video') {
            previewContent.innerHTML = `<div class="file-icon"><i class="fas fa-video"></i><p>Video Preview</p></div>`;
        } else if (file.type === 'audio') {
            previewContent.innerHTML = `<div class="file-icon"><i class="fas fa-music"></i><p>Audio Preview</p></div>`;
        } else {
            previewContent.innerHTML = `<div class="file-icon">${getFileIcon(file.type)}<p>${file.name}</p></div>`;
        }

        document.getElementById('previewModal').classList.add('active');
    };

    // Get Folder Name
    function getFolderName(folder) {
        const names = {
            experto: 'ExperTO Club',
            sslg: 'SSLG',
            yeso: 'YES-O',
            bkb: 'BKB',
            math: 'Math Club',
            literary: 'Literary Club',
            art: 'Art Club',
            music: 'Music Club'
        };
        return names[folder] || folder;
    }

    // Download File
    window.downloadFile = function(id) {
        const file = portfolioFiles.find(f => f.id === id);
        if (!file) return;
        alert(`Downloading ${file.name}...`);
    };

    // Delete File
    window.deleteFile = function(id) {
        if (!confirm('Are you sure you want to delete this file?')) return;
        portfolioFiles = portfolioFiles.filter(f => f.id !== id);
        renderPortfolio();
        updatePortfolioStats();
    };

    // Initialize Portfolio on load
    initPortfolio();

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

    // ==================== CERTIFICATE FUNCTIONALITY ====================

    // Certificate Modal Elements
    const certificateModal = document.getElementById('certificateModal');
    const closeCertificate = document.getElementById('closeCertificate');
    const printCert = document.getElementById('printCert');
    const downloadCert = document.getElementById('downloadCert');
    const shareCert = document.getElementById('shareCert');

    // Close Certificate Modal
    closeCertificate?.addEventListener('click', () => {
        certificateModal.classList.remove('active');
    });

    certificateModal?.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            certificateModal.classList.remove('active');
        }
    });

    // Generate Certificate
    window.generateCertificate = function(clubKey) {
        const club = clubsData[clubKey];
        if (!club) return;

        const completedTasks = club.tasks.filter(t => t.completed).length;
        const totalTasks = club.tasks.length;

        // Update certificate content
        document.getElementById('certStudentName').textContent = document.getElementById('userName')?.textContent || 'Student';
        document.getElementById('certAwardName').textContent = club.name + ' Leadership Award';
        document.getElementById('certTasks').textContent = `${completedTasks} out of ${totalTasks} tasks completed`;
        document.getElementById('certDate').textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        document.getElementById('certId').textContent = 'ECH-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 100000)).padStart(5, '0');

        // Show modal with confetti
        certificateModal.classList.add('active');
        createCertificateConfetti();
    };

    // Print Certificate
    printCert?.addEventListener('click', () => {
        const certContent = document.getElementById('certificateContent').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificate</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh;
                        background: #f0f0f0;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    .certificate {
                        width: 800px;
                        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%);
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    }
                    .certificate-border {
                        padding: 15px;
                        background: linear-gradient(135deg, #FFD700, #B8860B, #FFD700);
                        border-radius: 8px;
                    }
                    .certificate-inner {
                        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                        border-radius: 4px;
                        padding: 40px 50px;
                        text-align: center;
                    }
                    .school-seal {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #FFD700, #B8860B);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 15px;
                        font-size: 2rem;
                        color: #1a1a2e;
                    }
                    .school-name { font-size: 2rem; font-weight: 700; color: #FFD700; letter-spacing: 8px; margin-bottom: 5px; }
                    .school-tagline { font-size: 0.85rem; color: #a0aec0; letter-spacing: 2px; }
                    .certificate-title { margin: 30px 0; }
                    .trophy-icon { font-size: 2.5rem; color: #FFD700; margin-bottom: 15px; }
                    .certificate-title h1 { font-size: 1.8rem; color: #fff; letter-spacing: 6px; margin-bottom: 15px; }
                    .gold-line { width: 200px; height: 3px; background: linear-gradient(90deg, transparent, #FFD700, transparent); margin: 0 auto; }
                    .certificate-body { margin: 30px 0; }
                    .presented-to { font-size: 1rem; color: #a0aec0; margin-bottom: 15px; font-style: italic; }
                    .student-name { font-size: 2.2rem; font-weight: 700; color: #FFD700; margin-bottom: 10px; }
                    .name-line { width: 300px; height: 2px; background: linear-gradient(90deg, transparent, #FFD700, transparent); margin: 0 auto 20px; }
                    .achievement-text { font-size: 1rem; color: #a0aec0; margin-bottom: 15px; }
                    .award-name { font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 15px; padding: 10px 30px; background: rgba(255, 215, 0, 0.1); border-left: 3px solid #FFD700; border-right: 3px solid #FFD700; display: inline-block; }
                    .description-text { font-size: 0.95rem; color: #a0aec0; margin-bottom: 10px; }
                    .tasks-completed { font-size: 1.1rem; color: #FFD700; font-weight: 600; }
                    .certificate-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 215, 0, 0.2); }
                    .signature { text-align: center; }
                    .signature-line { width: 150px; height: 1px; background: #FFD700; margin-bottom: 10px; }
                    .signature-name { font-size: 0.9rem; color: #fff; margin-bottom: 3px; }
                    .signature-title { font-size: 0.8rem; color: #a0aec0; }
                    .certificate-date { text-align: center; }
                    .date-icon { font-size: 1.5rem; color: #FFD700; margin-bottom: 10px; }
                    .certificate-date p { font-size: 0.9rem; color: #fff; }
                    .certificate-id { text-align: center; margin-top: 20px; font-size: 0.8rem; color: #a0aec0; }
                    .certificate-id span { color: #FFD700; }
                    @media print {
                        body { background: white; }
                        .certificate { box-shadow: none; }
                    }
                </style>
            </head>
            <body>
                <div class="certificate">
                    <div class="certificate-border">
                        <div class="certificate-inner">
                            ${certContent}
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    });

    // Download Certificate
    downloadCert?.addEventListener('click', () => {
        alert('Certificate downloaded!');
        createConfetti();
    });

    // Share Certificate
    shareCert?.addEventListener('click', () => {
        alert('Share link copied to clipboard!');
    });

    // Certificate Confetti Effect
    function createCertificateConfetti() {
        const overlay = document.getElementById('confettiOverlay');
        if (!overlay) return;
        
        const colors = ['#FFD700', '#FFA500', '#FF6347', '#10b981', '#fff', '#B8860B'];
        const shapes = ['circle', 'square', 'triangle'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.background = 'transparent';
                confetti.style.borderLeft = '5px solid transparent';
                confetti.style.borderRight = '5px solid transparent';
                confetti.style.borderBottom = '10px solid ' + colors[Math.floor(Math.random() * colors.length)];
            }
            
            overlay.appendChild(confetti);
        }
        setTimeout(() => { overlay.innerHTML = ''; }, 5000);
    }

    // ==================== CONFETTI EFFECT ====================
    
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

    // ==================== AI CHATBOT ====================

    // Chatbot Elements
    const chatbotOpen = document.getElementById('chatbotOpen');
    const chatbotBody = document.getElementById('chatbotBody');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const unreadBadge = document.getElementById('unreadBadge');

    let isChatOpen = false;

    // Toggle Chat
    chatbotOpen?.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        chatbotBody.classList.toggle('active', isChatOpen);
        if (isChatOpen) {
            unreadBadge.style.display = 'none';
            chatInput.focus();
        }
    });

    chatbotToggle?.addEventListener('click', () => {
        isChatOpen = false;
        chatbotBody.classList.remove('active');
    });

    // AI Responses Database
    const aiResponses = {
        'complete a task': `📋 <strong>How to Complete a Task:</strong><br><br>
1. Go to <strong>Awards</strong> tab<br>
2. Click on any club card (ExperTO, SSLG, etc.)<br>
3. You'll see the list of tasks<br>
4. Click the <strong>checkbox</strong> next to a task to mark it as completed<br>
5. A confetti will burst when you complete a task!<br><br>
💡 <em>Tip: Complete ALL tasks to earn your certificate!</em>`,

        'upload evidence': `📎 <strong>How to Upload Evidence:</strong><br><br>
1. Open any club card in <strong>Awards</strong> tab<br>
2. Hover over a task<br>
3. Click the <strong>paperclip icon</strong> 📎<br>
4. Select your file (Image, PDF, DOC)<br>
5. The file will appear under the task<br><br>
💡 <em>Evidence helps prove you completed the task!</em>`,

        'certificate': `🏆 <strong>How to Get Your Certificate:</strong><br><br>
1. Go to <strong>Awards</strong> tab<br>
2. Click on a club card<br>
3. Complete <strong>ALL tasks</strong> in that club<br>
4. A "View Your Certificate" button will appear<br>
5. Click it to see your certificate!<br><br>
🎉 <em>You'll get a confetti celebration when you view it!</em>`,

        'portfolio': `📁 <strong>Portfolio Guide:</strong><br><br>
1. Click the <strong>Portfolio</strong> tab<br>
2. You'll see folders for each club<br>
3. Click a folder to filter files<br>
4. Click <strong>"Upload File"</strong> to add files<br>
5. Drag & drop or browse files<br>
6. Select which folder to save to<br><br>
💡 <em>You can preview, download, or delete files!</em>`,

        'awards': `⭐ <strong>Available Awards:</strong><br><br>
• <strong>ExperTO Club</strong> - Brain & Intellect<br>
• <strong>SSLG</strong> - Student Leadership<br>
• <strong>YES-O</strong> - Youth for Environment<br>
• <strong>BKB</strong> - Anti-Drug Advocacy<br>
• <strong>Math Club</strong> - Mathematics Excellence<br>
• <strong>Literary Club</strong> - Writing & Literature<br>
• <strong>Art Club</strong> - Visual Arts<br>
• <strong>Music Club</strong> - Musical Arts<br><br>
💡 <em>Complete tasks in each to earn awards!</em>`,

        'ranking': `📊 <strong>How to Check Ranking:</strong><br><br>
1. Click the <strong>Ranking</strong> tab<br>
2. See your position among students<br>
3. Your stats are shown at the top:<br>
   - Rank<br>
   - Tasks Completed<br>
   - Points<br>
   - Awards Earned<br><br>
💡 <em>Complete more tasks to climb the rankings!</em>`,

        'hello': `👋 Hello! Welcome to <strong>EchoHonors</strong>!<br><br>
I'm here to help you navigate the website. You can ask me about:<br>
• Completing tasks<br>
• Uploading evidence<br>
• Getting certificates<br>
• Using portfolio<br>
• Checking rankings<br><br>
What would you like to know?`,

        'help': `❓ <strong>How Can I Help?</strong><br><br>
Here are some things I can help you with:<br><br>
📋 <strong>Tasks</strong> - How to complete tasks<br>
📎 <strong>Evidence</strong> - How to upload proof<br>
🏆 <strong>Certificate</strong> - How to earn certificates<br>
📁 <strong>Portfolio</strong> - Managing your files<br>
⭐ <strong>Awards</strong> - Available awards<br>
📊 <strong>Ranking</strong> - Student rankings<br><br>
Just type your question or click a quick action button!`,

        'thank': `😊 You're welcome! If you have any more questions, just ask. Good luck with your awards!`,

        'good': `😊 Thank you! I'm glad I could help. Is there anything else you'd like to know?`
    };

    // Send Message
    window.sendMessage = function() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTyping();

        // Get AI response after delay
        setTimeout(() => {
            removeTyping();
            const response = getAIResponse(message);
            addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    };

    // Quick Message
    window.sendQuickMessage = function(message) {
        addMessage(message, 'user');
        showTyping();
        setTimeout(() => {
            removeTyping();
            const response = getAIResponse(message);
            addMessage(response, 'bot');
        }, 800);
    };

    // Handle Enter Key
    window.handleChatKeyPress = function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    // Add Message to Chat
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'bot' ? 'bot-message' : 'user-message';
        
        if (type === 'bot') {
            messageDiv.innerHTML = `
                <div class="bot-avatar"><i class="fas fa-robot"></i></div>
                <div class="message-content"><p>${content}</p></div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content"><p>${content}</p></div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Show Typing Indicator
    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="bot-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Remove Typing Indicator
    function removeTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    // Get AI Response
    function getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for matching keywords
        for (const [keyword, response] of Object.entries(aiResponses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        // Check for additional keywords
        if (lowerMessage.includes('task') || lowerMessage.includes('gawin')) {
            return aiResponses['complete a task'];
        }
        if (lowerMessage.includes('upload') || lowerMessage.includes('evidence') || lowerMessage.includes('file') || lowerMessage.includes('picture')) {
            return aiResponses['upload evidence'];
        }
        if (lowerMessage.includes('cert') || lowerMessage.includes('award') || lowerMessage.includes('trophy')) {
            return aiResponses['certificate'];
        }
        if (lowerMessage.includes('portfolio') || lowerMessage.includes('folder')) {
            return aiResponses['portfolio'];
        }
        if (lowerMessage.includes('rank') || lowerMessage.includes('standing') || lowerMessage.includes('position')) {
            return aiResponses['ranking'];
        }
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('kumusta')) {
            return aiResponses['hello'];
        }
        if (lowerMessage.includes('help') || lowerMessage.includes('tulong')) {
            return aiResponses['help'];
        }
        if (lowerMessage.includes('thank') || lowerMessage.includes('salamat')) {
            return aiResponses['thank'];
        }
        if (lowerMessage.includes('good') || lowerMessage.includes('nice') || lowerMessage.includes('great')) {
            return aiResponses['good'];
        }

        // Default response
        return `I'm not sure I understand that. Here are some things I can help with:<br><br>
• How to complete a task<br>
• How to upload evidence<br>
• How to get certificates<br>
• Portfolio guide<br>
• View awards<br>
• Check ranking<br><br>
Try asking about one of these topics! 😊`;
    }

    // Upload Button
    document.getElementById('uploadBtn')?.addEventListener('click', () => {
        alert('Upload feature would open file picker dialog.');
    });
});
