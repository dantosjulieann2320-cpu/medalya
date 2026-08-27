document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('userName').textContent = username;

    // Elements
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const menuToggle = document.getElementById('menuToggle');
    const logoutBtn = document.getElementById('logoutBtn');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const actionBtns = document.querySelectorAll('.action-btn[data-section]');

    // Sidebar Toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('mobile-open');
        }
    });

    // Navigation
    function switchSection(sectionId) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });

        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        sidebar.classList.remove('mobile-open');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            switchSection(item.dataset.section);
        });
    });

    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchSection(btn.dataset.section);
        });
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });

    // Upload Zone
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const uploadedFiles = document.getElementById('uploadedFiles');

    browseBtn.addEventListener('click', () => {
        fileInput.click();
    });

    uploadZone.addEventListener('click', (e) => {
        if (e.target === uploadZone || e.target === uploadZone.querySelector('h3') || e.target === uploadZone.querySelector('p')) {
            fileInput.click();
        }
    });

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--accent)';
        uploadZone.style.background = 'rgba(0, 136, 255, 0.1)';
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.style.borderColor = 'var(--border)';
        uploadZone.style.background = 'transparent';
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--border)';
        uploadZone.style.background = 'transparent';
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        Array.from(files).forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <div class="file-item-info">
                    <i class="fas fa-file"></i>
                    <span>${file.name}</span>
                    <span class="file-size">(${formatFileSize(file.size)})</span>
                </div>
                <button class="remove-file" type="button">
                    <i class="fas fa-times"></i>
                </button>
            `;
            fileItem.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 15px;
                background: var(--bg-card);
                border-radius: 8px;
                margin-top: 10px;
            `;
            fileItem.querySelector('.file-item-info').style.cssText = `
                display: flex;
                align-items: center;
                gap: 10px;
            `;
            fileItem.querySelector('.remove-file').style.cssText = `
                background: none;
                border: none;
                color: var(--danger);
                cursor: pointer;
            `;

            fileItem.querySelector('.remove-file').addEventListener('click', () => {
                fileItem.remove();
            });

            uploadedFiles.appendChild(fileItem);
        });
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Achievement Form
    const achievementForm = document.getElementById('achievementForm');
    if (achievementForm) {
        achievementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Achievement submitted for verification!');
            achievementForm.reset();
            uploadedFiles.innerHTML = '';
        });
    }

    // Add File Modal
    const addFileBtn = document.getElementById('addFileBtn');
    const addFileModal = document.getElementById('addFileModal');
    const closeFileModal = document.getElementById('closeFileModal');
    const cancelFileModal = document.getElementById('cancelFileModal');
    const addFileForm = document.getElementById('addFileForm');

    if (addFileBtn) {
        addFileBtn.addEventListener('click', () => {
            addFileModal.classList.add('active');
        });
    }

    if (closeFileModal) {
        closeFileModal.addEventListener('click', () => {
            addFileModal.classList.remove('active');
        });
    }

    if (cancelFileModal) {
        cancelFileModal.addEventListener('click', () => {
            addFileModal.classList.remove('active');
        });
    }

    if (addFileForm) {
        addFileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('File added successfully!');
            addFileModal.classList.remove('active');
            addFileForm.reset();
        });
    }

    // Add Certificate Modal
    const addCertBtn = document.getElementById('addCertBtn');
    const addCertModal = document.getElementById('addCertModal');
    const closeCertModal = document.getElementById('closeCertModal');
    const cancelCertModal = document.getElementById('cancelCertModal');
    const addCertForm = document.getElementById('addCertForm');

    if (addCertBtn) {
        addCertBtn.addEventListener('click', () => {
            addCertModal.classList.add('active');
        });
    }

    if (closeCertModal) {
        closeCertModal.addEventListener('click', () => {
            addCertModal.classList.remove('active');
        });
    }

    if (cancelCertModal) {
        cancelCertModal.addEventListener('click', () => {
            addCertModal.classList.remove('active');
        });
    }

    if (addCertForm) {
        addCertForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Certificate added successfully!');
            addCertModal.classList.remove('active');
            addCertForm.reset();
        });
    }

    // Modal file browse buttons
    const modalBrowseBtn = document.getElementById('modalBrowseBtn');
    const modalFileInput = document.getElementById('modalFileInput');
    const certBrowseBtn = document.getElementById('certBrowseBtn');
    const certFileInput = document.getElementById('certFileInput');

    if (modalBrowseBtn && modalFileInput) {
        modalBrowseBtn.addEventListener('click', () => {
            modalFileInput.click();
        });
    }

    if (certBrowseBtn && certFileInput) {
        certBrowseBtn.addEventListener('click', () => {
            certFileInput.click();
        });
    }

    // Close modals on outside click
    [addFileModal, addCertModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    });

    // Generate PDF Reports
    const generateBtns = document.querySelectorAll('.generate-report');
    generateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            generatePDF(type);
        });
    });

    function generatePDF(type) {
        showToast(`Generating ${type} report...`);

        // Simulate PDF generation
        setTimeout(() => {
            // Create a simple text-based report
            const reportContent = generateReportContent(type);
            const blob = new Blob([reportContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${type}_report.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('Report downloaded successfully!');
        }, 1500);
    }

    function generateReportContent(type) {
        const username = localStorage.getItem('username') || 'User';
        const date = new Date().toLocaleDateString();

        let content = '';
        content += '========================================\n';
        content += '         MEDALYA PORTFOLIO REPORT       \n';
        content += '========================================\n\n';
        content += `Report Type: ${type.toUpperCase()}\n`;
        content += `Generated for: ${username}\n`;
        content += `Date: ${date}\n\n`;
        content += '----------------------------------------\n\n';

        switch(type) {
            case 'portfolio':
                content += 'PORTFOLIO SUMMARY\n\n';
                content += 'Total Projects: 12\n';
                content += 'Verified Achievements: 15\n';
                content += 'Certificates: 8\n';
                content += 'Skills Listed: 10\n\n';
                content += 'Recent Projects:\n';
                content += '  1. E-Commerce Platform\n';
                content += '  2. Real-Time Chat App\n';
                content += '  3. Analytics Dashboard\n';
                content += '  4. Task Management System\n';
                break;
            case 'achievements':
                content += 'ACHIEVEMENTS REPORT\n\n';
                content += 'Verified Achievements:\n\n';
                content += '1. Hackathon Winner\n';
                content += '   Category: Competition\n';
                content += '   Date: Jan 2025\n';
                content += '   Status: Verified\n\n';
                content += '2. Dean\'s List\n';
                content += '   Category: Academic\n';
                content += '   Date: Dec 2024\n';
                content += '   Status: Verified\n\n';
                content += '3. Research Paper Publication\n';
                content += '   Category: Academic\n';
                content += '   Date: Nov 2024\n';
                content += '   Status: Verified\n';
                break;
            case 'certificates':
                content += 'CERTIFICATES REPORT\n\n';
                content += 'Earned Certificates:\n\n';
                content += '1. AWS Cloud Practitioner\n';
                content += '   Issuer: Amazon Web Services\n';
                content += '   Date: Jan 2025\n';
                content += '   Status: Verified\n\n';
                content += '2. Meta Front-End Developer\n';
                content += '   Issuer: Coursera\n';
                content += '   Date: Mar 2025\n';
                content += '   Status: Verified\n\n';
                content += '3. Azure Fundamentals\n';
                content += '   Issuer: Microsoft\n';
                content += '   Date: Apr 2025\n';
                content += '   Status: Verified\n';
                break;
            case 'skills':
                content += 'SKILLS REPORT\n\n';
                content += 'Frontend Skills:\n';
                content += '  - HTML/CSS: 95%\n';
                content += '  - JavaScript: 90%\n';
                content += '  - React: 88%\n';
                content += '  - Vue.js: 75%\n\n';
                content += 'Backend Skills:\n';
                content += '  - Node.js: 85%\n';
                content += '  - Python: 82%\n';
                content += '  - PostgreSQL: 78%\n';
                content += '  - AWS: 70%\n';
                break;
        }

        content += '\n========================================\n';
        content += '           END OF REPORT                \n';
        content += '========================================\n';

        return content;
    }

    // Search functionality for files
    const searchFiles = document.getElementById('searchFiles');
    const filterCategory = document.getElementById('filterCategory');

    if (searchFiles) {
        searchFiles.addEventListener('input', (e) => {
            filterFiles();
        });
    }

    if (filterCategory) {
        filterCategory.addEventListener('change', () => {
            filterFiles();
        });
    }

    function filterFiles() {
        // Placeholder for file filtering
        showToast('Files filtered!');
    }

    // Toast notification
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // Delete file/certificate buttons
    document.querySelectorAll('.icon-btn.danger').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this item?')) {
                btn.closest('.file-card, .report-item')?.remove();
                showToast('Item deleted successfully!');
            }
        });
    });
});
