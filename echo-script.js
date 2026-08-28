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

    // Social Login Buttons
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
    }

    // Logout
    logoutBtn.addEventListener('click', () => {
        dashboard.classList.add('hidden');
        landingPage.classList.add('active');
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signupStudentId').value = '';
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
            if (modal) {
                updateProgress(modal);
            }
        });
    }

    // Confetti Effect
    function createConfetti() {
        const overlay = document.getElementById('confettiOverlay');
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

        setTimeout(() => {
            overlay.innerHTML = '';
        }, 4000);
    }
});
