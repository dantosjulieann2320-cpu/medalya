// Security Consultant Chatbot
class SecurityChatbot {
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
        this.chatToggle.addEventListener('click', () => {
            this.chatWidget.classList.add('active');
            this.chatToggle.querySelector('.notification-badge').style.display = 'none';
        });

        this.chatMinimize.addEventListener('click', () => {
            this.chatWidget.classList.remove('active');
        });

        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

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

        if (lower.includes('access control') || lower.includes('permission')) {
            this.respondAccessControl();
        } else if (lower.includes('authentication') || lower.includes('login')) {
            this.respondAuthentication();
        } else if (lower.includes('session')) {
            this.respondSessionManagement();
        } else if (lower.includes('data') || lower.includes('protect') || lower.includes('encrypt')) {
            this.respondDataProtection();
        } else if (lower.includes('owner') || lower.includes('admin')) {
            this.respondOwnerPermissions();
        } else if (lower.includes('draft') || lower.includes('project')) {
            this.respondDraftProtection();
        } else if (lower.includes('jwt') || lower.includes('token')) {
            this.respondJWT();
        } else if (lower.includes('password')) {
            this.respondPasswordSecurity();
        } else if (lower.includes('hello') || lower.includes('hi')) {
            this.respondGreeting();
        } else if (lower.includes('help')) {
            this.respondHelp();
        } else {
            this.respondDefault();
        }
    }

    respondAccessControl() {
        this.addAdminMessage(`
            <p><strong>Access Control Architecture</strong></p>
            <p>For your academic portfolio, I recommend implementing <strong>Role-Based Access Control (RBAC)</strong> with three roles:</p>
            <ul class="step-list">
                <li><strong>Owner (Admin):</strong> Full access to all features, settings, and user management</li>
                <li><strong>Verified Student:</strong> Can view public content, manage own portfolio</li>
                <li><strong>Public Visitor:</strong> Read-only access to published portfolio items</li>
            </ul>
            <p><strong>Key Implementation Points:</strong></p>
            <ul class="step-list">
                <li>Use middleware to verify roles on every protected route</li>
                <li>Return <strong>404 Not Found</strong> instead of 403 for unauthorized access (hides resource existence)</li>
                <li>Implement <strong>resource-level permissions</strong> - users can only modify their own content</li>
                <li>Log all access attempts for audit trail</li>
            </ul>
            <div class="info-box">
                <strong>Pro Tip:</strong> Check the "Owner-Only Permissions" section above for the complete RBAC matrix.
            </div>
        `);
    }

    respondAuthentication() {
        this.addAdminMessage(`
            <p><strong>Authentication System Best Practices</strong></p>
            <p>For a secure academic portfolio, implement:</p>
            <ol class="step-list">
                <li><strong>Password Hashing:</strong> Use bcrypt with 12+ salt rounds</li>
                <li><strong>JWT Tokens:</strong> Short-lived access tokens (15-30 min)</li>
                <li><strong>Refresh Tokens:</strong> Secure, HTTP-only cookies for seamless re-auth</li>
                <li><strong>Two-Factor Auth:</strong> Optional 2FA for owner account (TOTP)</li>
            </ol>
            <p><strong>Owner-Specific Security:</strong></p>
            <ul class="step-list">
                <li>Single-session enforcement (logout on new login)</li>
                <li>Email alerts for new device logins</li>
                <li>IP-based anomaly detection</li>
                <li>Manual session revocation capability</li>
            </ul>
            <div class="warning-box">
                <strong>Critical:</strong> Never store passwords in plain text. Always hash before storing!
            </div>
        `);
    }

    respondSessionManagement() {
        this.addAdminMessage(`
            <p><strong>Session Management Security</strong></p>
            <p>Secure session handling is crucial for protecting owner access:</p>
            <ol class="step-list">
                <li><strong>Token Rotation:</strong> Issue new tokens on each refresh</li>
                <li><strong>Session Binding:</strong> Tie sessions to device fingerprints</li>
                <li><strong>Idle Timeout:</strong> Auto-logout after inactivity (10-30 min)</li>
                <li><strong>Absolute Timeout:</strong> Force re-authentication after max duration</li>
            </ol>
            <p><strong>Anti-Hijacking Measures:</strong></p>
            <ul class="step-list">
                <li>Validate IP address on each request</li>
                <li>Detect user-agent changes mid-session</li>
                <li>Implement CSRF tokens for state-changing operations</li>
                <li>Use secure, HTTP-only, SameSite=Strict cookies</li>
            </ul>
            <div class="success-box">
                <strong>Implementation:</strong> View the Session Management section above for code examples.
            </div>
        `);
    }

    respondDataProtection() {
        this.addAdminMessage(`
            <p><strong>Data Protection Strategy</strong></p>
            <p>Classify your data by sensitivity level:</p>
            <ol class="step-list">
                <li><strong>Critical (Owner Only):</strong> Site settings, user data, analytics, logs</li>
                <li><strong>Sensitive:</strong> Draft projects, personal info, verification docs</li>
                <li><strong>Internal:</strong> Published portfolio, verified certificates</li>
                <li><strong>Public:</strong> Public portfolio view, contact info</li>
            </ol>
            <p><strong>Encryption Standards:</strong></p>
            <ul class="step-list">
                <li><strong>At Rest:</strong> AES-256-GCM for database fields</li>
                <li><strong>In Transit:</strong> TLS 1.3 with HSTS</li>
                <li><strong>Field-Level:</strong> Encrypt sensitive user data</li>
            </ul>
            <div class="info-box">
                <strong>Remember:</strong> Always encrypt sensitive data before storing and use parameterized queries to prevent SQL injection.
            </div>
        `);
    }

    respondOwnerPermissions() {
        this.addAdminMessage(`
            <p><strong>Owner-Only Access Implementation</strong></p>
            <p>The site owner requires exclusive access to:</p>
            <ol class="step-list">
                <li><strong>Admin Dashboard:</strong> User management, analytics, system settings</li>
                <li><strong>Draft Projects:</strong> All unpublished work and experiments</li>
                <li><strong>Site Configuration:</strong> Theme, layout, feature toggles</li>
                <li><strong>Security Settings:</strong> Password changes, 2FA, session management</li>
            </ol>
            <p><strong>Implementation Pattern:</strong></p>
            <pre style="background: var(--bg-card); padding: 10px; border-radius: 8px; font-size: 12px; overflow-x: auto;">
router.use('/admin/*', verifyToken, ownerOnly);
            </pre>
            <div class="warning-box">
                <strong>Security Note:</strong> Always verify the owner ID against your environment variable, not just the role.
            </div>
        `);
    }

    respondDraftProtection() {
        this.addAdminMessage(`
            <p><strong>Draft Project Security</strong></p>
            <p>Draft projects require special protection since they contain work-in-progress:</p>
            <ol class="step-list">
                <li><strong>Visibility Control:</strong> Set status to 'draft' or 'private'</li>
                <li><strong>Access Check:</strong> Verify owner role before serving</li>
                <li><strong>404 for Unauthorized:</strong> Return Not Found (not Forbidden) to hide existence</li>
                <li><strong>No Caching:</strong> Prevent search engines from indexing drafts</li>
            </ol>
            <p><strong>Code Pattern:</strong></p>
            <pre style="background: var(--bg-card); padding: 10px; border-radius: 8px; font-size: 12px; overflow-x: auto;">
if (project.status === 'draft' && user.role !== 'owner') {
    return res.status(404).json({ error: 'Not found' });
}
            </pre>
            <div class="info-box">
                <strong>Best Practice:</strong> Use 404 instead of 403 for draft access - this prevents attackers from discovering unpublished content.
            </div>
        `);
    }

    respondJWT() {
        this.addAdminMessage(`
            <p><strong>JWT Token Best Practices</strong></p>
            <p>JSON Web Tokens should be configured securely:</p>
            <ol class="step-list">
                <li><strong>Short Expiration:</strong> 15-30 minutes for access tokens</li>
                <li><strong>Secure Storage:</strong> HTTP-only cookies (not localStorage)</li>
                <li><strong>Token Rotation:</strong> Issue new refresh token on each use</li>
                <li><strong>Blacklisting:</strong> Implement for logout/password change</li>
            </ol>
            <p><strong>Never Store in LocalStorage:</strong></p>
            <ul class="step-list">
                <li>✅ Use HTTP-only cookies</li>
                <li>❌ Avoid localStorage (XSS vulnerable)</li>
                <li>❌ Avoid sessionStorage (tab-closing issues)</li>
            </ul>
            <div class="warning-box">
                <strong>Warning:</strong> LocalStorage is accessible via JavaScript, making it vulnerable to XSS attacks.
            </div>
        `);
    }

    respondPasswordSecurity() {
        this.addAdminMessage(`
            <p><strong>Password Security Requirements</strong></p>
            <p>Enforce strong password policies:</p>
            <ol class="step-list">
                <li><strong>Minimum Length:</strong> 12 characters</li>
                <li><strong>Complexity:</strong> Uppercase, lowercase, numbers, special chars</li>
                <li><strong>Hashing:</strong> bcrypt with 12+ salt rounds</li>
                <li><strong>Breach Check:</strong> Have I Been Pwned API integration</li>
            </ol>
            <p><strong>Brute Force Protection:</strong></p>
            <ul class="step-list">
                <li>Account lockout after 5 failed attempts</li>
                <li>Progressive delays between attempts</li>
                <li>IP-based rate limiting</li>
                <li>Email alerts on suspicious activity</li>
            </ul>
            <div class="success-box">
                <strong>Owner Extra:</strong> Consider requiring longer passwords (16+ chars) for the admin account.
            </div>
        `);
    }

    respondGreeting() {
        this.addAdminMessage(`
            <p>Hello! I'm your <strong>Web Development Security Consultant</strong>.</p>
            <p>I can help you with:</p>
            <ul class="step-list">
                <li>🔒 <strong>Access Control</strong> - RBAC implementation</li>
                <li>🔑 <strong>Authentication</strong> - Secure login systems</li>
                <li>⏱️ <strong>Session Management</strong> - Token security</li>
                <li>🛡️ <strong>Data Protection</strong> - Encryption & privacy</li>
                <li>👤 <strong>Owner Permissions</strong> - Admin-only access</li>
                <li>📝 <strong>Draft Security</strong> - Protecting work-in-progress</li>
            </ul>
            <p>What would you like to know about?</p>
        `);
    }

    respondHelp() {
        this.addAdminMessage(`
            <p><strong>Available Security Topics:</strong></p>
            <ol class="step-list">
                <li><strong>"Access Control"</strong> - Role-based permission systems</li>
                <li><strong>"Authentication"</strong> - Login and verification</li>
                <li><strong>"Session Management"</strong> - Token and session security</li>
                <li><strong>"Data Protection"</strong> - Encryption and privacy</li>
                <li><strong>"Owner Permissions"</strong> - Admin-only access control</li>
                <li><strong>"Draft Protection"</strong> - Securing unpublished work</li>
                <li><strong>"JWT"</strong> - Token best practices</li>
                <li><strong>"Password Security"</strong> - Hashing and policies</li>
            </ol>
            <p>You can also ask questions in natural language!</p>
        `);
    }

    respondDefault() {
        this.addAdminMessage(`
            <p>I can help you with various security topics for your academic portfolio.</p>
            <p>Could you please clarify what you'd like to know about? For example:</p>
            <ul class="step-list">
                <li>How to implement <strong>access control</strong>?</li>
                <li>Best practices for <strong>authentication</strong>?</li>
                <li>How to protect <strong>draft projects</strong>?</li>
                <li><strong>Session management</strong> security?</li>
                <li><strong>Data encryption</strong> methods?</li>
            </ul>
            <p>Or click the quick action buttons below for common topics!</p>
        `);
    }
}

// Initialize security chatbot
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('chatWidget')) {
        new SecurityChatbot();
    }
});
