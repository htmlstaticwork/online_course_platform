const fs = require('fs');
const path = require('path');

const filePath = path.join('css', 'style.css');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);
let foundIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('/ *   - - -')) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    console.log('Found mangled start at line ' + foundIndex);
    const head = lines.slice(0, foundIndex);
    const correctTail = `/* --- About Page Redesign Custom Styles --- */
.bg-primary-light {
    background-color: rgba(251, 135, 63, 0.1) !important;
}

[data-theme='dark'] .bg-primary-light {
    background-color: rgba(251, 135, 63, 0.2) !important;
}

.rounded-card {
    border-radius: 20px !important;
}

.font-small {
    font-size: 0.9rem !important;
}

.stat-item i {
    transition: transform 0.3s ease;
}

.stat-item:hover i {
    transform: scale(1.1) translateY(-5px);
}

.order-lg-1 { order: 1; }
.order-lg-2 { order: 2; }

@media (max-width: 991.98px) {
    .order-lg-1, .order-lg-2 {
        order: 0 !important;
    }
}
`;
    fs.writeFileSync(filePath, head.join('\n') + '\n' + correctTail);
    console.log('Successfully repaired style.css');
} else {
    console.log('Could not find mangled part in style.css');
}
