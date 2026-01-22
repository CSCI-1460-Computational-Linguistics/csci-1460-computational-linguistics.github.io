function initAltMode() {
    if (localStorage.getItem('altMode') === null) {
        localStorage.setItem('altMode', 0);
    }

    const isEnabled = localStorage.getItem('altMode') === '1';
    if (isEnabled) {
        document.documentElement.classList.add('alt-mode');
        document.documentElement.style.setProperty('--main-font', 'var(--alt-font)');
    }
}

function toggleAltMode() {
    const isEnabled = localStorage.getItem('altMode') === '1';
    const newState = isEnabled ? 0 : 1;
    localStorage.setItem('altMode', newState);

    if (newState) {
        document.documentElement.classList.add('alt-mode');
        document.documentElement.style.setProperty('--main-font', 'var(--alt-font)');
    } else {
        document.documentElement.classList.remove('alt-mode');
        document.documentElement.style.setProperty('--main-font', 'var(--ori-font)');
    }
}

async function loadTable() {
    if (!window.location.pathname.includes('/assignments/')) {
        return;
    }
    const tableDiv = document.getElementById('homeworks');
    if (!tableDiv) {
        console.warn('Could not find table div');
        return;
    }
    const res = await fetch(window.location.href, { method: 'HEAD' });
    const header = res.headers.get('date');
    const servEst = new Date(
        new Date(header).toLocaleString("en-US", {
            timeZone: "America/New_York"
        })
    );
    const est = new Date(
        new Date().toLocaleString("en-US", {
            timeZone: "America/New_York"
        })
    );
    const t = servEst > est ? servEst : est;

    const list = [
        [
            // '2026-01-17',
            // '2026-01-28',
            null,
            null,
            "https://drive.google.com/drive/folders/18bbpRdrymTPmR5svUE5qhy8r5B5k9URS?usp=sharing",
        ], [
            // '2026-01-28',
            null,
            null,
            "https://drive.google.com/drive/folders/1uTOZ61QEEfpXLY57ZgofIKPbLefSPpTF?usp=sharing",
        ], [
            null,
            null,
            "https://drive.google.com/drive/folders/16ndpNklLFwLriCeR14cliR8LNzL0qv7u?usp=sharing",
        ], [
            null,
            null,
            "https://drive.google.com/drive/folders/145o1oPyZvLY8Y6nO6Ch_BhBNiekqbT_Y?usp=sharing",
        ], [
            null,
            null,
            "https://drive.google.com/drive/folders/1JvmspnhJsPDYiRIXyV_-3JkSsEUaYWjl?usp=sharing",
        ], [
            null,
            null,
            "https://docs.google.com/document/d/1nv5TKtQ8DNH-7gZMCjSXax10TUz-VqNuOy-4HutSZvE/edit?usp=sharing"
        ],
    ];


    for (let i = 0; i < list.length; i++) {
        const id = `homework-${i + 1}-tr`;
        const tr = document.getElementById(id);
        if (!tr) {
            console.warn(`Could not find table row with id ${id}`);
            continue;
        }
        if (list[i][0] === null) { continue; }
        const out = new Date(list[i][0] + 'T00:00:00-05:00');
        const outTd = tr.querySelectorAll('td')[2];
        outTd.textContent = `${out.getDate()} ${out.toLocaleString('en-US', { month: 'short' })}`;
        if (list[i][1] !== null) {
            const due = new Date(list[i][1] + 'T00:00:00-05:00');
            const dueTd = tr.querySelectorAll('td')[3];
            dueTd.textContent = `${due.getDate()} ${due.toLocaleString('en-US', { month: 'short' })}`;
        }

        if (t < out) { continue; }
        tr.querySelector('td.main').classList.add('out');
        const a = tr.querySelector('td.main a');
        a.href = list[i][2];
        a.target = "_blank";
    }
}


initAltMode();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTable);
} else {
    loadTable();
}
