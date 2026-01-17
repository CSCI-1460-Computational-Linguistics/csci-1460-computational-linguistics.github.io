const lectures = [
    {
        'num': 0,
        'date': '5 Sept',
        'title': 'NLP Intro: Brief History and Context',
        'url_slides': 'https://drive.google.com/file/d/1ILBU0Ce7fyyqEuRILQQUV5XUb1pEbpgO/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f95a79f5-c457-4487-87da-b1d900e86818',
        'url_quiz': 'https://forms.gle/ch6YYhjoUUjU2fcW6',
        'quiz_num': 0,
    },
    {
        'num': 1,
        'date': '10 Sept',
        'title': 'Tasks and Benchmarks',
        'url_slides': 'https://drive.google.com/file/d/1RoeGsmAHXULAqB-af9cP1M4r-ZfANuKD/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=45cab44c-17d9-4ce3-8054-b1d900e868cb',
        'url_quiz': 'https://forms.gle/zsLHSfLW4EgkifeF6',
        'quiz_num': 1,
    },
    {
        'num': 2,
        'date': '12 Sept',
        'title': 'BOW Text Classifiers',
        'url_slides': 'https://drive.google.com/file/d/1um7HmiTNOKKOq2UIMRzwuRyLfrqWKqsp/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c048d616-851f-452d-835d-b1d900e868f1',
        'url_quiz': 'https://forms.gle/52dJRb4NCF1DwxHg9',
        'quiz_num': 2,
    },
    {
        'num': 3,
        'date': '17 Sept',
        'title': 'Distributional Hypothesis & Word Embeddings',
        'url_slides': 'https://drive.google.com/file/d/1un76Uul7aMVztQRCiu0VVfMW87cWSYBr/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=65033ad0-4c20-49bb-b0a2-b1d900e86913',
        'url_quiz': 'https://forms.gle/iv5JXqSxaxTkbNDw5',
        'quiz_num': 3,
    },
    {
        'num': 4,
        'date': '19 Sept',
        'title': 'Topic Modeling',
        'url_slides': 'https://drive.google.com/file/d/1appbYcFnpVbBI1WHFVw_WLxDMU25CGrZ/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b8cf7993-f780-4daf-8dc4-b1d900e8694e',
        'url_quiz': 'https://forms.gle/UZf4jQEf95Ex6DjN6',
        'quiz_num': 4,
    },
    {
        'num': 5,
        'date': '24 Sept',
        'title': 'Statistical Machine Translation',
        'url_slides': 'https://drive.google.com/file/d/1EG3Rn3mDouGo5NvxM_NwgeGVOvHauskf/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95c0ea5d-b1de-4ba1-bd8c-b1d900e86980',
        'url_quiz': 'https://forms.gle/idwWvqHSvyn8dysf9',
        'quiz_num': 5,
    },
    {
        'num': 6,
        'date': '26 Sept',
        'title': 'Language Modeling Basics',
        'url_slides': 'https://drive.google.com/file/d/1Br7-LGJK0dsv_taOyBBibR_SY0Oq1Qe2/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=73ebce45-c7ee-4ece-8e37-b1d900e869a2',
        'url_quiz': 'https://forms.gle/WHRUL4Yx6GyPaVT89',
        'quiz_num': 6,
    },
    {
        'num': 7,
        'date': '1 Oct',
        'title': 'Neural Architectures Part 1: MLPs, RNNs and Word Embeddings',
        'url_slides': 'https://drive.google.com/file/d/1ECQnGQfNekAw72kAWZ3pIk3KdovvULUk/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5964d43a-fd3b-48c7-bf1e-b1d900e869cf',
        'url_quiz': 'https://forms.gle/Q3MZKYmeVZxj38Gc9',
        'quiz_num': 7,
    },
    {
        'num': 8,
        'date': '3 Oct',
        'title': 'Neural Architectures Part 2: LSTMs and Transformers',
        'url_slides': 'https://drive.google.com/file/d/1nLGGQusCVVliD0aXJ2xd6qvSwDIerVGi/view?usp=drive_link',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7cb7e1b8-9394-43c5-9336-b1d900e869f8',
        'url_quiz': 'https://forms.gle/p943T5jDXrxJu8QTA',
        'quiz_num': 8,
    },
    {
        'num': 9,
        'date': '8 Oct',
        'title': 'Guest Lecture: Will Louis',
        'html_title': 'Guest Lecture: <a href="https://faculty.washington.edu/wlewis2/" target="_blank">Will Louis</a> <a href="https://edstem.org/us/courses/65453/discussion/5438447" target="_blank">[ZOOM]</a>',
        'url_slides': null,
        'url_recording': 'https://brown.zoom.us/rec/share/0v639nIS6uqSWXOwQreIoWKfv-pObG-4sqw49NjjA0ceYIMwOR30SPb7QshjX5zq.07ltRtsk74MBV2PP',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 10,
        'date': '10 Oct',
        'title': 'Transformers contd.',
        'html_title': 'Transformers contd. <a href="https://edstem.org/us/courses/65453/discussion/5438447" target="_blank">[ZOOM]</a>',
        'url_slides': null,
        'url_recording': 'https://brown.zoom.us/rec/share/puU8_CRG2H2W-QWVJnvXji3lKqpUc26rlIAouQPosjiCHrKNB_hAeOCMVs57q_iO.wWjYH0d0NyL2ibib',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 11,
        'date': '15 Oct',
        'title': 'Pretrained Language Models',
        'url_slides': 'https://drive.google.com/file/d/1oskUy4QqwqIK_D4TGvny-Xo0JcjQ-4e0/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=58ee25fa-1050-42b6-be44-b1d900e86a68',
        'url_quiz': 'https://forms.gle/wn7sd7tY7H1vayXu7',
        'quiz_num': 9,
    },
    {
        'num': 12,
        'date': '17 Oct',
        'title': 'Prompting and Post-Training',
        'url_slides': 'https://drive.google.com/file/d/1xQAfZA7lXjgK8DF80XyAEZKUdUXlKcmy/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3fb75e77-79d5-4264-8f63-b1d900e86a8e',
        'url_quiz': 'https://forms.gle/tYcH5UGqrBVNUoLv8',
        'quiz_num': 10,
    },
    {
        'num': 13,
        'date': '22 Oct',
        'title': 'Prompting and Post-Training contd.',
        'url_slides': 'https://drive.google.com/file/d/1XnIEJfQZlbSIQxLILjylNxcvtBLQ5HMh/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=da78dc39-3da0-4da6-aa7d-b1d900e86ab5',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 14,
        'date': '24 Oct',
        'title': 'NO CLASS',
        'url_slides': null,
        'url_recording': null,
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 15,
        'date': '29 Oct',
        'title': 'Morphology, Tokenization',
        'url_slides': 'https://drive.google.com/file/d/1GXtXk72Z0mhEFOtoNIKAPxfq3YnDpdT2/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c261d6c3-9b8d-4afb-b160-b1d900e86b10',
        'url_quiz': 'https://forms.gle/L2yZ39MhjP6xnUMS6',
        'quiz_num': 11,
    },
    {
        'num': 16,
        'date': '31 Oct',
        'title': 'Lexicon (Part of Speech, Word Sense)',
        'url_slides': 'https://drive.google.com/file/d/1OOXLui8GKR8sO_mGRtIeSHvx5PGZMcHT/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6195541b-9fdc-44d3-9ed6-b1d900e86b42',
        'url_quiz': 'https://forms.gle/ED3d9r6Mw7kZrpmi9',
        'quiz_num': 12,
    },
    {
        'num': null,
        'date': '5 Nov',
        'title': 'NO CLASS: Election Day',
        'url_slides': null,
        'url_recording': null,
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 17,
        'date': '7 Nov',
        'title': 'Grammars and Parsing',
        'url_slides': 'https://drive.google.com/file/d/1dJ4RrMWa3t_19dHHvaXq7OZ7c5eRgkb5/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=921a1cea-f59d-4e35-a9ac-b1d900e86b94',
        'url_quiz': 'https://forms.gle/yzAJfZBrNENeZC5H6',
        'quiz_num': 13,
    },
    {
        'num': 18,
        'date': '12 Nov',
        'title': 'Semantic Representations and Parsing',
        'url_slides': 'https://drive.google.com/file/d/102AjKhZcVnvrFdzgM2XZHoVnLhop-f3s/view?usp=sharing',
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9f40bff4-0947-461d-8e67-b1d900e86bba',
        'url_quiz': 'https://forms.gle/B6azUQWv7YKNkpFF9',
        'quiz_num': 14,
    },
    {
        'num': 19,
        'date': '14 Nov',
        'title': 'Midterm Review',
        'url_slides': null,
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=318418f8-49b4-4985-b0f5-b1d900e86be8',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 20,
        'date': '19 Nov',
        'title': 'Midterm Review',
        'url_slides': null,
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6dc39350-a2a2-432c-9fd3-b1d900e86c12',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 21,
        'date': '21 Nov',
        'title': 'MIDTERM!',
        'url_slides': null,
        'url_recording': null,
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': null,
        'date': '26 Nov',
        'title': 'NO CLASS: Thanksgiving',
        'url_slides': null,
        'url_recording': null,
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': null,
        'date': '28 Nov',
        'title': 'NO CLASS: Thanksgiving',
        'url_slides': null,
        'url_recording': null,
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 22,
        'date': '3 Dec',
        // 'title': 'Interpretability Part 1: Interpretability Overview, and "What happened to Core NLP?"',
        'html_title': 'Interpretability Part 1: Interpretability Overview, <br/>and "What happened to Core NLP?',
        'url_slides': null,
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a54c8bc2-1111-4ac5-835e-b1d900e86ca2',
        'url_quiz': null,
        'quiz_num': null,
    },
    {
        'num': 23,
        'date': '5 Dec',
        'title': '</s>',
        'url_slides': null,
        'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c4bd6ca8-467a-417f-bd10-b1d900e86cd7',
        'url_quiz': null,
        'quiz_num': null,
    },
];

function cmpListToHTML() {
    // temp function to make sure lectures content matches the actual HTML
    const table = document.getElementById('slides-table');
    if (!table) {
        console.warn('Could not find table with id slides-table');
        return;
    }

    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const lecture = lectures[i - 1];
        if (!lecture) {
            console.warn(`No lecture data for row ${i}`);
            continue;
        }

        const numCell = row.cells[0];
        const numText = lecture.num !== null ? lecture.num.toString() : '';
        if (numCell.textContent.trim() !== numText) {
            console.warn(`Number mismatch in row ${i}: table has "${numCell.textContent.trim()}", lectures has "${numText}"`);
        }
        
        const dateCell = row.cells[1];
        if (dateCell.textContent.trim() !== lecture.date) {
            console.warn(`Date mismatch in row ${i}: table has "${dateCell.textContent.trim()}", lectures has "${lecture.date}"`);
        }

        const titleCell = row.cells[2];
        if (lecture.html_title) {
            console.log(`Row ${i}: has html_title with links`);
        } else if (titleCell.textContent.trim() !== lecture.title) {
            console.warn(`Title mismatch in row ${i}: table has "${titleCell.textContent.trim()}", lectures has "${lecture.title}"`);
        }

        const slidesCell = row.cells[3];
        const slidesLink = slidesCell.querySelector('a');
        const slidesURL = slidesLink ? slidesLink.href : null;
        if (slidesURL !== lecture.url_slides) {
            console.warn(`Slides URL mismatch in row ${i}: table has "${slidesURL}", lectures has "${lecture.url_slides}"`);
        }

        const recordingCell = row.cells[4];
        const recordingLink = recordingCell.querySelector('a');
        const recordingURL = recordingLink ? recordingLink.href : null;
        if (recordingURL !== lecture.url_recording) {
            console.warn(`Recording URL mismatch in row ${i}: table has "${recordingURL}", lectures has "${lecture.url_recording}"`);
        }

        const quizCell = row.cells[5];
        const quizLink = quizCell.querySelector('a');
        const quizURL = quizLink ? quizLink.href : null;
        if (quizURL !== lecture.url_quiz) {
            console.warn(`Quiz URL mismatch in row ${i}: table has "${quizURL}", lectures has "${lecture.url_quiz}"`);
        }
    }
}

function loadTable() {
    const table = document.getElementById('slides-table');
    const tbody = table?.querySelector('tbody');
    if (!table || !tbody) {
        console.warn('Could not find table with id slides-table');
        return;
    }
    // remove existing rows
    tbody.innerHTML = '';

    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        const tr = document.createElement('tr');

        // Number
        const tdNum = document.createElement('td');
        tdNum.textContent = lecture.num !== null ? lecture.num : '';
        tr.appendChild(tdNum);

        // Date
        const tdDate = document.createElement('td');
        tdDate.textContent = lecture.date;
        tr.appendChild(tdDate);

        // Title
        const tdTitle = document.createElement('td');
        if (lecture.html_title) {
            tdTitle.classList.add('out');
            tdTitle.innerHTML = lecture.html_title;
        } else {
            tdTitle.textContent = lecture.title;
        }
        tr.appendChild(tdTitle);

        // Slides
        const tdSlides = createOutLinkTd('Slides', lecture.url_slides);
        tr.appendChild(tdSlides);

        // Recording
        const tdRecording = createOutLinkTd('Recording', lecture.url_recording);
        tr.appendChild(tdRecording);

        // Quiz
        const quizText = lecture.quiz_num !== null ? `Quiz ${lecture.quiz_num}` : 'Quiz';
        const tdQuiz = createOutLinkTd(quizText, lecture.url_quiz);
        tr.appendChild(tdQuiz);
        tbody.appendChild(tr);
    }
}

const createOutLinkTd = (text, url) => {
    if (url === null) {
        return document.createElement('td');
    }
    const td = document.createElement('td');
    td.classList.add('out');
    const a = document.createElement('a');
    a.href = url;
    a.target = "_blank";
    a.textContent = text;
    td.appendChild(a);
    return td;
}


if (document.readyState === 'loading') {
    // document.addEventListener('DOMContentLoaded', cmpListToHTML);
    document.addEventListener('DOMContentLoaded', loadTable);
} else {
    // cmpListToHTML();
    loadTable();
}
