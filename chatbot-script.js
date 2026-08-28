// System Administrator Chatbot
class AdminChatbot {
    constructor() {
        this.chatWidget = document.getElementById('chatWidget');
        this.chatToggle = document.getElementById('chatToggle');
        this.chatMinimize = document.getElementById('chatMinimize');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.quickBtns = document.querySelectorAll('.quick-btn');

        this.init();
    }

    init() {
        // Toggle chat
        this.chatToggle.addEventListener('click', () => {
            this.chatWidget.classList.add('active');
            this.chatToggle.querySelector('.notification-badge').style.display = 'none';
        });

        // Minimize chat
        this.chatMinimize.addEventListener('click', () => {
            this.chatWidget.classList.remove('active');
        });

        // Send message
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick buttons
        this.quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.dataset.question;
                this.addUserMessage(question);
                this.processQuestion(question);
            });
        });
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (message) {
            this.addUserMessage(message);
            this.processQuestion(message);
            this.chatInput.value = '';
        }
    }

    addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addAdminMessage(html) {
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message admin';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user-shield"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();

        // Replace with actual message after delay
        setTimeout(() => {
            typingDiv.querySelector('.message-content').innerHTML = html;
            this.scrollToBottom();
        }, 1000);
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    processQuestion(question) {
        const lower = question.toLowerCase();

        if (lower.includes('verify') && lower.includes('student id')) {
            this.respondVerifyStudentId();
        } else if (lower.includes('display') || lower.includes('setting')) {
            this.respondDisplaySettings();
        } else if (lower.includes('access') || lower.includes('permission')) {
            this.respondAccessPermissions();
        } else if (lower.includes('submit') || lower.includes('portfolio')) {
            this.respondSubmitPortfolio();
        } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            this.respondGreeting();
        } else if (lower.includes('help')) {
            this.respondHelp();
        } else if (lower.includes('status')) {
            this.respondStatus();
        } else if (lower.includes('thank')) {
            this.respondThankYou();
        } else {
            this.respondDefault();
        }
    }

    respondVerifyStudentId() {
        this.addAdminMessage(`
            <p><strong>Student ID Verification</strong></p>
            <p>I'll help you verify your student ID in our system. Please follow these steps:</p>
            <ol class="step-list">
                <li>Navigate to <strong>Dashboard → Upload Achievement</strong></li>
                <li>Click on your <strong>Profile Icon</strong> in the top right</li>
                <li>Select <strong>"Account Settings"</strong></li>
                <li>Enter your <strong>Student ID</strong> in the verification field</li>
                <li>Upload a valid <strong>Student ID card</strong> or <strong>Enrollment Certificate</strong></li>
            </ol>
            <div class="info-box">
                <strong>Note:</strong> Verification typically takes 24-48 hours. You'll receive an email notification once verified.
            </div>
            <p>Do you have your Student ID ready? I can guide you through the process step by step.</p>
        `);
    }

    respondDisplaySettings() {
        this.addAdminMessage(`
            <p><strong>Portfolio Display Settings</strong></p>
            <p>To fix your portfolio display settings, please follow these steps:</p>
            <ol class="step-list">
                <li>Go to <strong>Dashboard → Portfolio Files</strong></li>
                <li>Click on <strong>"Settings"</strong> (gear icon)</li>
                <li>Under <strong>"Display Options"</strong>, ensure the following are enabled:
                    <ul>
                        <li>✅ Show in Public Portfolio</li>
                        <li>✅ Display Certificate Badges</li>
                        <li>✅ Show Achievement Timeline</li>
                    </ul>
                </li>
                <li>Click <strong>"Save Changes"</strong></li>
            </ol>
            <div class="warning-box">
                <strong>Important:</strong> If your portfolio is not displaying correctly, check that your files are in the correct format (PDF, PNG, or JPG).
            </div>
            <p>Would you like me to help you adjust specific display settings?</p>
        `);
    }

    respondAccessPermissions() {
        this.addAdminMessage(`
            <p><strong>Access Permissions</strong></p>
            <p>Let me help you resolve your access permission issues. Here's what we need to check:</p>
            <ol class="step-list">
                <li><strong>Account Status:</strong> Verify your account is active and not suspended</li>
                <li><strong>Role Permissions:</strong> Ensure you have "Student" role with portfolio access</li>
                <li><strong>Portfolio Visibility:</strong> Check if your portfolio is set to "Public" or "University Only"</li>
            </ol>
            <p><strong>To check your current permissions:</strong></p>
            <ol class="step-list">
                <li>Go to <strong>Dashboard</strong></li>
                <li>Click on your <strong>username</strong> in the sidebar</li>
                <li>Select <strong>"Permission Settings"</strong></li>
            </ol>
            <div class="info-box">
                <strong>Admin Note:</strong> If you're still having issues, I can escalate this to our technical team for manual permission adjustment.
            </div>
            <p>What specific permission issue are you experiencing?</p>
        `);
    }

    respondSubmitPortfolio() {
        this.addAdminMessage(`
            <p><strong>Portfolio Submission Guide</strong></p>
            <p>Here's how to properly submit your portfolio:</p>
            <ol class="step-list">
                <li><strong>Upload Files:</strong> Go to Dashboard → Portfolio Files → Add File</li>
                <li><strong>Add Certificates:</strong> Dashboard → Certificates → Add Certificate</li>
                <li><strong>Upload Achievements:</strong> Dashboard → Upload Achievement</li>
                <li><strong>Teacher Verification:</strong> Assign a teacher for verification</li>
                <li><strong>Submit for Review:</strong> Click "Submit Portfolio" when ready</li>
            </ol>
            <div class="success-box">
                <strong>Pro Tip:</strong> Make sure all files are properly named and categorized for easier review.
            </div>
            <p><strong>Supported file formats:</strong> PDF, DOC, DOCX, PNG, JPG, JPEG</p>
            <p><strong>Max file size:</strong> 10MB per file</p>
            <p>Would you like help with any specific step?</p>
        `);
    }

    respondGreeting() {
        this.addAdminMessage(`
            <p>Hello! Welcome to the <strong>Academic Portfolio Portal Support</strong>.</p>
            <p>I'm here to assist you with:</p>
            <ul class="step-list">
                <li>✅ Student ID Verification</li>
                <li>✅ Portfolio Display Settings</li>
                <li>✅ Access Permissions</li>
                <li>✅ Portfolio Submission</li>
                <li>✅ Technical Issues</li>
            </ul>
            <p>What can I help you with today?</p>
        `);
    }

    respondHelp() {
        this.addAdminMessage(`
            <p><strong>Available Commands:</strong></p>
            <ol class="step-list">
                <li><strong>"Verify Student ID"</strong> - Check and verify your student identification</li>
                <li><strong>"Display Settings"</strong> - Adjust your portfolio display options</li>
                <li><strong>"Access Permissions"</strong> - Check and modify your access rights</li>
                <li><strong>"Submit Portfolio"</strong> - Guide for submitting your portfolio</li>
                <li><strong>"Check Status"</strong> - View your current account status</li>
            </ol>
            <p>You can also type your question naturally, and I'll do my best to help!</p>
        `);
    }

    respondStatus() {
        const username = localStorage.getItem('username') || 'Student';
        this.addAdminMessage(`
            <p><strong>Account Status Report</strong></p>
            <div class="info-box">
                <strong>User:</strong> ${username}<br>
                <strong>Role:</strong> Student<br>
                <strong>Account Status:</strong> ✅ Active<br>
                <strong>Portfolio Status:</strong> ✅ Published<br>
                <strong>Verification Status:</strong> ⏳ Pending<br>
                <strong>Last Login:</strong> ${new Date().toLocaleString()}
            </div>
            <p>Everything looks good with your account! Is there anything specific you'd like me to check?</p>
        `);
    }

    respondThankYou() {
        this.addAdminMessage(`
            <p>You're welcome! I'm glad I could help. 😊</p>
            <p>If you have any more questions in the future, don't hesitate to reach out. I'm here 24/7 to assist you.</p>
            <p><strong>Have a great day!</strong></p>
        `);
    }

    respondDefault() {
        this.addAdminMessage(`
            <p>Thank you for your message. I understand you need assistance with the portfolio system.</p>
            <p>Could you please provide more details about your issue? For example:</p>
            <ul class="step-list">
                <li>Are you having trouble <strong>verifying your student ID</strong>?</li>
                <li>Is your portfolio not <strong>displaying correctly</strong>?</li>
                <li>Are you facing <strong>access permission</strong> issues?</li>
                <li>Do you need help <strong>submitting your portfolio</strong>?</li>
            </ul>
            <p>You can also click the quick action buttons below to get started.</p>
        `);
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AdminChatbot();
});
